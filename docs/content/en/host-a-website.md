---
title: How to host my website?
description: Host your website in a few minutes with the masternetwork
category: Developper
position: 3
---

## Apache2 installation 
A web server allows to distribute information quickly and efficiently under the action of a request sent by the user.
<img src="/apache2.png" alt="Masternetwork installation Apache2">
Apache2 is a very easy to install and configure web server. You can simply install this web server using the following command on a server under debian or ubuntu.  
<code-block active>

  ```bash
sudo apt update && sudo apt install apache2 -y
  ```
</code-block>
        <br></br>
Then configure your instance to accept a domain name. <br>
In the type field, put customdomain, then in the name field put your domain name (ex : masternetwork.dev), the local port will be 80.<br>
In the dns, send your domain to the ip inform for your instance. </br>
<img src="/vm_box_details.png" alt="open ports and route to subdomain port 80 http servr"> 
Wait a bit for the dns propagation and in a few minutes you will be able to type your domain in your search bar and see the apache2 server welcome page.
