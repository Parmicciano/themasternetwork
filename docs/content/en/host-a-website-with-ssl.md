---
title: How to host my website with ssl?
description: Host your https website in a few minutes with the masternetwork
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
  
## Create an ssl certificate now
In order for the connections between your users and your server to be secure, your connections must be encrypted with an ssl certificate. 
<br>
It is therefore necessary to generate an ssl certificate that is verified by an authority (allowing your certificate to be known).<br>
So you need to use certbot and use dns validation. Indeed, as the servers you use on the masternetwork do not have a public ip, you have to use a dns validation. 
<code-block active>

  ```bash
sudo apt install certbot -y
  ```
</code-block>
Then you need to launch certbot and start the certification process of your ssl certificate.
<code-block active>

  ```bash
sudo certbot -d mywebsite.masternetwork.dev --manual --preferred-challenges dns certonly
  ```
</code-block>
Replace mywebsite.masternetwork.dev with the domain name you own and want to use.

This command will return something like : 
<code-block active>

  ```text
Please deploy a DNS TXT record under the name
_acme-challenge.mywebsite.masternetwork.dev with the following value:

NmcaQOLaQVjUqv2GE5sL3w0fzxxaCFp4IIGTfse3v-w

Once this is deployed,
Press ENTER to continue
  ```
</code-block>
Then, edit your dns, this will allow certbot to make sure that you are the owner of this domain name for the ssl certificate attribution.<br><br>

<img src="/dnsrecords.png" alt="porkbun dns zone for ssl certification ssl https">
Wait a few minutes for the dns propagation to take place. Then press enter. <br>
That's it! You have created your certificate approved by an authority. 
Then, you have to tell the reverse proxy your site and the location of your certificates.
<img src="/newhttpswebsite.png" alt="website with ssl masternetwork certificate">
You must enter the path to your certificate so that the reverse proxy can expose your site with the certificate (attention, your site must be exposed to port 80 and not 443)

<img src="/mywebsitemst.png" alt="ubuntu welcome page ! ">
Wait a bit for the configuration to update (a few seconds or minutes at most). 
Congratulations, you have exposed your site with your ssl certificate!<br><br>
However, the certificate you just set up expires every 90 days. So we can renew it every 90 days to secure our site permanently. This is a bit complex to do since we have to access the dns zone of our domains and modify them periodically (every 90 days).<br>
Fortunately, the domain name registrars have foreseen this and have developed apis. There are many examples and scripts that allow you to edit your dns zone automatically in order to renew your certificate before the old one expires. For aws and godaddy, you can use this <a href="https://chariotsolutions.com/blog/post/automating-lets-encrypt-certificate-renewal-using-dns-challenge-type/"> script</a>.  <br><br>
If your domain name registrar is less known, like porkbun for example and there is not already a script ready to use, then you will have to do it manually but you will surely spend a good time to understand how apis works to edit the dns zones of your domain name.
