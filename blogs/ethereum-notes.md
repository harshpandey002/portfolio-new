---
title: "Ethereum Notes"
slug: "ethereum-notes"
description: "What is Proof-Of-Stake? How is Gas price set? How front-end interacts with blockchain? What are ethereum nodes? Let's cover these topics here."
image: "https://i.imgur.com/ahPABE0.png"
squareImage: "../ethereumIcon.png"
date: "15 Jan, 2023"
tags: ["Ethereum", "Transaction", "Gas", "JSON-RPC"]
isLive: true
---

## 🧾 Proof of Stake

On September 15th, 2022 Ethereum transitioned from Proof of Work to Proof of Stake (POS), also known as “The Merge”.

Proof of Stake is a totally different mechanism that enables Ethereum to be:

1. More secure 🔒
2. Less energy intensive 🌎
3. Greater scalability 📈

In Proof of Stake, the energy requirement to become a validator is much lower and can be done by individuals without a high overhead energy cost. This encourages more users to become validators, decreasing the centralization risk, and thereby increasing the security of the network.

Validators are required to stake 32ETH by depositing it into a contract to have the ability to validate blocks. This staked ETH is used as collateral against bad actors in the network. If any given validator acts dishonest or malicious they put themselves at risk of losing their staked ETH.

The network randomly selects a validator to propose a block every 12 seconds, all the other validators verify that the proposed block is correct, and the cycle repeats.
This means that the energy requirements to mine any given block are significantly lower than that of PoW.

## ⛽ Gas on Ethereum

The price of gas is something that changes with every block.

In August 2021, after years of research and planning there was an EIP proposed to improve the calculation of gas prices on Ethereum, known as [EIP-1559](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1559.md).

### 💵 Gas Prices

The cost of operations on Ethereum are fixed and measured in amount of “gas”, however the price of that gas (measured in Gwei) is ever-changing.

### 🤑 How is the price of gas set?

Every block has a maximum amount of gas that can be used within it. This is how the number of transactions included within a block are determined. Every block has the capacity to use 30 million gas but has a target of 15 million gas total.

The price of gas is determined by the amount of demand for transactions (or block space), where demand is measured by how filled the previous block was relative to the target gas. So let’s look at an example here:

