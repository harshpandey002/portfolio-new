---
title: "Handling wallet with Thirdweb SDK"
slug: "handling-wallet-with-thirdweb-sdk"
description: "Handling wallets and their events in the frontend application is incredibly simple with the Thirdweb SDK. Learn from this brief blog."
image: "https://i.imgur.com/84pEGOG.png"
squareImage: "../walletIcon.png"
date: "Nov 04, 2022"
tags: ["Wallets", "Thirdweb", "Reactjs"]
isLive: true
---

## 👋 Welcome

Hi Devs, My name is Harsh Pandey and in this blogs we will see how easily you can handle Wallets with the help of thirdweb SDK.

## 👀 Prerequisites

In order to understand exactly how thirdweb is simplifying wallets, you first need to know manual method of handling wallets. In case you don't know that. you can refer to my other blog [Get Started with Solidity, Hardhat and Etherjs](https://www.blocktrain.info/blog/get-started-with-solidity-hardhat-and-etherjs) and go to the section **Connecting to Wallet and handling events**.

You also need to know concepts of react and hooks.

## ⚒️ Setup

After

```
npx create-react-app thirdweb-wallet
```

OR

```
npx create-next-app thirdweb-wallet
```

Install dependencies

```
npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers
```

Then wrap your application in the ThirdwebProvider to get started!

```jsx
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";

const desiredChainId = ChainId.Mumbai;

  // If you want to use any custom provider or signer, add it here. (Optional)
  const myProvider = ...;
  const mySigner = ...;
  const rpcUrl = ...;

export const MyApp = () => {
  return (
    <ThirdwebProvider
        desiredChainId={desiredChainId}
        signer={mySigner}
        provider={myProvider}
        chainRpc={{
        1: rpcUrl,
      }}
    >
      {/* Your App Goes Here */}
    </ThirdwebProvider>
  );
};
```

Now you can use any hook by thirdweb in your components.

If you `console.log(ChainId)`, you will find

```json
{
  "1": "Mainnet",
  "5": "Goerli",
  "10": "Optimism",
  "56": "BinanceSmartChainMainnet",
  "97": "BinanceSmartChainTestnet",
  "137": "Polygon",
  "250": "Fantom",
  "420": "OptimismGoerli",
  "1337": "Localhost",
  "4002": "FantomTestnet",
  "31337": "Hardhat",
  "42161": "Arbitrum",
  "43113": "AvalancheFujiTestnet",
  "43114": "Avalanche",
  "80001": "Mumbai",
  "421613": "ArbitrumGoerli",
  "1666600000": "Harmony",
  "Mainnet": 1,
  "Goerli": 5,
  "Polygon": 137,
  "Mumbai": 80001,
  "Harmony": 1666600000,
  "Localhost": 1337,
  "Hardhat": 31337,
  "Fantom": 250,
  "FantomTestnet": 4002,
  "Avalanche": 43114,
  "AvalancheFujiTestnet": 43113,
  "Optimism": 10,
  "OptimismGoerli": 420,
  "Arbitrum": 42161,
  "ArbitrumGoerli": 421613,
  "BinanceSmartChainMainnet": 56,
  "BinanceSmartChainTestnet": 97
}
```

We are setting `Mumbai` network as our desired chain.

## 👆 Button Component by Thirdweb

The Connect Wallet button allows the user to connect to your application with the most popular wallets, such as MetaMask, Coinbase, or WalletConnect.

```jsx
import { ConnectWallet } from "@thirdweb-dev/react";

export default function Home() {
  return (
    <div>
      <ConnectWallet />
    </div>
  );
}
```

There are 3 props you can pass to this button like `accentColor`, `colorMode` and `auth`. Learn more about them in the [docs](https://portal.thirdweb.com/ui-components/connectwalletbutton#props)

Just by code above, you will get this button.

![Before Connect](https://i.imgur.com/CTdt9SB.png)

And once you connect to a wallet.

![After Connect](https://i.imgur.com/ruUiQ65.png)

Notice how Chain Symbol, Balance, address, and Wallet Icons is automatically displayed and the UI is so cool🔥.

![After Connect](https://i.imgur.com/nLEscBE.png)

If you wish to switch to another network, you will be prompted automatically to add the missing network to your wallet and switch once added.

Remember how we did this manually earlier?

## 💰 Individual Wallets

What if you want custom button and handle the events manually.

```jsx
import {
  useMetamask,
  useWalletConnect,
  useCoinbaseWallet,
  useDisconnect,
} from "@thirdweb-dev/react";

const Home = () => {
  const connectWithMetamask = useMetamask();
  const connectWithWalletConnect = useWalletConnect();
  const connectWithCoinbaseWallet = useCoinbaseWallet();

  const disconnect = useDisconnect();

  return (
    <div>
      <button onClick={connectWithMetamask}>Connect Metamask</button>
      <button onClick={connectWithWalletConnect}>Connect WalletConnect</button>
      <button onClick={connectWithCoinbaseWallet}>
        Connect Coinbase Wallet
      </button>
      <button onClick={disconnect}>Disconnect</button>
    </div>
  );
};
```

Code above is self explanatory.

## 🌐 Network Connection

Now that you're connect to wallet of your choice, let's see how you can access connected chain id, connected address and add/switch network if needed.

```jsx
import {
  useChainId,
  useNetwork,
  ChainId,
  useAddress,
  useNetworkMistmatch,
} from "@thirdweb-dev/react";

const App = () => {
  // This will return chainId of connected network.
  const chainId = useChainId();
  const address = useAddress();

  // This function will prompt you to add network to wallet and then switch in case of missing network.
  const [, switchNetwork] = useNetwork();

  // This will return true if connected chainId is different from desiredChainId you passed to <ThirdwebProvider> earlier.
  const isMismatch = useNetworkMistmatch();

  return (
    <div>
      <p>{chainId}</p>
      <p>{ChainId[`0x${chainId}`]}</p>
      <p>{address}</p>
      <p>{JSON.stringify(isMismatch)}</p>

      <button onClick={() => switchNetwork(ChainId.Polygon)}>
        Switch Network
      </button>
    </div>
  );
};
```

In the code above

```js
console.log(chainId); // 8001
console.log(ChainId[`0x${chainId}`]); // Mumbai
```

## 🤩 You've done it

Probably you will be using thirdweb for handling wallets in almost all your projects.

See the button in action in my most recent project [OpenRiver](https://openriver-thirdweb.vercel.app/), a NFT Marketplace developed using Thirdweb pre-built contracts and Moralis web3 API with no Backend or Baas.

Will write a blog soon on that, so stay tuned.

Follow me on [LinkedIn](https://www.linkedin.com/in/harshpandey002/) and [Twitter](https://twitter.com/harshpandey002).
