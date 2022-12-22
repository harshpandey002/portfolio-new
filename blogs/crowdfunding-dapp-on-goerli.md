---
title: "Crowdfunding Dapp on Goerli"
description: "Django is a very powerful, high level Python framework for building web applications"
---

## 🤔 What the heck are we building?

Hi Devs, My name is [Harsh Pandey](https://harshkumarpandey.com) and in this blogs we will see how to develop a crowdfunding dapp using most popular and powerfull tech stack out there i.e. Solidity(ofcourse), thirdweb, tailwindcss and Nextjs.

[Preview here](https://dopp.vercel.app/)
![Project Image](https://i.imgur.com/V7dmMmp.png)

## 💎 What will you learn?

You will learn how to write smart contract using solidity, release and deploy it to network of your choice and interact with it all using thirdweb. You'll also learn how to deploy anything to ipfs using thirdweb

## 👀 Prerequisites

All you need to know is **some terminal skills**, **basic understanding of blockchain & smart contracts**, **some javascript** and **some Reactjs**. You'll pick up the rest along the way.

Download Metamask for your browser if you haven't already from official website [https://metamask.io](https://metamask.io)

## 📐 Project Setup

Let's setup a nextjs app with typescript and tailwindcss.

Start by creating a new Next.js project if you don’t have one set up already.

```
> npx create-next-app@latest dopp --typescript --eslint
```

If you want to add Tailwindcss to the app, you can follow this short guide by tailwind [https://tailwindcss.com/docs/guides/nextjs](https://tailwindcss.com/docs/guides/nextjs)

but before we move further, let's install other dependencies as well.

```
> npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers
```

we'll use `@thirdweb-dev/react` to interact with the contract and to upload images to ipfs decentralized storage. `ethers` is used internally but also provides utility function to parse numbers or ethers to supported value by solidity/javascript.

## 📜 Let's create our Smart Contract

```sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Dopp {

    // struct is how you create object in solidity
    struct Campaign {
        uint id;
        string image;
        string name;
        string url;
        string description;
        uint amountReceived;
        bool goalAchieved;
        uint totalAmount;
        // address are nothing but string, but solidity need to know that string will be an address.
        address payable author;
    }

    //  mappings is how you create object with key value pair.
    // In this case campaigns = {0: {...CampaignStruct}, 1: {...CampaignStruct}}
    mapping(uint => Campaign) public campaigns;

    // We will store ids with the help of this count.
    uint256 public campaignCount = 0;

    // Event is explain below this code snippet
    event CampaignCreated(
        uint256 id,
        string image,
        string name,
        string url,
        string description,
        uint256 totalAmount,
        address author
    );

    event FundsDonated(
        uint id,
        string name,
        string description,
        uint amount,
        address investor
    );

    function createCampaign(
        string memory _image,
        string memory _name,
        string memory _url,
        string memory _description,
        uint _totalAmount
    ) public {

        // require statements handle if else part of logic, if condition(1st param) not met, then send this message(2nd param).
        require(bytes(_image).length > 0, "Send Nudes!");
        require(bytes(_description).length > 0, "Describe bitch!!");
        require(bytes(_name).length > 0, "Name is Required!");
        require(_totalAmount > 0, "Ask money");

        // mapping id to campaign, this wil get stored in global variable we defined earlier in the start.
        campaigns[campaignCount] = Campaign(
            campaignCount,
            _image,
            _name,
            _url,
            _description,
            0,
            false,
            _totalAmount,
            payable(msg.sender)
        );

        // incrementing count to use in next campaign.
        campaignCount++;

        // we defined event earlier, here we are emitting.
        emit CampaignCreated(
            campaignCount - 1,
            _image,
            _name,
            _url,
            _description,
            _totalAmount,
            msg.sender
        );
    }

    function donateFunds(uint _id) public payable {
        require(msg.value > 0, "Send some money bitch!");

        // Checking if target donation amount was achieved and reverting the transaction.
        require(!campaigns[_id].goalAchieved, "Goal already achieved.");

        // calculating total amount received including this transaction.
        uint netAmount = campaigns[_id].amountReceived + msg.value;

        // Setting total amount received to netAmount
        campaigns[_id].amountReceived = netAmount;

        // Transfering the amount to campaign owner
        campaigns[_id].author.transfer(msg.value);

        // checking if target donation amount is achieved after this transaction
        if (netAmount >= campaigns[_id].totalAmount) {
            campaigns[_id].goalAchieved = true;
        }

        emit FundsDonated(
            _id,
            campaigns[_id].name,
            campaigns[_id].description,
            msg.value,
            msg.sender
        );
    }
}
```

- An Event is emitted, it stores the arguments passed in transaction logs. These logs are stored on blockchain and are accessible using address of the contract till the contract is present on the blockchain. Use cases includes

  - Listening for events and updating user interface
  - A cheap form of storage

- You can send Ether to other contracts by

  1. transfer (2300 gas, throws error)
  2. send (2300 gas, returns bool)
  3. call (forward all gas or set gas, returns bool)

- Learn implementations of the three methods [here](https://solidity-by-example.org/sending-ether/).

- You can also store donors and amount donated by each of them, and deadline for the donations. Checkout the [Smart Contract](https://gist.github.com/harshpandey002/65f7ae02a841ff3de82b82d6217bbbaf) by [jsmastery](https://www.youtube.com/@javascriptmastery).

## 🚀 Deploy contract using Thirdweb

Go to the contract directory in terminal and enter

```
> npx thirdweb@latest release
```

- You might get this message, Enter and proceed
  ![install thirdweb version](https://i.imgur.com/7T7uS8b.png)

- Again, you might see this, Enter and proceed
  ![terminal message](https://i.imgur.com/N9zULJk.png)

- Once completed, you'll see a link to the published smart contract like this

![Contract Url](https://i.imgur.com/HjDGt8d.png)

- Contract is not deployed yet, but published to thirdweb dasboard, learn more about it [here](https://portal.thirdweb.com/release)

- Go to the link and fill up the info about the release and then click on `Create Release` button at the bottom.

- You will need to make a gassless transaction, which will upload the code to polygon. Releases are recorded on chain, and enable others to deploy this contract and track new versions.

- Now the contract can be deployed by anyone, for example check out my release [https://thirdweb.com/0x83CA1961e5b150D65c7C9AFD1a9D72bAa5bDcbd8/Dopp](https://thirdweb.com/0x83CA1961e5b150D65c7C9AFD1a9D72bAa5bDcbd8/Dopp).

- Anyone can see the read and write methods of the contract, events, code snippet to interact with functions using thirdweb sdk, and even the contract code. How cool is that!!🤯

![Published contract](https://i.imgur.com/oJ8bB7D.png)

- Click on `Deploy Now` button at the top right, select which network you want to deploy to, make sure to check the box which will add the contract to you thirdweb dashboard.

- Make the 2 transaction and 🥳 you deployed the contract using thirdweb.

- Once you have deployed, you will be routed to the contract dashboard, which again can be shared with anyone. My contract [https://thirdweb.com/goerli/0xbDA30644945181E76Ce82e479a4AF159bBF8b3Cb/](https://thirdweb.com/goerli/0xbDA30644945181E76Ce82e479a4AF159bBF8b3Cb/)

![](https://i.imgur.com/n8CR1cn.png)

- Checkout the contract address at the top left(below contract name)

- You can even interact with the contract from the `Explorer` tab.

## 👜 Setup thirdweb and connect wallet.

Inside you `_app.tsx`, wrap the app with <ThirdwebProvider> and pass `ChainId.Goerli` as `desiredChainId` prop.

I've deployed my contract on `Goerli testnet` so I'm gonna set `desiredChainId` to goerli.

```tsx
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const desiredChainId = ChainId.Goerli;

  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
```

I initially planed to deploy on `Mumbai Testnet` but transactions keep failing on the mumbai network probably due to [this](https://medium.com/stakingbits/polygon-minimum-gas-fee-is-now-30-gwei-to-curb-spam-8bd4313c83a2)

Thirdweb provides with a `<ConnectWallet />` component ready to import and use. Learn everything about handling wallets with thirdweb [here](https://www.blocktrain.info/blog/handle-wallets-with-thirdweb)

In my case, I've used this wallet in Hero section. Once User connect their wallet, you can access their wallet address using `useAddress()` by thirdweb.

```tsx
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

export default function Hero() {
  const address = useAddress();
  console.log(address);

  return <ConnectWallet accentColor="#1D8399" />;
}
```

`address` listens to wallet events, so if user switches to different account, `address` autmatically changes and component re-renders.

## 🖼️ Upload image to IPFS with thirdweb.

Let's see how you can upload image to ipfs so that it stays forever.

- We will use another utility function by thirdweb to do this

```jsx
import { useStorageUpload } from "@thirdweb-dev/react";

export default function createCampaignModal() {
  const [image, setImage] = useState("");

  //  This will give us the uploadFunction, we'll rename it.
  const { mutateAsync: uploadToIpfs } = useStorageUpload();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const imageUrl = await uploadToIpfs({
      data: [image],
      options: {
        //This will preppend the gatewayUrl before CID
        uploadWithGatewayUrl: true,
        // Since we are individually uploading image, we dont need directory
        uploadWithoutDirectory: true,
      },
    });

    console.log(imageUrl);
    // https://gateway.ipfscdn.io/ipfs/QmdQdSZT4275p97EGXjSYQpiFAz1mCH1AucJ7wAerYNcRM/
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        name="image"
        onChange={(e) => setImage(e.target.fils[0])}
      />
      <button type="submit">Create Campaign</button>
    </form>
  );
}
```

See? How easy it is to upload image to ipfs. You can upload as many items as you want together by passing it to data array.
In the response, you receive array of CIDs

## 💻 Interacting with smart contract

- ### Invoking functions with no parameter

```js
import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function useContractMethods() {
  // Because we deployed the contract using thirdweb, we don't need to pass the abi array as second parameter.
  const { contract } = useContract(
    "0xbDA30644945181E76Ce82e479a4AF159bBF8b3Cb"
  );

  // useContractRead read provides us with the data and a refetch function in case we need to get the updated data.
  const { data: campaignCount, refetch: getCampaignCount } = useContractRead(
    contract,
    "campaignCount"
  );

  // In case of useContractWrite, you don't get data but only the fetch function
  const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );
}
```

- ### Invoking function with parameters

```jsx

import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function useContractMethods() {
  // This is absolutely required in any case
  const { contract } = useContract(
    "0xbDA30644945181E76Ce82e479a4AF159bBF8b3Cb"
  );

  // useContractRead takes 3rd, 4th ... as parameters to the function. But refetch function will only return response with the parameters initialy passed to useContractRead.
  //So this is not the recommended way to invoke function with paramenters.
  const { data: campaignCount, refetch: getCampaignCount } = useContractRead(
    contract,
    "campaigns",
    0
  );

    // Let's create a custom function which will loop through the campaign count and get the campaigns one by one.
    async function getCampaigns() {
    let _campaigns = [];

    try {
        // campaignCount is a BigNumber.
      for (let i = 0; i < campaignCount.toNumber(); i++) {
        // Don't forget optional chaining of `contract?.call()`, because you might want to imidiately call this function when page renders, and contract may not be available at that time.
        // First parameter is the name of function you want to invoke, rest are the parameters to be passed
        const data = await contract?.call("campaigns", i);
        _campaigns.push(data);
      }
      // Store the campaigns in a state
      setCampaigns(_campaigns);
    } catch (error) {
        console.log(error)
    }
  }
```

- ### Invoking payable function.

```js
const donate = async () => {
  try {
    await contract.call("donateFunds", id.toNumber(), {
      value: ethers.utils.parseEther("2"),
    });
  } catch (error) {
    console.log(error);
  }
};
```

This is very similay to previous case, only difference is the last parameter of `contract.call()` is the option object where the amount is to be set (parse with ethers utility function).

```js
{
  value: ethers.utils.parseEther(String(amount));
}
```

## 🥳 You've done it

Congratulations on finishing the tutorial! Not everyone can do that 😛.

If you want a video tutorial on something very similar(actually better), checkout [JavaScript Mastery's](https://youtu.be/BDCT6TYLYdI) video and make sure to follow his youtube channel as well.

Also, don't forget to connect with me on [LinkedIn](https://www.linkedin.com/in/harshpandey002/), [Twitter](https://twitter.com/harshpandey002) and [Github](https://github.com/harshpandey002).

Also, are you on [lenster.xyz](https://lenster.xyz/u/harshpandey)? Because I'm there too 😃
