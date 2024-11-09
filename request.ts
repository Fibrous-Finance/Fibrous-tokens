import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';

async function getLatestPullRequest(repo: string, token: string) {
  const response = await axios.get(`https://api.github.com/repos/${repo}/pulls?state=open&sort=created&direction=desc`, {
    headers: {
      'Authorization': `token ${token}`
    }
  });

  if (response.data.length === 0) {
    throw new Error('No open pull requests found.');
  }

  return response.data[0].number;
}

async function getChangedFiles(prNumber: number, repo: string, token: string) {
  const response = await axios.get(`https://api.github.com/repos/${repo}/pulls/${prNumber}/files`, {
    headers: {
      'Authorization': `token ${token}`
    }
  });

  return response.data.map((file: any) => file.filename);
}

async function readFileContent(filePath: string) {
  return fs.promises.readFile(filePath, 'utf-8');
}

async function makeApiRequest(fileContent: string) {
  try {
    console.log('Making API request...', fileContent);
    const response = await axios.post('https://api.example.com/endpoint', {
      data: {
        content: fileContent
      }
    }, {
      headers: {
        'Authorization': `Bearer ${process.env.API_TOKEN}`
      }
    });

    console.log('Response:', response.data);
  } catch (error) {
    console.error('Error making API request:', error);
  }
}

async function main() {
  const repo = process.env.REPOSITORY;
  const token = process.env.TOKEN;

  if (!repo || !token) {
    console.error('Missing required environment variables.');
    return;
  }

  try {
    const prNumber = await getLatestPullRequest(repo, token);
    const changedFiles = await getChangedFiles(prNumber, repo, token);

    for (const file of changedFiles) {
      if (file.endsWith('.json')) { // Assuming the new files are JSON files
        const filePath = path.join(process.cwd(), file);
        const fileContent = await readFileContent(filePath);
        await makeApiRequest(fileContent);
      }
    }
  } catch (error) {
    console.error('Error processing pull request:', error);
  }
}

main();