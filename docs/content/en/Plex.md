---
title: How to host my plex server?
description: Host your plex server on the masternetwork
category: Developper
position: 6
---


Plex Media Server is a multimedia management platform that lets you organise, play and share your personal collection of movies, TV shows, music and photos on all compatible devices (computers, mobile phones, tablets and TVs). It works with all major platforms: Apple, Android, Roku, Chromecast, Amazon, Windows, PlayStation, Xbox, Nvidia, etc. Its multi-platform capabilities make it an ideal streaming software for home and business use. 


## How to install my plex server ?
First, start a vps! Wait a few minutes and let's go !<br>
Update and install some dependencies :
<code-block active>

  ```bash
sudo apt update && sudo apt upgrade -y && sudo apt install apt-transport-https curl wget -y
  ```
</code-block>
Import and create a new GPG key.
<code-block active>

  ```bash
sudo wget -O- https://downloads.plex.tv/plex-keys/PlexSign.key | gpg --dearmor | sudo tee /usr/share/keyrings/plex.gpg
  ```
</code-block>
Import the repository and install PlexMediaServer
<code-block active>

  ```bash

echo deb [signed-by=/usr/share/keyrings/plex.gpg] https://downloads.plex.tv/repo/deb public main | sudo tee /etc/apt/sources.list.d/plexmediaserver.list
  ```
</code-block>
<code-block active>

  ```bash

sudo apt update && sudo apt install plexmediaserver -y
  ```
</code-block>
Then activate the plex system to ensure that it will work
<code-block active>

  ```bash

sudo systemctl start plexmediaserver && sudo systemctl enable plexmediaserver && systemctl status plexmediaserver
  ```
</code-block>

Your program, plex, is now running on port 32400. You can now open the port to access it on the masternetwork. You can then easily access your films and series that you have acquired legally or not. Finally, if you are looking for movies or series and you don't mind using torrents, you can check this <a href="https://yggtorrent.fi">website</a> (yggtorrent.fi) to find torrents. If you don't know how it works, check it out, it's worth it! It's a way to share information in a decentralized way by being both the one who downloads the content and the one who redistributes it, it's great!
