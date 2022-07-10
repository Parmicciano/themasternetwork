---
title: How are the costs of the masternetwork distributed? 
description: 'Although the masternetwork is a platform bringing together developers and computational resources, there are still several different fees and breakpoints.'
category: Technical documentation
position: 6
---
Although the masternetwork is a platform bringing together developers and computational resources, there are still several different fees and breakpoints.

## The Masternetwork is an api, a big server is needed for that role.
The masternetwork being an api, there are important costs related to the server ensuring the connection between the nodes and the users. This server provides all the functionality of the network and without it, there is no network. Indeed, if it does not work, the user cannot interact with the interface, the api and the nodes cannot retrieve the actions to be executed such as the creation of virtual machines, the deletion of virtual machines, the stop of virtual machines and their startup.<br>. So we rent a big server, very expensive to ensure the reliability of the network. We aim to take new servers later to ensure the security of the network but also to secure the load peaks. In short, on the 30% margin that we take on virtual machines. It seems normal to agree on the fact that this server is currently costing us 15/20% of the entire current network expenses. 


## The traffic goes through a VPN !
All requests go through a vpn to protect the nodes from virtual machine traffic. This machine is essential because without it the nodes are absolutely not wprotected. 
This VPN is homemade and therefore runs on a server at a cloud provider (aws). It allows to have an outgoing ip from a datacenter but especially to ensure the security of the different nodes of the network. <br>
We can easily estimate the cost of this VPN to 5% of the current expenses on the masternetwork but this percentage should decrease because there will not really be a need to improve the resources of the server providing the vpn in the future (a single vpn server can provide a lot of traffic through the vpn)

## The instances use a reverse proxy!
Since most of the nodes are exposed behind a firewall, not having a public IP, we use a reverse proxy to expose the virtual machines of the nodes to the internet.<br>
We then rent an instance in the cloud to provide the reverse proxy function.
This server costs between 5 and 10% of the cost of the instances but it will surely not need to be scaled
<alert>
It's a beta, many bugs can exist. Contact us on <a href="https://discord.com/invite/NVvvkXMbAB">discord</a> for reporting bugs ! 
</alert>


