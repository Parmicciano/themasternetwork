---
title: Generate views on youtube 
description: ''
category: Getting started
position: 3
---

## Explanation

To rank on youtube, in most of the cases, it takes a lot of time and effort.
You can actually rank artificially. The code under allow you to define a video url and to increment views. The watch time will be actually low (between 1s and 30s so it will probably work well if you have a short video).
Maybe youtube bots will found something with all this invite session going directly to this video. It need to be improved.

## The code
<code-group>
  <code-block label="main.py" active>

  ```python
import  time, random
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.action_chains import ActionChains
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.utils import ChromeType
driver = webdriver.Chrome(ChromeDriverManager(chrome_type=ChromeType.CHROMIUM).install())
driver.get("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
time.sleep(1)
action = ActionChains(driver)
action.send_keys(Keys.TAB)
action.send_keys(Keys.TAB)
action.send_keys(Keys.TAB)
action.send_keys(Keys.TAB)
action.send_keys(Keys.TAB)
action.send_keys(Keys.TAB)
action.send_keys(Keys.TAB)
action.send_keys(Keys.ENTER)
action.perform()

time.sleep(2)
time.sleep(random.randint(0,30))
driver.close()
  ```

  </code-block>