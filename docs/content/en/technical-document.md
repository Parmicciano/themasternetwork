---
title: How the masternetwork works ?
description: 'Technical documentation of the masternetwork'
category: Technical documentation
position: 5
---
The masternetwork is a system allowing to put in relation developers and a decentralized machine park allowing virtualization.<br><br>
The machine park must therefore be controlled and it must be ensured that there is no fraud or technical problem causing a loss of virtual machines created or a loss of quality.
Find out how it works. 

## The masternetwork is an api
The masternetwork is an api more than anything else, allowing to put in relation machines with developers. So we use fastapi, a python framework allowing to send requests to the decentralized servers participating in the masternetwork, the masternodes. <br><br> 
These servers, whatever they are, have a limited capacity of resources (cpu, ram, storage). They are thus proposed to the network via a client realized in golang allowing to launch, stop, start, delete virtual machines at the user's request.<br><br>
All the traffic of the virtual machine passes by a vpn (openvpn) realized by our care and lodged in a datacenter aws thus making it possible to protect the nodes of the network from fraudulent traffic.<br><br> 



Intranet penetration tool 
-----------------------------------------------
The nodes of the network don't necessarily have a public ip, that's the good thing. Indeed, by using a remote server (in an aws datacenter) again and by using firewall penetration tools like fast reverse proxy (frp) to which I contribute, we can expose a server that doesn't have a public ip. This allows the masternetwork to expose websites and any port very easily. <br><br>
Thus, the nodes allow to expose an infinite number of services even though they may be in a private network (behind an internet box)

<alert>
It's a beta, many bugs can exist. Contact us on <a href="https://discord.com/invite/NVvvkXMbAB">discord</a> for reporting bugs ! 
</alert>


