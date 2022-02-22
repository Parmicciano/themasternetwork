---
title: Installation (Docker)
description: 'Make your computer work for the masternetwork in a few steps.'
category: Getting started
position: 2
---

## Install Docker
Running a python script can be dangerous if you don't know what it contains. To prevent malicious behaviour, please install docker, this will dockerized the script that will be executed, so it's really not dangerous to execute them for your computer.

Click on this <a href="https://www.docker.com/get-started">link</a> in order to install docker and follow the steps. 
<img src="/docker.webp" style ="border-radius: 5px 2px;">


Once it's done, you need to install a few files and run it. 

Open a terminal and run the command

  <code-block active>

  ```bash
  git clone https://github.com/Parmicciano/Client-masternetwork.git
  ```

  </code-block>
Now, go to the folder downloaded
  <code-block active>

  ```bash
  cd Client-masternetwork
  ```

  </code-block>
    <code-block active>

  ```bash
  cd client-repo-docker
  ```

  </code-block>

Update .env file 
-----------------------------------------------
Update .env file 
Now modify the .env file which look like this 
<code-block active>

  ```bash
BASEURL = "https://api.masternetwork.dev"
API_KEY_WORKER = "p6bA_1F5LePA0JU2XFmE24-dU-88A_EcQ-7PPGoEJL7FadHRKbvbSstN7x97kKh4y3UdxlLpjVbPbY1_rZxtVQykiO6WnL8U"
PRICE = 0.00001
  ```

</code-block>

You don't need to change BASEURL, it's rooting to our servers. 
Change api key by replacing with your own (go to masternetwork.com and found your api key in the profile section)

For the variable price, it's special :<br>
The masternetwork works with an auction system, the variable price match with the minimum price that your computer will work per script per second. 
Don't be too optimistic because if there is no script that pay more than your bid, your computer won't execute anything and you won't get paid, not even a penny.
<alert>
  We are still in Alpha version
</alert>

run
----------------------
Run the command to build the container :
  <code-block active>

  ```bash
  docker build --tag client .
  ```

  </code-block>
Run the container 
  <code-block active>

  ```bash
docker run --name=client -e PYTHONUNBUFFERED=1 -d client
  ```

  </code-block>


## Let's gooooooooo
Your container is now running, to pause it (if you need all your computer ressources), you can go to docker desktop and click pause. 
You will get some xmr in exchange of running scripts.
