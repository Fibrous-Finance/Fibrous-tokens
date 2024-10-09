## Steps to Submit a Token

1. **Fork this repository**

   - Click the "Fork" button in the top-right corner of this repository to create your own copy.

2. **Clone the forked repository**

   - Clone the forked repository to your local machine:
     ```bash
     git clone https://github.com/YOUR_USERNAME/Fibrous-tokens.git
     cd Fibrous-tokens
     ```

3. **Add a new token JSON file**

   - Navigate to the appropriate folder (`scroll/tokens` or `starknet/tokens`) based on the network your token is deployed on.

   - Create a new `.json` file in the respective folder named after the token's contract address. For example, if your token's contract address is `0x1234...abcd`, the filename should be `0x1234...abcd.json`.

   - The file should follow this format:

     ```json
     {
       "address": "0x1234567890abcdef1234567890abcdef12345678",
       "name": "NAME",
       "symbol": "SYMBOL"
     }
     ```

4. **Add your token image**

   - Save your token's image as a `.png` file and ensure it's named after the token's contract address.

   - The image must be uploaded to the corresponding folder:

     - For tokens on **Scroll**, save the image to `images/scroll/`.
     - For tokens on **Starknet**, save the image to `images/starknet/`.

   - Example file path for a Scroll token:
     ```
     images/scroll/0x1234567890abcdef1234567890abcdef12345678.png
     ```

   **Image Requirements**:

   - Format: PNG
   - Size: 256x256 pixels

5. **Commit and push your changes**

   - Once you have added the JSON file and the image, commit and push your changes:
     ```bash
     git add .
     git commit -m "Add token 0x1234567890abcdef1234567890abcdef12345678"
     git push origin main
     ```

6. **Create a Pull Request**

   - Go to your forked repository on GitHub and click on "New Pull Request."
   - Ensure that you are comparing your forked repository's branch with the main branch of the `Fibrous-tokens` repository.
   - Submit the pull request for review.

7. **Wait for Review**
   - Once you've submitted the pull request, the team will review your submission. If everything looks good, your token will be approved and merged into the repository.

## Example

If your token's contract address is `0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7`, your files should look like this:

- JSON file:

  ```
  starknet/tokens/0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7.json
  ```

  ```json
  {
    "address": "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
    "name" : "Ether",
    "symbol": "ETH"
  }
  ```

- Image file:
  ```
  images/starknet/0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7.png
  ```
