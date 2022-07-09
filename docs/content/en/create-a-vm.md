---
title: Create a Virtual Machine
description: 'Start a virtual machine'
category: Developper
position: 2
---

## Create an account 
Please <a href="https://masternetwork.dev/auth/signup">create an account</a>, it's easy and fast (<2min)

## Fill your account with monero
We only accept monero as a currency for now and we aim to accept other cryptocurrencies later such as ethereum, bitcoin, solana...
<img src="/portfolioimg.png">
If you don't have a monero wallet, you can easily create one using the monerujo application (allowing you to scan the qr code above) or the gui. You can then buy monero through <a href="https://localmonero.co/">localmonero</a>, <a href="https://www.binance.com/fr">binance</a>, <a href="https://www.coinbase.com/fr/price/monero">coinbase</a> and transfer them to your wallet if you want so (As we say in the business : <a href="https://www.ledger.com/academy/not-your-keys-not-your-coins-why-it-matters">Not Your Keys, Not Your Coins.</a>). 
<br>
<br>
Then transfer monero to your account by sending to the address available on your profile. You can withdraw your monero later.

## Start the virtual private server
Once your monero is available on your account (it can take several minutes), you can start your virtual private server (VPS)
<img src="/newvm.png">
Now a box will appear. 
<img src="/newvm_box.png">
You can stop and start your VPS once the machine has been delivered.
You can know the status of your virtual machine, if it has been delivered or if it is being delivered.
The password is used to connect to your VPS via ssh.
<img src="/vm_box_details.png">
Here you can see the different ports open on your machine. You can connect via ssh and connect a domain to your machine.
In the example above, you can ssh like that : ssh ubuntu@13.38.37.80 -oPort=4
With the password "CqIEIcdE"