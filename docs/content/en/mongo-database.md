---
title: How to host my mongodb database on ubuntu jammy 22.04
description: Host your mongodb database on ubuntu jammy in seconds!
category: Developper Tutorials
position: 5
---

MongoDB is an innovative open source NoSQL database manager. NoSQL is being used as an alternative to traditional relational databases. NoSQL databases are great for working with large distributed datasets. MongoDB is an Instrument for handling information oriented documents, storing them or retrieving them.

MongoDB supports different forms of data. It is one of the non-relational databases technologies that surfaced in the mid-2000s under the NoSQL banner - normally, to be used in big data applications and other processing work involving data that does not fit well into a rigid relational model. Unlike relational databases that use rows and tables, the MongoDB architecture is built around collections and documents.

Organizations can utilize Mongo DB for its ad hoc query, indexation, load distribution, aggregation, server-side JavaScript processing and other features.

## How to install mongodb on ubuntu jammy (ubuntu 22.04)?

Mongodb is an amazing NOSQL database manager that can be installed as it follow :
<code-block active>

```bash
sudo apt-get install gnupg && wget -qO - https://www.mongodb.org/static/pgp/server-5.0.asc | sudo apt-key add -
```

</code-block>
Add mongodb to the apt list (that will link to apt the adress where mongodb can be download directly)
<code-block active>

```bash
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/5.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-5.0.list && sudo apt-get update && sudo apt-get install -y mongodb-org
```

</code-block>
And... That's it ! Mongodb is now running on your virtual private server (<a href="https://masternetwork.dev/vps">vps</a>).<br><br>
## Configure systemd 
Systemd is the manager of the operating system that has replaced upstart and its ancestor (the system V scripts) since Ubuntu 16.04 LTS Xenial. The name of the program comes from "system dæmon": the system dæmon.
It is a key part of the GNU/Linux architecture. It is the first application launched by the kernel (it has the PID N°1) and it is responsible for launching all the following programs in order until the system is operational for the user, according to the mode determined (single user, multi-user, graphic). It is also in charge of rebooting or stopping your computer properly.
<br><br>
The command below will launch mongodb as a service (if it crash, it will immediatly restart). Mongodb will start immediatly on boot, right after the network has been registered and the status of the program is shown right after you've wrote this command.
<code-block active>

```bash
sudo systemctl daemon-reload && sudo systemctl start mongod && sudo systemctl enable mongod && sudo systemctl status mongod
```

</code-block>

## Use mongodb 
To speak with mongodb via the command line, you can directly use mongosh. 

<code-block active>

```bash
sudo mongosh
```

</code-block>
With the command below, you can see which port is under use by mongodb:

<code-block active>

```bash
sudo lsof -iTCP -sTCP:LISTEN | grep mongo
```

</code-block>
Then, open the port in question from your vps provider. It can be done easily from the <a href="https://masternetwork.dev">masternetwork</a> interface although there is many great cloud providers such as aws, gcp, <a href="https://www.ovhcloud.com/fr/">ovh</a>.
You are now able to connect from a remote server.<br>
Mongodb compass is great to use a mongo database from your computer with a nice ui / ux. 

## Use python with mongodb 
First, install pymongo 
<code-block active>

```bash
pip install pymongo
```

</code-block>
Import pymongo (a library to talk with mongodb) and define a database and call it as you want (let's go with CloudDB).
<code-block active>

```python
import pymongo
MANAGER = pymongo.MongoClient("mongodb://localhost:27017/")

CloudDB = MANAGER["Cloud"]
```

</code-block>

Then, insert your first document (it's a no SQL database so it's basically a pool of documents walking everywhere)

<code-block active>

```python
import pymongo
MANAGER = pymongo.MongoClient("mongodb://localhost:27017/")

CloudDB = MANAGER["CloudProvider"]

Providers = CloudDB["Providers"]

MycoolDocument = { "name": "Masternetwork", "target": "funpeople", "currency": "cryptos", "opensourceScore": 80/100}

x = Providers.insert_one(MycoolDocument)
```

</code-block>
You can insert multiple documents easily. As you can see, you can insert various types of data in field called the same (In SQL you would have an error such as CANNOT INSERT string into int, even if with willpower you can do anything)
<code-block active>

```python
import pymongo
MANAGER = pymongo.MongoClient("mongodb://localhost:27017/")

CloudDB = MANAGER["CloudProvider"]

Providers = CloudDB["Providers"]

MygreatListofDocs = [
{ "name": "Masternetwork", "target": "funpeople", "currency": "cryptos", "opensourceScore": 95/100},
{ "name": "Google Cloud Platform", "target": "Wierd People that like great interface, argh", "currency": "dollars", "opensourceScore": "lol/100"},
{ "name": "AWS", "target": "semi-cool-people", "currency": "Dollars", "opensourceScore": "a little"}
]

x = Providers.insert_one(MycoolDocument)
```

</code-block>

It's cool but it would be great to read data because it's kinda the goal of a database(hope it is not a big surprise for you).<br>
This command will print every field.

<code-block active>

```python
import pymongo
MANAGER = pymongo.MongoClient("mongodb://localhost:27017/")

CloudDB = MANAGER["CloudProvider"]

Providers = CloudDB["Providers"]

for EACH in Providers.find():
  print(EACH)
```

</code-block>
This command will print only the fields that match !
<code-block active>

```python
import pymongo
MANAGER = pymongo.MongoClient("mongodb://localhost:27017/")

CloudDB = MANAGER["CloudProvider"]

Providers = CloudDB["Providers"]

for EACH in Providers.find({},{"name":"Masternetwork"}):
  print(EACH)
```

</code-block>

If you want to destroy a production database in seconds. I got the command for you. <br>
With drop, all your problems with your clients disappear since you have destroy all the data ! 
<code-block active>

```python
import pymongo
MANAGER = pymongo.MongoClient("mongodb://localhost:27017/")

CloudDB = MANAGER["CloudProvider"]

Providers = CloudDB["Providers"]

Providers.drop() #You love hurting yourself, don't you ?
```

</code-block>

## Conclusion

Querying with MongoDB can be a bit confusing at first. Indeed, many are used to a "SQL-like" language that allows you to simply specify what you want, but not how. However, this type of declarative language becomes unsuited to the many intricacies involved in data manipulation, which is difficult to do in a distributed context.

MongoDB's language is based on Javascript, which facilitates use of JSon, function calls, creation of libraries or definition of Map/Reduce programs.

As we have seen, mongodb is a great database allowing an infinite number of operations! Indeed, you can do almost everything with it and you still have a lot to learn about indexes and other commands! Don't forget redundancy and backups though! 
MongoDB is very fast and will suit all your projects made with love!