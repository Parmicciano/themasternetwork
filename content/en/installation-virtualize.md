---
title: Installation in a virtual machine 
description: 'Create a masternode in a virtual machine'
category: masternode
position: 4
---
If your operating system is not ubuntu or debian, if you don't want to give privileges to the program (sudo), you can create a virtual machine to run the program. 

## Start a virtual machine with vmware
Create a virtual machine with vmware running under ubuntu.
You can install ubuntu iso from the official website of <a href="https://ubuntu.com/download/desktop">ubuntu</a>.
Start you virtual machine and then edit it ! 
You should virtualize this processor as shown here :
<img src="/vmware-virt.png">
If you do not virtualize the processor, you will not be able to launch virtual machines and therefore the script will not work. To run the script, the host machine must support virtualization, which allows you to launch virtual machines on demand.<br><br>
This way, you can test the masternode and be sure not to damage your host machine if you were afraid of it.

Start the masternode
-----------------------------------------------
Run this command to start a masternode.<br>
It's the same process as if it wasn't in a virtual machine.

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


<alert>
It's a beta, many bugs can exist. Contact us on <a href="https://discord.com/invite/NVvvkXMbAB">discord</a> for reporting bugs ! 
</alert>


## Let's go
Your masternode is now running ! Congratulations !