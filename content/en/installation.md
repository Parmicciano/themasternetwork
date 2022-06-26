---
title: Installation
description: 'Create a node'
category: Getting started
position: 2
---

## Install the client 
Please be aware that downloading the client is a risk for your servers.
You must be under ubuntu in order to start a node.


  <code-block active>

  ```bash
  git clone https://github.com/Masternetworks/public_masternetwork_vps
  ```

  </code-block>
Now, move to the folder downloaded
  <code-block active>

  ```bash
  cd public_masternetwork_vps
  ```

  </code-block>


Update node_installer.sh  
-----------------------------------------------
Update node_installer.sh file 
Now modify the .env file which look like this 
<code-block active>

  ```bash
./86_linux -apikey MYKEYFROMmasternetwork.api -ram 8000 -vcpus 2 -storage 85 -nodename Sunlight
  ```

</code-block>
Then, run the shell file. 
This will create a node with 8000 mb of ram, 2 vcpus allocated, 85 gb of storage.
<alert>
Version=Beta => Many bugs will occur
</alert>


## Let's go
Your node is now running, just wait.