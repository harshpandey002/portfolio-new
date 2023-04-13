---
title: "Introduction to PUSH Protocol"
slug: "push-protocol"
description: "Send notifications to wallets through Smart Contract, dApp, or Backend service. Decentralized communication & notification protocol for Web3."
image: "https://i.imgur.com/mToWEGF.png"
squareImage: "../pushIcon.png"
date: "Mar 17, 2023"
tags: ["PUSH Protocol", "Notification", "Reactjs"]
isLive: false
---

## 👋 Welcome

Hi Devs, My name is Harsh Pandey and we'll be looking how you send cross-chain notifications to wallets and render them in your dApps.

## 👀 Prerequisites

To understand the concepts deiscussed in this blog, you need basic understanding of:

- Smart Contracts
- Solidity
- YouTube 😶‍🌫️
- JavaScript 🤷‍♂️

## 🔔 PUSH Protocol

- **Push Protocol is a web3 communication network, enabling cross-chain notifications and messaging for dapps, wallets, and services.**

- Using the protocol, any smart contract, dApp, or backend service can send on-chain or off-chain notifications tied to the wallet addresses of users in a gasless, multichain, open, and platform-agnostic way.

- Being an open communication middleware, notifications can be integrated and shown on any crypto wallet, mobile app, browser extension, or dApps enabling a native communication layer for Web3.0

_In this blog, we'll go through how you can send notifications from smart contracts, or from client-side(reactjs)_

## Knowledge Dump

### **Channels**

- Any user who activates themselves as a service on the protocol to send notifications for its users can be considered a Channel.

- The creation of a channel is just a one-time simple procedure. It must be noted that channel creation only happens on the Ethereum blockchain and one wallet address can only create one channel only the protocol.

- Think of it as a YouTube channel.
  1. You create a Channel.
  2. You send notifications to subscribers.

### **Channel Owners**

- You create a channel, you're the channel owner. You can now send notification to channel subscribers.

### **Delegates**

- Delegates are additional wallets that the channel Owners have authorised to send notifications on the channels behalf.

### Types of Notifications

1. **Broadcast Notifications**: This type of notification is basically broadcasted or sent to all the subscribers of a channel at once.

2. **Targeted Notifications**: As the name suggests, this type of notification allows channel owners to notify a specific wallet address.

3. **Subset Notifications**: Subset notifications are quite helpful when a particular group of subscribers of a channel is supposed to be notified.

4. **Secret Notifications**: Notifications that are encrypted before sending using asymmetric encryption, i.e., the public key to encrypt and the private key to decrypt.

> **Sending notifications is a gasless transaction** and therefore notification senders need not pay any gas fee while sending notifications **via the Dapp**.

> **Gas Fees are only applicable** when on-chain notifications are **triggered directly from smart contracts**.

## Sending Notification from PUSH Dapp

1. Go to [app.push.org](https://app.push.org/) or [staging.push.org](https://staging.push.org/)(Goerli)
2. Connect your wallet.

You'll be redirected to the dashboard.
![dashboard](https://i.imgur.com/r3wukQ8.png)

All the channels are listed here. See that **Opt-in** button? that's how you can subscribe to a channel. And the address of the owner is there too beside number of subscribers.

3. Click **Create Channel** button on the side bar.
4. Fill out channel information and logo.
5. You'll also be asked to stake 50 PUSH tokens. If you are on staging env, you can get testnet PUSH there itself.

![Stake PUSH](https://i.imgur.com/hkJWShV.png)

6. Create Channel. You'll be redirected to channel dashboard where you can edit channel details and add delegates.

![Channel Dashboard](https://i.imgur.com/XZsUUQp.png)

7. Once channel is created, you'll see the **Send Notification** tab.

![Send Notification](https://i.imgur.com/dFkCTwr.png)

8. Play around to see how you can send different types of notification.

![Setup](https://i.imgur.com/3dnjCgy.png)

I'm gonna send a notification to my other wallet(right side). First I'll Opt-in to the dev pool channel. Opt-in requires you to verify your wallet through signature.

![Test message](https://i.imgur.com/u7wKee0.png)

On the left, I'm sending a targeted message, you can see the notification preview before hitting **Send Notification** at the bottom.
On the right, I've my inbox for receiver wallet.

After hitting send, refresh the inbox tab on the receiver side.

![Notification](https://i.imgur.com/bTiwpVv.png)

> Delagates can send notification on the behalf of channel.

## Send/Receice Notification from Dapp

That was easy, wasn't it?

Here's the video by PUSH team explaining what we just did and also how to achieve same from our dApp.

/i/https://www.youtube.com/embed/BsxxQj6__RI

## Sending Notification from Smart Contract
