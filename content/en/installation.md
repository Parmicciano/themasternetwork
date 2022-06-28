---
title: Installation
description: 'Create a node'
category: Node
position: 3
---

## Install the client 
In order to download the client, you must install git and cron if those packages are not already installed
  <code-block active>

  ```bash
  sudo apt install git -y && sudo apt install cron -y && sudo apt install nano -y
  ```

You must be under<b> ubuntu / debian</b> in order to start a node.


  <code-block active>

  ```bash
   sudo git clone https://github.com/Masternetworks/masternetwork_client ~/mstclient
   git config --global --add safe.directory /home/parmicciano/mstclient
  ```


Update your crontab 
-----------------------------------------------
Modify your crontab to run the script periodically and to update it.<br>

Don't forget the apikey, you will find it by creating an <a href="https://masternetwork.dev">account</a>. Specify different options in the crontab to limit the resources you want to allocate for the virtual machines. Otherwirse you will not be paid.   
</code-block>
Test once that it work properly 
<code-block active>

  ```bash
cd ~/mstclient && sudo git pull && sudo ./amd64_linux -apikey MYKEYFROMmasternetwork.api -ram 8000 -vcpus 2 -storage 85 -name Sunlight
  ```

</code-block>
If you don't have any error, you can quit, go on. Else, try to relaunch the script and contact us on discord.<br>
<br>
Open the crontab editor :
<code-block active>

  ```bash
sudo crontab -e 
  ```


<code-block active>

  ```bash
* * * * * cd ~/mstclient && sudo git pull && sudo ./amd64_linux -apikey MYKEYFROMmasternetwork.api -ram 8000 -vcpus 2 -storage 85 -name Sunlight
  ```

</code-block>
This will create a node with 8000 mb of ram, 2 vcpus allocated, 85 gb of storage.
<alert>
Version=Beta => Many bugs will occur
</alert>


## Let's go
Your node is now running, just wait.