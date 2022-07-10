---
title: Installation
description: 'Create a masternode'
category: masternode
position: 3
---

## Install the client 
In order to download the client, you must install git and cron if those packages are not already installed
  <code-block active>

  ```bash
  sudo apt install git -y && sudo apt install cron -y && sudo apt install nano -y && sudo apt-get install screen
  ```

You must be under<b> ubuntu / debian</b> in order to start a masternode.

Replace "parmicciano" with your username
  <code-block active>

  ```bash
   sudo git clone https://github.com/Masternetworks/masternetwork_client ~/mstclient
   git config --global --add safe.directory /home/parmicciano/mstclient
  ```


Start the masternode
-----------------------------------------------
Run this command to start a masternode.<br>

Don't forget the apikey, you will find it by creating an <a href="https://masternetwork.dev">account</a>. Specify different options in the crontab to limit the resources you want to allocate for the virtual machines. Otherwirse you will not be paid.   


<code-block active>

  ```bash
sudo nano /etc/systemd/system/mst.service
  ```

</code-block>
<br><br>
<code-block active>

  ```bash
[Unit]
Description=Masternetwork
After=network.target
StartLimitIntervalSec=0
[Service]
Type=simple
ExecStart=/home/parmicciano/mstclient/amd64_linux -apikey INSERT_YOUR_APIKEY -ram 12000 -vcpus 8 -storage 250 -mode all -nodename Oasis 
WorkingDirectory=/home/parmicciano/mstclient
Restart=always
RestartSec=5
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=%n
[Install]
WantedBy=multi-user.target
  ```

</code-block>
Replace "/home/parmicciano/" with the appropriate path
This will create a node with 8 vcpus, 12000 mb of ram, 250Gb. Don't Forget the api key ! <br><br>
<br>
Start the service
<code-block active>

  ```bash
systemctl start mst
  ```

And automatically get it to start on boot
<code-block active>

  ```bash
systemctl enable mst 
  ```

</code-block>
And check the status. 
<code-block active>

  ```bash
systemctl status mst
  ```

</code-block>

You can find the source code <a href="https://github.com/Master-Network/mast_client">here</a> and compile it from source if you wants to. 
<alert>
It's a beta, many bugs can exist. Contact us on <a href="https://discord.com/invite/NVvvkXMbAB">discord</a> for reporting bugs ! 
</alert>


## Let's go
Your masternode is now running ! Congratulations !