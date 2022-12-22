---
title: "Build NFT Marketplace using Thirdweb"
slug: "build-nft-marketplace-using-thirdweb"
description: "Learn how to use the thirdweb SDK and pre-built contracts to construct your own NFT Marketplace and interact with any smart contract with ease. No Baas or backend are necessary."
image: "https://i.imgur.com/V7dmMmp.png"
squareImage: "../thirdwebIcon.png"
date: "Nov 17, 2022"
tags: ["Thirdweb", "Nextjs"]
isLive: true
---

## 👋 Welcome

You've made it — hell yeah! Welcome :). My name is [Harsh Pandey](https://www.harshkumarpandey.com/) and I’m just the guy who will be chatting with yah here. BTW -- massive shoutout to [Farza](https://twitter.com/FarzaTV) whose writing style has inspired me.

## 👀 Prerequisites

All you really need to know going into this is **some terminal skills, some JavaScript, and some React.js**. You'll pick up the rest along the way. **No Solidity needed**. We'll be using this fancy tool called [thirdweb](https://thirdweb.com/) which lets us work with smart contracts using just JavaScript.

## ⚒️ What are we building?

We are building a NFT Marketplace where, user can Create collection, Mint NFT, List them from Sale, De-List from Marketplace and Buy NFTs listed by others.
I call it [OpenRiver](http://openriver-thirdweb.vercel.app/) :P

We'll be using Nextjs, Thirdweb and Moralis

## ⚙️ Initial Setup

```
npx create-next-app openriver
```

once done, add these dependencies:

```
npm install @thirdweb-dev/react @thirdweb-dev/sdk ethers
```

### 📐 Configure the ThirdwebProvider

Specify the network your smart contracts are deployed to in the desiredChainId prop and wrap your application like so:

```jsx
// _app.jsx
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const App = () => {
  return (
    <ThirdwebProvider desiredChainId={ChainId.Mumbai}>
      <YourApp />
    </ThirdwebProvider>
  );
};
```

## 🫴 Handle Wallet using Thirdweb

If you've built a connect to wallet in the past, you'll notice how it is way easier w/ thirdweb's client SDK since it handles common edge cases for you (ex. maintaining the state of a user's wallet in a variable).

I've already writen a short yet consice blog on [Handling Wallets with thirdweb](https://www.blocktrain.info/blog/handle-wallets-with-thirdweb), consider going through it before we setup thirdweb marketplace pre-built contract.

## 🤑 Getting some fake $

There are a few testnets out there and the one we'll be using is called "Mumbai" which is run by the Polygon Technology and nead Fake Matic, Matic is native currency of Polygon.

We've already set `desiredChainId` to Mumbai inside `_app.jsx` component.

Deploying a Smart Contract also requires Eth on mainnet and fake Eth on testnet.

You get some fake Matic by going to a [faucet](https://faucet.polygon.technology/).

If you can't get fake Matic there, search "Mumbai Faucet" on google and go to each link until you get some.

## 🤔 Create and Deploy Marketplace Contract

1. Go to [Thirdweb Dashboard](https://thirdweb.com/dashboard).

2. Connect your wallet. Once connected, you will be routed to `/contracts` route. In case you already have any contract deployed, you'll see them on `/dashboard` route.

3. On `/contracts` route, you will see a bunch of cool pre-built contracts. We'll be using NFT Collection and Marketplace.

[Nft Collection](https://portal.thirdweb.com/sdk/interacting-with-contracts/nft-collection) will allow us to mint NFTs, [Marketplace](https://portal.thirdweb.com/sdk/interacting-with-contracts/marketplace) will lets us list them for Sale.

We can configure and deploy both the Collection and Marketplace contracts using SDK, but we'll create Marketplace from dashboard itself, Because it is a one-time work.

![Pre-built Contracts](https://i.imgur.com/DSgUq9c.png)

![Pre-built Contracts](https://i.imgur.com/0q3fTTk.png)

4. Once you click on Marketplace Contract you will se detailed page for market place, scroll down and you'll see all the functions of the contract. <br >
   Or you can click on **Deploy Now** at the top to configure the contract then deploy with a transaction.

![write functions](https://i.imgur.com/sXXAJUM.png)

These are write methods of Marketplace contract. There are read methods as well.

5. Once deployed, go to `/dashboard` and you will see you Marketplace contract there. Click on it and it will take you to marketplace dashboard.

![Marketplace Dashboard](https://i.imgur.com/GZB0k1J.png)

6. Go to listing, click on **+ Create Listing**, And you can select your NFT on Mumbai Network and list it for sale on the marketplace.

But we will do this by code on frontend.

you can refer to Marketplace docs [here](https://portal.thirdweb.com/sdk/interacting-with-contracts/marketplace)

## 🥑 Creating NFT Collection

If you noticed in the pre-built contracts, You can create **NFT Collection** contract which is a ERC721 NFTs. Instead of creating that contract from dashboard, we will allow users to create their own collection and Mint NFTs to that collection.

Let's see the docs for **NFT Collection** contract, [here](https://portal.thirdweb.com/sdk/interacting-with-contracts/nft-collection).

```jsx
import { useSDK, useAddress } from "@thirdweb-dev/react";

const sdk = useSDK();
const address = useAddress();

const createCollection = async () => {
  try {
    const contractAddress = await sdk.deployer.deployNFTCollection({
      name: "OpenRiver",
      symbol: "RIVR",
      // this address comes from connected wallet address
      primary_sale_recipient: address,
    });
  } catch (error) {
    console.log(error);
  }
};
```

`name` and `symbol` for the NFT Collection contract for all user will be `OpenRiver` and `RIVR` respectively.

Okay, what just happened is pretty freaking epic. Two things happened:

**One**, we just deployed an ERC-721 contract to Mumbai. That's right! If you head over to [https://mumbai.polygonscan.com/](https://mumbai.polygonscan.com/) and paste in the address of the NFT Collection contract, you'll see you just deployed a smart contract! The coolest part is you **own** this contract and it's **deployed from your wallet**. The “From” address will be **your** public address. Same with the Marketplace Contract.

Since we are not storing `contractAddress` for any user in database, we will fetch all the collections for that address by Moralis API and identify our collection by the `symbol`.

## 🧨 Using Moralis to fetch the collections of specific user.

Create react context `dataContext.jsx` and add code below

```jsx
import { useAddress } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";

const [collectionContract, setCollectionContract] = useState("");

const address = useAddress();

useEffect(() => {
  if (!address) return;
  getCollectionContract();
}, [address]);

//! Fetch Collection Contract to mint NFT
const getCollectionContract = async () => {
  // Moralis API to fetch all the collections of a user from a specified network.
  const url = `https://deep-index.moralis.io/api/v2/${address}/nft/collections?chain=mumbai`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-Key": MORALIS_API_KEY,
      },
    });

    const data = await res.json();
    let collectionAddr = "";
    data.result.forEach((each) => {
      // Checking if user has a collection with symbol RIVR
      if (each.symbol === "RIVR") {
        collectionAddr = each.token_address;
      }
    });
    setCollectionContract(collectionAddr);
  } catch (error) {
    console.log(error);
  }
};
```

## 🚨 Interacting with contracts.

Thirdweb makes it so simple to intract with any smart contract, you don't even need contract abi to interact with it.

```jsx
import { useContract } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";

const [nfts, setNfts] = useState([]);
// collection here has access to all the function of the contract whose address we provide to useContract.
// we are passing address of collection contract address.
const { contract: collection } = useContract(collectionContract);

// Adding another useEffect to get NFTs once we have the collection contract addresss from previous code snippet.
useEffect(() => {
  if (!collection || !address) return;
  getNFTs();
}, [address, collection]);

//! Fetch NFTs
const getNFTs = async () => {
  try {
    const data = await collection.getAll();
    let Nfts = [];

    data.forEach((each) => {
      if (each.owner === address) {
        Nfts.push({
          label: each.metadata,
          value: {
            tokenId: each.metadata.id,
            tokenAddress: collectionContract,
          },
        });
      }
    });

    setNfts(Nfts);
  } catch (error) {
    console.log(error);
  }
};
```

The NFTs we fetched will be used to list for marketplace.

![List NFT for sale](https://i.imgur.com/NZcnAZY.png)

We could have fetched all the NFTs owned by user on Mumbai Network, but there is a problem with Moralis API due to which NFTs metadata were missing in the response, I tweeted about this [here](https://twitter.com/harshpandey002/status/1584823587902398466)

And so we are restricted to fetch only from one collection using thirdweb contract `getAll()` method.

`dataContext.jsx` file handles most of the things related to thirdweb.
check that out [here](https://github.com/harshpandey002/openriver/blob/main/context/dataContext.jsx).

### 🍪 Minting NFT

```jsx
import { useDataContext } from "@/context/dataContext";
// Other neccessary imports

const { collectionContract, getNFTs } = useDataContext();
const { contract: collection } = useContract(collectionContract);
const [image, setImage] = useState("");
const [formData, setFormData] = useState({
  name: "",
  description: "",
});

const handleSubmit = async (e) => {
  e.preventDefault();

  const { name, description } = formData;
  const metadata = {
    name,
    description,
    image, // This can be an image url or file
  };

  try {
    // Minting New NFT
    await collection.mintTo(address, metadata);
    // Once NFT is minted, this will refetch and add new NFT to list for sale
    getNFTs();
  } catch (error) {
    console.log(error);
  }
};
```

I'm converting image selected through file-picker or react-dropzone to dataUri

```js
const handleDrop = (acceptedFiles) => {
  const reader = new FileReader();
  //Taking the first file from array
  reader.readAsDataURL(acceptedFiles[0]);
  reader.onabort = () => console.log("file reading was aborted");
  reader.onerror = () => console.log("file reading has failed");
  reader.onload = () => {
    const imageUri = reader.result;
    setImage(imageUri);
  };
};
```

## 🌈 List NFT for sale

This is how you can create a direct listing, you can also create Auction listing, [learn more](https://portal.thirdweb.com/sdk/interacting-with-contracts/marketplace#creating-a-new-auction-listing)

```jsx
import { useContract } from "@thirdweb-dev/react";
import { useDataContext } from "@/context/dataContext";

const { contract } = useContract(MARKETPLACE_CONTRACT_ADDRESS);

const { getListings } = useDataContext();

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  const listing = {
    assetContractAddress: nfts[formData.NFT].value.tokenAddress,
    // token ID of the asset you want to list
    tokenId: nfts[formData.NFT].value.tokenId,
    // when should the listing open up for offers
    startTimestamp: new Date(),
    // how long the listing will be open for
    listingDurationInSeconds: 604800,
    // how many of the asset you want to list
    quantity: 1,
    // address of the currency contract that will be used to pay for the listing (This is for Mumbai)
    currencyContractAddress: "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE",
    // how much the asset will be sold for
    buyoutPricePerToken: formData.price,
  };

  try {
    await contract.direct.createListing(listing);
    // Once new listing is created, we will fetch all the listings and update the UI.
    getListings();
  } catch (error) {
    console.log(error);
  }
  handleClose();
  setLoading(false);
};
```

## 😈 Another issue with moralis API

In [OpenRiver]() user needs to create collection and mint first NFT in one go, because moralis does not return collection if there's no NFT in it.

I posted about [this](https://www.linkedin.com/posts/harshpandey002_moralis-nftmarketplace-development-activity-6990595186317791232-PrcI?utm_source=share&utm_medium=member_desktop) on LinkedIn.

## 🫰 Buy and De-list from Marketplace

```jsx
import { useAddress, useContract } from "@thirdweb-dev/react";

const address = useAddress();
const { contract } = useContract(MARKETPLACE_CONTRACT_ADDRESS);

// This function just removes the listing from UI once delisted from marketplace
const dList = (id) => {
  let newList = JSON.parse(JSON.stringify(listings));
  // filtering the old list to get updated list
  newList = newList.filter((each) => each.id != id);
  setListings(newList);
};

const handleDlist = async (id) => {
  try {
    await contract.direct.cancelListing(id);
    dList(id);
  } catch (error) {
    console.log(error);
  }
};

const buyListing = async (id) => {
  try {
    await contract.buyoutListing(id, 1);
  } catch (error) {
    console.log(error);
    toast.error("Some error occured");
  }
};
```

Code above is self explanatory and very straight forward.

## 🎉 Finalize and celebrate

Super exciting that you made it to the end. Pretty big deal!

Find full code of the project [here](https://github.com/harshpandey002/openriver) and checkout the Project created by me [here](http://openriver-thirdweb.vercel.app/)

If you have been following up and have created something, make sure to showcase your project connect with me on [LinkedIn](https://www.linkedin.com/in/harshpandey002/) or [Twitter](https://twitter.com/harshpandey002)
