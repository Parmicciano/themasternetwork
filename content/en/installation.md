---
title: Installation
description: 'Create a node'
category: Node
position: 3
---

## Install the client 
Please be aware that downloading the client is a risk for your servers.
You must be under ubuntu in order to start a node.


  <code-block active>

  ```bash
  git clone https://github.com/Masternetworks/masternetwork_client
  ```


Update your crontab 
-----------------------------------------------
Modify your crontab to run the script periodically and to update it.<br>

Don't forget the apikey, you will find it by creating an <a href="https://masternetwork.dev">account</a>. Specify different options in the crontab to limit the resources you want to allocate for the virtual machines. Otherwirse you will not be paid.  Replace MYPATH with the path of the repo clone. 
<code-block active>

  ```bash
* * * * * cd MYPATH && git pull && ./86_linux -apikey MYKEYFROMmasternetwork.api -ram 8000 -vcpus 2 -storage 85 -nodename Sunlight
  ```

</code-block>
This will create a node with 8000 mb of ram, 2 vcpus allocated, 85 gb of storage.
<alert>
Version=Beta => Many bugs will occur
</alert>


## Let's go
Your node is now running, just wait.