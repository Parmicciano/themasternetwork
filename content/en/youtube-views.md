---
title: 'Generate views on youtube '
description: ''
category: Dev
position: 3
---

## Explanation

To rank on youtube, in most of the cases, it takes a lot of time and effort.
You can actually rank artificially, even if it's dangerous (you can be ban). The code under allow you to define a video url and to increment views. The watch time will be actually low (between 1s and 30s so it will probably work well if you have a short video).
Maybe youtube bots will found something with all this invite session going directly to this video. It need to be improved.

## The code
<code-group>
  <code-block label="main.py" active>

  ```python

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
driver.close()
  ```

  </code-block>