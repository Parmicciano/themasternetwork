---
title: How to host my api with an ssl certificate?
description: Host your api on the masternetwork
category: Developper
position: 5
---


Fastapi is a very fast python api. This api can be deployed in a few minutes on the masternetwork with a ssl certificate in order to encrypt the connections between users and your computer.<br>
An api is a very good way to understand how modern applications work, whatever they are. Indeed, if you develop an autonomous drone that sends its position every hour, you will need an api.
But if you want to make a competitor of amazon, then you will also need an api. <br>
The field of possibilities is huge and it's worth to be interested in it! Come on, let's go !
## How to install fastapi?
Fastapi is based on python, so you must make sure that python3 is installed.
<code-block active>

  ```bash
sudo apt update && sudo apt install python3.10 && python3 --version
  ```
</code-block>
Then, install Fastapi with pip
<code-block active>

  ```bash
pip install fastapi && pip install "uvicorn[standard]"
  ```
</code-block>
And now, it's time to create your api with a simple python file called main.py !

<code-block active>

  ```python


from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def status():
    return {"Status": 1}


@app.get("/users/{username}")
def read_item(username: str):
    print(username)
    #here you can register an user with mongodb for instance
    return {"username":username}
  ```
</code-block>
Now you can launch your api with that file called server.py :
<code-block active>

  ```python
import uvicorn
if __name__ == '__main__':
    uvicorn.run("main:app",
                host="0.0.0.0",
                port=80,
                reload=False)

  ```
</code-block>
You must pass your api on port 80, which will then be redirected by our reverse proxy on port 443 as you can see below.<br>
That command will start your api, you can set reload to True to restart your api on file changes.

<code-block active>

  ```bash
python3 server.py
  ```
</code-block>

## Secure your api with an ssl certificate
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
<br>

Wait a bit for the configuration to update (a few seconds or minutes at most). 
Congratulations, you have exposed your api with an ssl certificate to secure connections!<br><br>
However, the certificate you just set up exp site wiires every 90 days. So we can renew it every 90 days to secure our site permanently. This is a bit complex to do since we have to access the dns zone of our domains and modify them periodically (every 90 days).<br>
Fortunately, the domain name registrars have foreseen this and have developed apis. There are many examples and scripts that allow you to edit your dns zone automatically in order to renew your certificate before the old one expires. For aws and godaddy, you can use this <a href="https://chariotsolutions.com/blog/post/automating-lets-encrypt-certificate-renewal-using-dns-challenge-type/"> script</a>.  <br><br>
If your domain name registrar is less known, like porkbun for example and there is not already a script ready to use, then you will have to do it manually but you will surely spend a good time to understand how apis works to edit the dns zones of your domain name.

## Conclusion

You can now use your api to ensure the backend of your applications. You can indeed use the api to make communicate a database (sql, mongodb) and a javascript site (different frameworks exist like nuxtjs, reactjs, angular). <br><br>
You can indeed customize actions like giving rights to users like the right to write content, the right to delete content which allows you to manage your site very easily. Don't forget to save your api periodically on github in case your server would have a problem or in case you would need to take a bigger server if your site is very successful (and we wish you that!)