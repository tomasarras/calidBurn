# Deploy contracts

1. Create an app in [alchemy](https://dashboard.alchemy.com/)
2. Generate an API KEY
3. Copy generated http url in **.env** API_URL
4. Copy private key from metamask account in **.env** PRIVATE_KEY
5. npx hardhat compile
6. npx hardhat --network goerli run scripts/deploy.js