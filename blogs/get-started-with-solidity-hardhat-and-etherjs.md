---
title: "Get started with Solidity, Hardhat and Etherjs"
slug: "get-started-with-solidity-hardhat-and-etherjs"
description: "Learn step-by-step how to build, deploy, and interact with smart contracts using the most popular stack available in the market, i.e. Solidity, Hardhat, and Etherjs."
image: "https://i.imgur.com/DF14NnL.png"
squareImage: "../hardhatIcon.png"
date: "Oct 24, 2022"
tags: ["Solidity", "Hardhat", "Etherjs", "Nextjs"]
isLive: true
---

## 👋 Welcome

My name is Harsh Pandey and I’ll be your instructor for this short project. You might already know, making projects is the fastest way to learn. I'm gonna say it again anyway.

**_Making projects is the fastest way to learn :P_**

## 📖 What will you learn?

1. Creating Smart contracts with Solidity.
2. Leveraging OpenZeppelin to create ERC20 Contract
3. Compiling and Deploying smart contract with Hardhat.
4. Connecting to Metamask Wallet.
5. Metamask Wallet important methods and events.
6. Interacting with smart contract from React/Next app through Etherjs.

## 👀 Prerequisites

If you've worked with Javascript and Reactjs before, you'll get along fine.

You need [Nodejs](https://nodejs.org/en/) installed.

You also need to install and setup [Metamask](https://metamask.io/) for chrome.

## ⚒️ What are we building?

We are building a website, where user can connect to their ethereum wallet and mint ERC20 Tokens in exchange for some goerli ether.

We will deploy this Smart Contract on Goerli testnet using Alchemy node.

![Before wallet connect](https://i.imgur.com/RGWmNJ4.png)

Once user is connected to wallet, he can **Mint**, **Transfer** and even **Burn** his HKP Tokens.

_HKP is short for my name Harsh Kumar Pandey. I've used it as symbol for the Token. You can use your name or anything else._

![After wallet connect](https://i.imgur.com/DF14NnL.png)

Preview [Project-ERC20](https://project-erc20.vercel.app/)

## 🆘 How to get help?

If you're stuck somewhere and want help, you can message me on [LinkedIn](https://www.linkedin.com/in/harshpandey002/).

_BlockTrain will support Comment and Reply soon._

## 🏃‍♀️ Get your local environment up and running

First you'll need to get node/npm. If you don't have it head over [here](https://hardhat.org/tutorial/setting-up-the-environment#installing-node.js)

Next, let's head to the terminal. Go ahead and `cd` to the directory you want to work in. Once you're there run these commands:

```
mkdir project-erc20
cd project-erc20
npx create-next-app .
npm install --save-dev hardhat
```

What happens here is, you run:

1. `mkdir project-erc20` to create a directory named "project-erc20".
2. `cd project-erc20` to enter the newly created directory.
3. `npx create-next-app .` to generate the Next app template inside current directory.
4. `npm install --save-dev hardhat` to install Hardhat.

You may see a message about vulnerabilities after you run the last command and install Hardhat. Every time you install something from NPM, there is a security check done to see if any of the packages or the library you're installing has any reported vulnerabilities. This is more of a warning to you so you are aware!

## ⚙️ Initial project setup

Cool, now we should have hardhat.

```
npx hardhat
```

Note: If you're on Windows using Git Bash to install hardhat, you may run into an error at this step (HH1). You can try using Windows CMD to perform the HardHat install if you run into trouble. Additional info can be found [here](https://github.com/NomicFoundation/hardhat/issues/1400#issuecomment-824097242).

Choose the option to create a basic sample project. Say yes to everything.

The sample project will ask you to install hardhat-waffle and hardhat-ethers. These are other goodies we'll use later.

This will generate some folders and files, we'll go thorugh everything in detail latter.

Go ahead and install these other dependencies just in case it didn't do it automatically.

```
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers dotenv
```

You'll also want to install OpenZeppelin which is another library that's used a lot to develop secure smart contracts. We'll learn more about it in the next section. For now, just install it :).

```
npm install @openzeppelin/contracts
```

## ✍️ Some theory around smart contract.

Before anything, we'll need to get our local Ethereum network working. This is how we can compile and test our smart contract code.

For now, all you need to know is that a smart contract is a piece of code that lives on the blockchain. The blockchain is a public place where anyone can securely read and write data for a fee.

Inside of a contract, there are variables and functions. Varaibles store the data (like a database) and functions helps with reading and writing those variables.

The bigger picture here is:

We're going to write a smart contract. That contract has all the logic around our ERC20 i.e. mint, transfer and burn Tokens.

## 📃 Create Smart Contract.

Now that the project setup is completed, we can start writing smart contracts for our application.

In the contracts folder, create a new file named `Token.sol` and add the following code to it.

```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// This will import all the variables and methods of contracts mentioned after 'is'
// So we can accessing and override them according to our needs.
contract HKPtoken is ERC20, ERC20Burnable, Ownable  {

    // public keyword here creates a getter function which returns the value or the variable.

    // We can access these variable by simply writing variable name 'tokenPrice'

    // But to access these vairables from inherited contracts, we need to call them 'tokenPrice()'.
    uint public tokenPrice;
    uint public maxSupply;


    constructor() ERC20("HKPtoken", "HKP") {
      // In solidity, quantity of 1 means 1 * 10^18
      // and 1 Ether means, 1 * 10^18 wei

      // Setting token price to 0.2 ether
      tokenPrice = 2000000000000000;

      // Max supply is 150 tokens
      maxSupply = 150000000000000000000;
    }

    function mint(uint amount) public payable{
      // totalSupply means total number of Tokens already minted.

      // checking if totalSupply + requested amount is <= max allowed Supply(maxSupply)
        require(
            totalSupply() + amount <= maxSupply,
            "Exceeding max supply"
        );

      // checking if ether sent by minter is in accordence with tokenPrice and amount.
        require(
            msg.value * 10 ** decimals() / amount >= tokenPrice,
            "Pay Ether according to Token Price"
        );

      // This _mint() function is provided by OpenZeppelin ERC20 contract. There are generic codes that every ERC20 contract must have. OpenZeppelin helps us by removing the need to writing generic code and focus on requirement part.
        _mint(msg.sender, amount);
    }

    function withdrawEther() public onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    // We will call this function to get these information to show in front-end application.
    // We are returning multiple things from single function here so that we won't have to call each getter function one by one.
    function returnState() public view returns(uint _myBalance, uint _maxSupply, uint _totalSupply, uint _tokenPrice ){
        return (balanceOf(msg.sender), maxSupply, totalSupply(), tokenPrice);
    }

    // Notice how we are calling 'totalSupply()' to access.This is because this variable is inherited from ERC20 contract by OpenZeppelin.
}
```

## 🚀 Deploy Smart Contract using Hardhat

let's update the hardhat configuration at hardhat.config.js.

```js
// We need to import these extensions in order for hardhat to function properly
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

// We need hardhat-etherscan to upload(verify) aur smart contractto etherscan.
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: process.env.ALCHEMY_RPC_URL,
      accounts: [`0x${process.env.WALLET_PRIVATE_KEY}`],
    },
  },

  // We don't need following ethescan block for deployment, but we need it for smart contract verification (upload).
  etherscan: {
    apiKey: process.env.NEXT_PUBLIC_ETHERSCAN_API_KEY,
  },
};
```

`ALCHEMY_RPC_URL` is to create a connection between our app and blockchain.

`WALLET_PRIVATE_KEY` is the account which will deploy the contract and will become owner of the contract.

`NEXT_PUBLIC_ETHERSCAN_API_KEY` is needed to verify the smart contract. So that we could see and interact with smart contract from etherscan as well.

#### Let's grab `ALCHEMY_RPC_URL`:

1. Create an account on [alchemy.com](https://www.alchemy.com/).
2. Once you're in alchemy dashboard, Click on 'CREATE APP'.

![Alchemy Dashboard](https://i.imgur.com/Yf0l5KG.png)

3.  Give App a name and description.

![Create App](https://i.imgur.com/ydlntsM.png)

4. Keep the chain Ethereum and choose Goerli as Network.

5. Once App is created, you will see Key, HTTPS Url and Websocket.

![Create App](https://i.imgur.com/Fed6zV5.png)

6. Copy HTTPS Url and paste it in .env, that's our RPC URL

#### Let's grab `NEXT_PUBLIC_ETHERSCAN_API_KEY`:

1. Create an ccount on [etherscan.io](https://etherscan.io/)

2. Login and then go the [etherscan.io/myapikey](https://etherscan.io/myapikey)

3. Click on "Add", Give app a name, and that's all.

4. You will see you api key, Copy and paste in .env

![EtherScan API](https://i.imgur.com/havtQ1C.png)

_Notice that we get to do 5 API calls per second in free plan. The 'getState()' function we created earlier in contract will save api calls and get all important information in a single call._

#### Let's grab `WALLET_PRIVATE_KEY` from metamask:

1. Open MetaMask chrome extension.
2. Unlock and click on 3 dots on top right corner
3. Click 'Account Details.

![MetaMask Private Key](https://i.imgur.com/OJ8WJXh.png)

4. Click 'Export Private Keys'.

5. Copy the private keys in .env

By now your .env file should look like this.

```js
WALLET_PRIVATE_KEY = "6sadf43rtf7df3451f033453b7a293651096083e534rfcff48";
NEXT_PUBLIC_ETHERSCAN_API_KEY = "SD678FTGW7FU6GWEDFC6WE5FF88";
ALCHEMY_RPC_URL =
  "https://eth-goerli.g.alchemy.com/v2/SDFSDFSEFRR345T43R34RTFR";
```

_Make sure to add this file to .gitignore before pushing to github._

Now we have everything to deploy and even verify our smart contract.

Go ahead and create a file named `deploy.js` under the `scripts` folder.

Copy-paste code below to `deploy.js` file.

```js
const main = async () => {
  // Here 'hre' is injected automatically by hardhat, no need to import it explicitly.
  const DevToken = await hre.ethers.getContractFactory("HKPtoken");
  // Any value passed to deploy() will be passed to contructor of our contract as parameters.

  const devToken = await DevToken.deploy();

  // 'deploy()' in previous line deploys the contract.
  // 'deployed() in next line checks if contract is deployed.
  await devToken.deployed();

  // Once deployed (in 20-30 seconds) you will see the contract address in console. You can also check the transaction on etherscan goerli network.
  console.log("Contract deployed to: ", devToken.address);
};

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
```

Let's compile our contract, enter this code in terminal.

```
npx hardhat compile
```

This creates a new folder in the project root, called artifacts, and populates it with the compiled version of our Token.

We need the `HKPtoken.json` file in artifacts to interact with the contract from front-end later.

Before we deploy our contract, we need goerli ether in our account to pay the gas fees for all the transactions (deploy, function call).

Go to [Goerli Faucet](https://goerlifaucet.com/) and enter your wallet address, goerli ethers will be transfered to your wallet after 20-30 seconds.

There are many other faucets as well, google if you need more.

Now run below code in terminal to deploy the contract by running `deploy.js` file we created earlier.

```
npx hardhat run ./scripts/deploy.js --network goerli
```

After few seconds of running this, you will see your deployed contract address in the terminal which will look like

```
npx hardhat run ./scripts/deploy.js --network goerli
Contract deployed to: 0x3a7a068B3Bf32675F8C8dA60d34Cea7C02a5736b
```

Copy this address and save it in a file, we'll need this later along with `HKPtoken.json` file for interacting with the contract.

Now if you'll go to `https://goerli.etherscan.io/address/0x3a7a068B3Bf32675F8C8dA60d34Cea7C02a5736b` and click on contract.

you will see the byte code of the contract.

![byte code](https://i.imgur.com/C2PBkdA.png)

Now let's verify our smart contract.

Enter following code in the terminal.

```
npx hardhat verify --network goerli 0x3a7a068B3Bf32675F8C8dA60d34Cea7C02a5736b
```

_Deployed contract address in the end_

Once execution of this code is completed, again go to etherscan, contract tab.

![contract](https://i.imgur.com/wwoKHAt.png)

You will see the code for your deployed contract, along with all the inherited contract.

You will also see these buttons, Read Contract and Write contract button on top left. So now you can read and write state variables from etherscan as well after connecting to wallet.

## 💼 Connecting to Wallet and handling events.

Copy-paste contents of `artifacts/contracts/HKPtoken.json` to `helpers/abi.json`

Make another file `helpers/contants.js` and copy-paste below code.

```js
import abi from "./abi.json";

// Get abi array from abi.json file
export const contractABI = abi.abi;

// Deployed contract address
export const contractAddress = "0x3a7a068B3Bf32675F8C8dA60d34Cea7C02a5736b";
```

Create a `context/walletContext.jsx` file and add below code.

```jsx
import { createContext, useContext, useEffect, useState } from "react";

import { contractABI, contractAddress } from "@/helpers/constants";

import { ethers } from "ethers";

export const walletContext = createContext();
export const useWalletContext = () => useContext(walletContext);

function WalletProvider({ children }) {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [contractState, setContractState] = useState(null);

  // Create a button labled "Connect Wallet" and on Click, call this function.
  const connectWallet = async () => {
    try {
      // If metamask extension is not installed, etherem will be undefined.
      const { ethereum } = window;
      if (!ethereum) return;

      const accounts = await ethereum.request({
        // This opens metamask and ask to connect to the website.
        method: "eth_requestAccounts",
      });

      // If connected, returns array of accounts(address) which you allow during request
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

 // This Function checks if website is connected to wallet or not.
  const checkConnection = async () => {
    try {
      // If metamask extension is not installed, etherem will be undefined.
      const { ethereum } = window;
      if (!ethereum) return;

      const accounts = await ethereum.request({
        // this method check for any connection and returns array of accounts which are connected
        method: "eth_accounts",
      });

      // First account in array is the active one.
      setCurrentAccount(accounts[0]);

      try {
        // If you are on mumbai network on metamask, this will ask you to switch to goerli network
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          // chainId must be in hexadecimal numbers.
          params: [{ chainId: `0x${Number(80001).toString(16)}` }],
        });
      } catch (error) {
        console.log(error);

        // If there was error switching, code 4902 represents that goerli network is not added to metamask, so method below will pre-fill the network details and ask user to add the network.
        if (error.code === 4902) {
          addNetwork();
        }

        if (error.code === -32002) {
          alert("Open Metamask");
        }
      }

      // This function is declared at the bottom.
      // Will explain this with function declaration.
      getContractState();
    } catch (error) {
      console.log(error);
    }
  };


  const addNetwork = async = () => {
      try {
        await window.ethereum.request({
          // Learn more about this method here https://docs.metamask.io/guide/rpc-api.html#wallet-addethereumchain
          // To get the details of any chain, visit https://chainid.network/chains.json
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: `0x${Number(80001).toString(16)}`,
              chainName: "Mumbai",
              nativeCurrency: {
                name: "MATIC",
                symbol: "MATIC",
                decimals: 18,
              },
              rpcUrls: [
                "https://matic-mumbai.chainstacklabcom",
                "https://rpc-mumbai.maticvigil.com",
                "https://matic-testnet-archive-rpbwarelabs.com",
              ],
              blockExplorerUrls: ["https://mumbapolygonscan.com"],
            },
          ],
        });
      } catch (error) {
        console.log(error);
      }
  }

  const getContract = () => {
    const { ethereum } = window;

    if (!ethereum) return;

    // This provider is connecting us to blockchain, there could be different types of web3 providers.
    // lern more here https://docs.ethers.io/v5/api/providers/
    const provider = = new ethers.providers.Web3Provider(ethereum);

    // signer is required to call 'write methods' of contracts. Every transaction is signed by this signer with the help of private key of your wallet, provided with ethereum object.
    const signer = provider.getSigner();

    // We pass the contract address, abi and signer to get access to all the functions of the contract, and the ability to call setter functions.
    // We can also pass provider instead of signer in case user is not connected to wallet. In this user cannot call setter functions of contract, only getter functions could be called.
    const contractMethods = new ethers.Contract(
      contractAddress,
      contractABI,
      signer
    );

    return contractMethods;
  };

  useEffect(() => {

    if (!window.ethereum) return;
    // Metamask is installed, check connection and get contract state (tokenPrice, totalSupply, maxSupply, balance of user)
    checkConnection();


    // Adding event listeners

    // In metamask, you can either change the active account(user), or change the active network (goerli, mumbai, kovan, etc.)
    ethereum.on("chainChanged", handleChainChanged);
    ethereum.on("accountsChanged", handleDisconnect);

    // Cleanup of listener on unmount
    return () => {
      ethereum.removeListener("chainChanged", handleChainChanged);
      ethereum.removeListener("accountsChanged", handleDisconnect);
    };
  }, []);

  const handleDisconnect = (accounts) => {
    if (accounts.length == 0) {
      setCurrentAccount("");
    } else {
      setCurrentAccount(accounts[0]);
    }
  };

  const handleChainChanged = (chainId) => {
    // If the chain is changed to goerli network, don't do anything.
    if (chainId == "0x13881") return; // chain id is received in hexadecimal

    // chain is changed to any other network, reload the page.
    // On reload, checkConnection will run due to useEffect.
    // Inside of that function, we are asking user to switch to goerli network.
    window.location.reload();
  };

  const contextValue = {
    connectWallet,
    currentAccount,
    contractState,
    getContract,
  };

  return (
    <walletContext.Provider value={contextValue}>
      {children}
    </walletContext.Provider>
  );
}

export default WalletProvider;
```

Above code explains everything about connecting to wallet and handling events.

But remember I have coded `addNetwork()` for mumbai testnet, you have to find out and fill the details of goerli testnet.

#### Resources

[Add Ethereum Chain](https://docs.metamask.io/guide/rpc-api.html#wallet-addethereumchain)

[Chain Details](https://chainid.network/chains.json)

## 😬 Interacting with Contract

Now let's call the functions of our smart contract and get the values of state variables declared by us or OpenZeppelin.

Add Code below to `walletContext.jsx`

#### Fetch contract state variables

```js
const getContractState = async () => {
  try {
    // contractMethods will have all the functions of our smart contract as well as the inherited smart contract.
    const contractMethods = getContract();

    // We declared this function to get the values of our state variables. We were returning multiple values from this function, so we'll recieve them in array.

    const state = await contractMethods.returnState();

    // Accessing them by index and storing in react state.
    // Remember 1 in JS = 1*10^18 in solidity? Values returned by contract are not supported in JS, so ether gives us util function to format / parse them.
    // so we are formatting the values using ethers.utils.formatEther().
    setContractState({
      myBalance: state[0] ? parseFloat(ethers.utils.formatEther(state[0])) : 0,
      maxSupply: parseFloat(ethers.utils.formatEther(state[1])),
      totalSupply: parseFloat(ethers.utils.formatEther(state[2])),
      tokenPrice: ethers.utils.formatEther(state[3]),
    });
  } catch (error) {
    console.log(error);
  }
};
```

#### Mint tokens

Now lets understand how to mint token by sending ether and expected parameters to our `mint()` function of the contract.

```js
const handleMint = async () => {
  // mintAmount is a react state hooked with an number input.
  if (mintAmount == 0) return;

  // Getting all the methods of contract.
  const contractMethods = createEthereumContract();

  // Declaring value (number of ether) that has to be sent with function call (Transaction).
  // Calculating how munch ether user need to send based on tokenPrice to get mintAmount number of token.
  // Like I've mentioned earlier, 1 in JS = 1*10^18 in Solidity, so we are converting JS value to Solidity supported value using ethers.utils.parseEther().
  const options = {
    value: ethers.utils.parseEther(
      (mintAmount * contractState.tokenPrice).toString()
    ),
  };

  // ethers.utils.parseEther() only accepts string, so we need to convert mintAmount to String.
  // Passing our option object as the LAST PARAMETER to mint() function of contract which determines how much ether to be sent.
  try {
    const txn = await contractMethods.mint(
      ethers.utils.parseEther(mintAmount.toString()),
      options
    );

    // Once transaction is initiated, we can wait for the transaction be get mined.
    await txn.wait();

    // Once transaction is mined, Fetch updated states of contract.
    getContractStates();
  } catch (error) {
    console.log(error);
  }
};
```

#### Transfer tokens.

Now that you have understood Minting of tokens, Transfering and burning them is simple function calls just like in case of minting.

```js
const handleTransfer = async () => {
  // amount is react state hooked with number input to determine how much tkoen to transfer.
  if (amount == 0) return;

  // Fetching functions of contract.
  const contractMethods = createEthereumContract();

  try {
    // Passing the wallet adrress of receiver and amount after parsing it.
    const txn = await contractMethods.transfer(
      to,
      ethers.utils.parseEther(amount.toString())
    );

    // Waiting for transaction to be mined.
    await txn.wait();

    // Once mined, fetching updated contract states.
    getContractStates();
  } catch (error) {
    // Handle Common Errors.
    if (error.reason === "invalid address") alert("Invalid Address");
    else if (
      error.reason ===
      "execution reverted: ERC20: transfer amount exceeds balance"
    )
      alert("Transfer amount exceeds balance");
    else alert(error.reason);
  }
};
```

use `console.log(contractMethods)` to check what available methods you have after `const contractMethods = createEthereumContract();`.

You will find `burn()` method with one parameter. Try to implement `handleBurn()` method by your self.

![Result](https://i.imgur.com/0ba4lLF.png)

_These red markings are contract states returned from returnState() method from our contract._

## 😍 You've done it

Super exciting that you made it to the end. Pretty big deal!

Thank you for contributing to the future of web3 by learning this stuff. The fact that you know how this works and how to code it up is a superpower. Use your power wisely ;).

If you have been following up and have created something, make sure to showcase your project connect with me on [LinkedIn](https://www.linkedin.com/in/harshpandey002/).
