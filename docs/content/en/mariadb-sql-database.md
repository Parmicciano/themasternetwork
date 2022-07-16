---
title: How to host my mariadb SQL database on ubuntu jammy 22.04
description: Host your  mariadb SQL database on ubuntu jammy 22.04 in seconds!
category: Developper Tutorials
position: 2
---

MARIADB is an opensource database management system, commonly used as an alternative to MySQL as part of the popular LAMP (Linux, Apache, MySQL, PHP/Python/Perl) database stack. It is intended to replace MySQL.<br>
Basically, MariadDB is free MYSQL!
<br>
You will see how to :
<br><br>
Upgrade your package index using apt
Install the mariadb package server using apt. The package also contains some companion tools for interacting with MariaDB
Run the mysql_secure_installation script to restrict access to the server.

## How to install mariadb on ubuntu jammy (ubuntu 22.04)?

MariaDB is an amazing SQL database. You are going to love it ! If you don't like SQL though, you're good to go with <a href="/mongodb-database">mongodb</a>.<br> MariaDB is as much powerful as mongodb.
<br><br>
Install mariadb as shown here: 

<code-block active>

```bash
sudo apt update &&  sudo apt install mariadb-server -y && sudo mysql_secure_installation 
```

</code-block>
You can secure your installation by updating your admin password 
<code-block active>

```bash
sudo mariadb
```

</code-block>
You can update it with SQL !
<code-block active>

```sql
GRANT ALL ON *.* TO 'admin'@'localhost' IDENTIFIED BY 'MyFuckingPassswordImdangerrous0001694242' WITH GRANT OPTION;
```

</code-block>
That's it ! Then, you can configure mariadb as a service : 
## Configure systemd 
Systemd is the operating system manager that has superseded upstart and its ancestor (the system V scenarios) ever since Ubuntu 16.04 LTS Xenial. The name of the program comes from "system dæmon": the system dæmon.<br><br>
It is one of the key elements of the GNU/Linux system landscape. It is the first application launched by the kernel (it has the PID N°1) and it is in charge of launching all the following programs in order until the whole system is functional for the user, according to the determined mode (single user, multi-user, graphical). It is also responsible for restarting or shutting down your computer correctly.

<br><br>
The command below will launch mariadb as a service (if it crash, it will immediatly restart). Mariadb will start immediatly on boot, right after the network has been registered and the status of the program is shown right after you've wrote this command.\
You will not have to restart manually your database in case of an issue ! 
<code-block active>

```bash
sudo systemctl daemon-reload && sudo systemctl start mariadb && sudo systemctl enable mariadb && sudo systemctl status mariadb
```

</code-block>

## Configure your network
Both MySQL and MariaDB servers use a file called my.cnf for the parameters used to set up the actual server. This is where the host port number and, if you do so, the local socket can be configured. The default port number for both MySQL and MariaDB is 3306, but this can be changed to suit your needs.
<br><br>
A local socket is the preferred method of connecting to a database site, as it eliminates much of the overhead of creating a TCP connection and transferring data. However, its use is limited by the fact that it can only be used if the application accusing the database is on the same machine. In larger or highly available systems, this may not be possible.

A TCP connection is the only option for connecting your MySQL database from an external box. It causes a slight overhead compared to a local node and therefore slightly higher latency. The MySQL server and MariaDB can be configured to use a local socket, TCP connections or both.

We will process the my.cnf file for the following sections. Open the file in your favorite editor.
<code-block active>

```bash
sudo nano /etc/mysql/my.cnf
```

</code-block>
Here you can update the port used by mysql. Open the port from your cloud provider interface (<a href="https://masternetwork.dev">masternetwork</a>, <a href="https://aws.amazon.com/">aws</a>, <a href="https://cloud.google.com/">gcp</a>...). Because the masternetwork give a public ip to many servers, you will not be able to get the specific port (3306) but you can edit your port used in your configuration. If you use php, you can use this command :

<code-block active>

```port
$conn = new PDO('mysql:host='.$this->db_host.'; port=3308; dbname='.$this->db_name,$this->db_username,$this->db_password);
```

</code-block>
So the port not really matter here! 


## Conclusion

Mariadb is a very powerful sql database allowing you to perform a large number of operations on your data! 
You can improve the speed of your data processing by using created indexes and chances are you will have a great time optimizing your sql databases! 