---
title: Installation (Windows)
description: 'Make your computer work for the masternetwork in a few steps.'
category: Getting started
position: 2
---

## Create a new windows account
Running a python script can be dangerous if you don't know what it contains. To prevent malicious behaviour, please create a new restrictred account on your computer. However, if you don't care about the device security or if the computer runs for crypto currency too, you can skip this step.
<img src="/myaccount.png" style ="border-radius: 5px 2px;">
## Create files or download files
<code-group>
  <code-block label="main.py" active>

  ```python
import json
import requests, subprocess
import random, os, time
import os
from dotenv import load_dotenv
load_dotenv()
BASEURL = os.getenv('BASEURL')
PRICE = os.getenv('PRICE')

while True :
    try :
        random1 = random.randint(100,999999999999999989999)
        headers = {
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) snap Chromium/74.0.3729.169 Chrome/74.0.3729.169 Safari/537.38"
        }
        r = requests.get(BASEURL+'/'+str(PRICE),headers=headers)
        dacode =  r.json()
        dacode = dacode[1:]
        dacode = dacode[:-1]
        lecode = dacode.split(",")
        jobchosen = lecode[random.randint(0,len(lecode)-1)]
        jobchosen = jobchosen.replace('"',"")
        jobchosen = jobchosen.replace(' ',"")
        print('newjob !')
        print(jobchosen)
        r = requests.get(BASEURL+'/code/'+jobchosen)
        elcode = r.json()
        f = open(str(random1)+".py", "w")
        f.write(str(elcode[0]))
        f.close()
        
        try : 
            start_time = time.time()
            subprocess.run("python3 "+str(random1)+".py "+ str(jobchosen), shell=True, check=True,  stdout=subprocess.DEVNULL, timeout=600)
            print(time.time() - start_time, "seconds")
        except :
            os.popen("python3 -m  pipreqs.pipreqs . --force")
            os.popen("pip3 install requirements.txt")
            pass
        os.remove(str(random1)+".py")
    except:
        print("error, retrying ...")
        time.sleep(2)
        pass
  ```

  </code-block>
  <code-block label=".env">

  ```bash
BASEURL = "http://127.0.0.1:8000"
API_KEY_WORKER = "4_AMyUEdYd9b_y7lIbV0qBqp-931sgaP1c_3lRIjO6KgyigflEAQBDyNmggGKS08DbwnYn98ujlPY6505lx0Jdv5-du8Zaxi"
PRICE = 2
TYPE=prod
PORT=5000
  ```

  </code-block>
</code-group>
This two files above are needed to make a computer work for the network. <br> <br>
They need to be in the same folder and python need to be install. 
You can try to update the file main.py but don't try to cheat or you will be ban from the network. 
If you want to have a newer version of the files, just go to the <a href="https://github.com/Parmicciano/Client-masternetwork">github folder</a>

## Wait, how does the network do to identify myself ?

Check the .env file, it contain a few variables such as our api url, your api key (you will found yours by signup  and login into your account) and the price.

The price is the price you are ready to work for. If you defined the price as 2, and if there is a script with a reward of 2 or more, you will get payed 2.


## Last step

It is possible that people use the masternetwork for scrapping, so it would be necessary to have google chrome install on your device in ordre to get the script executed

<alert>
  We are still in Alpha version, don't mind about the reward, paid part, the network is composed of volunteer for now.
</alert>

## Let's gooooooooo

If you have made all the steps before, you are ready to run the python script and work for the network, let's goooooooooo.