![Gas Bar](https://i.imgur.com/k0uKVdH.png)

The above screenshot shows two different blocks, one where block space was in high demand, and another where it was in lower demand. The network first sets a `base fee`, in an ideal world this base fee would result in 15 million gas getting used in a block, no more, no less. However, what happens in practice is the actual gas can be above or below the target gas.

When blocks are above the target, the gas price (or `base fee`) is automatically increased, increasing the cost and barrier to entry for sending transactions and thereby reducing the number of people who are competing to fill the block. When the block is below the target the `base fee` is lowered to incentivize people to transact by lowering the barrier to entry for paying for a transaction.

This base fee helps users select an efficient gas amount that is likely to get their transaction mined rather than wasting tons of money on unnecessarily high gas prices like we’ve seen in the past. These mechanisms also make it easy to predict future gas prices by looking at how “full” the previous blocks were.

![Etherscan Screenshot](https://i.imgur.com/9mDWIuc.png)

we can see here that we are 57% below the desired gas target (only using 6.4 million gas instead of 15 million) and our base fee per gas is 12.044621651 Gwei. What do we think will happen with the next block? Will the base fee increase or decrease?

Here is a screenshot of block [16128922](https://etherscan.io/block/16128922)

![Etherscan Screenshot](https://i.imgur.com/9UiopA0.png)

We can see that the base fee decreased to 11.18 Gwei and by doing so this incentivized more people to send transactions and the gas used skyrocketed up to almost 30 million, 100% above the gas target!

### 🐾 What happens to the base fee?

Instead of going straight into the miners pocket, the `base fee` actually gets burned. There are several reasons why the base fee is burned instead of being given to the miner:

1. This prevents the miner from circumventing the payment of the base fee since they have to pay at least `base fee` of transactions for the block that the mine.

2. Burning the Ether also creates a deflationary pressure on Ether as an asset since supply is being taken out of the market.

### 🏳️‍⚧️ Setting the gas for your transaction

Turns out when you are sending a transaction, you’re not actually setting the `base fee` value, but rather your setting the `max fee` which represents the maximum amount that you're willing to pay to get your transaction included. Luckily, unlike with the previous gas usage model, your transaction will only ever use the `base fee` amount to execute, the rest of the value (`max fee` - `base fee`) will be return to you.

### ⛏️ How are miners paid?

Since the `base fee` is entirely burned, the new incentive for miners is now known as the miner `tip`. In a perfect world, the miner tip is the minimum amount that the miner is willing to accept in order to execute your transaction. This tip was originally set as 1gwei but can fluctuate depending on how full blocks are. Since the target gas value in blocks is 15M, in general, so long as blocks are hitting or near the target amount, there will always be room to add more transactions within a block. This is why the miner tip does not need to be insanely high to get your transaction included.

Typically when you set the gas for your transaction you’re setting a value called `maxPriorityFee` which is equal to the `max fee` + the miner `tip`

## 🗝️ Accounts in Ethereum

There are two types of accounts in Ethereum: **externally owned accounts** and **contract accounts**.

### 🪙 Externally Owned Accounts

Externally Owned Accounts (or **EOAs** for short!) are similar to Bitcoin private/public key pairs. In both models, the address and public key are associated to a private key via an Elliptic Curve Digital Signature.

However, the method to get from a private key to an address in Ethereum is different than Bitcoin. The resulting address in Ethereum is a 40 character hexadecimal string as opposed to a 26-35 alphanumeric string in Bitcoin.

The **biggest difference** between EOAs and Bitcoin Addresses is that EOAs have a **balance**. This means that the global state of the blockchain actively tracks how much ether every **active** address on the network holds.

> An **active** address refers to an address that has interacted on the Ethereum blockchain. There are technically 16^40 (or 2^160 if you're thinking in binary!) possible Ethereum addresses which can be generated. These addresses are not included in the global state tree until they have interacted with the blockchain. Otherwise, this would be a massive amount of data stored!

### 📃 Contract Accounts

Finally, we broach the most exciting part of Ethereum: **Smart Contracts**!

This contract has its own **account** in that it also has a **balance** and **address**. The contract account cannot be controlled by a private key like a EOA. Instead, EOAs make transactions to call functions on the contract. From there, contracts can also make calls to other contracts synchronously. Once a contract is deployed, the **code cannot be changed**. However, the **storage** (persistent memory) of a contract can be updated through transactions.

> A contract can store an address of another contract that it needs to interact with. Since the address is held in **storage** it can be updated through transactions. Therefore it's possible to upgrade a system by deploying new contracts and running a transaction to update references to point to the new addresses. This can be a bit of a challenging subject and is generally referred to as smart contract **upgradeability**.

## 🔗 Intro to JSON-RPC

Ethereum is simply a computer for all intents and purposes. The main difference is that this single computer is spread out over thousands of nodes worldwide. The Ethereum computer is built in such a way that it does not matter which of these nodes you communicate with, you are ultimately only affecting one single instance: the Ethereum world state trie singleton.

Conceptually, that's all fine and well. But how do we actually communicate with the Ethereum computer? The answer is: **JSON-RPC**.

![JSON-RPC](https://i.imgur.com/HWLC7YD.png)

### 🫀 Core Concept: Ethereum Clients

To run an [Ethereum node](https://ethernodes.org/), you must run one of the various Ethereum client implementations. You will see, there are quite a few including:

- [geth](https://github.com/ethereum/go-ethereum): Ethereum client written in Go.
- [erigon](https://github.com/ledgerwatch/erigon): Etheruem client also written in Go
- [nethermind](https://github.com/NethermindEth/nethermind): Ethereum client written in .NET

[JSON-RPC](https://www.jsonrpc.org/) is a remote procedure call (RPC) protocol that uses JSON to encode messages. In other words, JSON-RPC is simply another API standard.

> JSON-RPC is a similar API standard to REST

JSON-RPC deals exclusively with transporting data in the syntax form of JSON.

REST Flow:
![REST Flow](https://i.imgur.com/RuzeI0M.png)

JSON-RPC Flow:
![JSON-RPC Flow](https://i.imgur.com/MPfUumw.png)

Your web3 wallet, acting as a provider, will route the Request to the Ethereum node

> Remember, `provider` is just a fancy term for something representing a connection to an Ethereum node!
