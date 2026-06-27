# Document: https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html


View a markdown version of this page


# How Amazon VPC works


With Amazon Virtual Private Cloud (Amazon VPC), you can launch AWS resources in a logically isolated virtual 
		network that you've defined. This virtual network closely resembles a traditional network 
		that you'd operate in your own data center, with the benefits of using the scalable 
		infrastructure of AWS.


The following is a visual representation of a VPC and its resources from the
			Preview pane shown when you create a VPC using the AWS Management Console. For
		an existing VPC, you can access this visualization on the Resource map
		tab. This example shows the resources that are initially selected on the Create
			VPC page when you choose to create the VPC plus other networking resources.
		This VPC is configured with an IPv4 CIDR and an Amazon-provided IPv6
		CIDR, subnets in two Availability Zones, three route tables, an internet gateway, and a gateway
		endpoint. Because we've selected the internet gateway, the visualization indicates that
		traffic from the public subnets is routed to the internet because the corresponding route
		table sends the traffic to the internet gateway.


###### Concepts

- VPCs and subnets
- Default and nondefault VPCs
- Route tables
- Access the internet
- Access a corporate or home network
- Connect VPCs and networks
- AWS private global network


## VPCs and subnets


A virtual private cloud (VPC) is a virtual network dedicated to your
			AWS account. It is logically isolated from other virtual networks in the AWS Cloud.
			You can specify an IP address range for the VPC, add subnets, add gateways, and
			associate security groups.


A subnet is a range of IP addresses in your VPC. You launch AWS
			resources, such as Amazon EC2 instances, into your subnets. You can connect a subnet to the
			internet, other VPCs, and your own data centers, and route traffic to and from your
			subnets using route tables.


###### Learn more

- IP addressing for your VPCs and subnets
- Configure a virtual private cloud
- Subnets for your VPC


## Default and nondefault VPCs


If your account was created after December 4, 2013, it comes with a default VPC in each Region. A default VPC is
			configured and ready for you to use. For example, it has a default
				subnet in each Availability Zone in the Region, an attached internet
			gateway, a route in the main route table that sends all traffic to the internet gateway,
			and DNS settings that automatically assign public DNS hostnames to instances with public
			IP addresses and enable DNS resolution through the Amazon-provided DNS server (see DNS attributes for your VPC). Therefore, an EC2
			instance that is launched in a default subnet automatically has access to the internet.
			If you have a default VPC in a Region and you don't specify a subnet when you launch an
			EC2 instance into that Region, we choose one of the default subnets and launch the
			instance into that subnet.


You can also create your own VPC, and configure it as you need. This is known as a
                    nondefault VPC. Subnets that you create in your nondefault
                VPC and additional subnets that you create in your default VPC are called
                    nondefault subnets.


###### Learn more

- Default VPCs
- Create a VPC


## Route tables


A route table contains a set of rules, called routes, that are
            used to determine where network traffic from your VPC is directed. You can explicitly
            associate a subnet with a particular route table. Otherwise, the subnet is implicitly
            associated with the main route table.


Each route in a route table specifies the range of IP addresses where you want the
            traffic to go (the destination) and the gateway, network interface, or connection
            through which to send the traffic (the target).


###### Learn more

- Configure route tables


## Access the internet


You control how the instances that you launch into a VPC access resources outside
				the VPC.


A default VPC includes an internet gateway, and each default subnet is a public subnet.
			Each instance that you launch into a default subnet has a private IPv4 address and a
			public IPv4 address. These instances can communicate with the internet through the
			internet gateway. An internet gateway enables your instances to connect to the internet
			through the Amazon EC2 network edge.


By default, each instance that you launch into a nondefault subnet has a private IPv4
				address, but no public IPv4 address, unless you specifically assign one at launch,
				or you modify the subnet's public IP address attribute. These instances can
				communicate with each other, but can't access the internet.


You can enable internet access for an instance launched into a nondefault subnet by
				attaching an internet gateway to its VPC (if its VPC is not a default VPC) and
				associating an Elastic IP address with the instance.


Alternatively, to allow an instance in your VPC to initiate outbound connections to the
			internet but prevent unsolicited inbound connections from the internet, you can use a
			network address translation (NAT) device. NAT maps multiple private IPv4 addresses to a
			single public IPv4 address. You can configure the NAT device with an Elastic IP address
			and connect it to the internet through an internet gateway. This makes it possible for
			an instance in a private subnet to connect to the internet through the NAT device,
			routing traffic from the instance to the internet gateway and any responses to the
			instance.


If you associate an IPv6 CIDR block with your VPC and assign IPv6 addresses to your
            instances, instances can connect to the internet over IPv6 through an internet gateway.
            Alternatively, instances can initiate outbound connections to the internet over IPv6
            using an egress-only internet gateway. IPv6 traffic is separate from IPv4 traffic; your
            route tables must include separate routes for IPv6 traffic.


###### Learn more

- Enable internet access for a VPC using an internet gateway
- Enable outbound IPv6 traffic using an egress-only internet gateway
- Connect to the internet or other networks using NAT devices


## Access a corporate or home network


You can optionally connect your VPC to your own corporate data center using an IPsec
			AWS Site-to-Site VPN connection, making the AWS Cloud an extension of your data center.


A Site-to-Site VPN connection consists of two VPN tunnels between a virtual private gateway or transit
            gateway on the AWS side, and a customer gateway device located in your data center. A
            customer gateway device is a physical device or software appliance that you configure on
            your side of the Site-to-Site VPN connection.


###### Learn more

- AWS Site-to-Site VPN User Guide
- Amazon VPC Transit Gateways


## Connect VPCs and networks


You can create a VPC peering connection between two VPCs that
			enables you to route traffic between them privately. Instances in either VPC can
			communicate with each other as if they are within the same network.


You can also create a transit gateway and use it to interconnect
			your VPCs and on-premises networks. The transit gateway acts as a Regional virtual
			router for traffic flowing between its attachments, which can include VPCs, VPN
			connections, Direct Connect gateways, and transit gateway peering connections.


###### Learn more

- Amazon VPC Peering Guide
- Amazon VPC Transit Gateways


## AWS private global network


AWS provides a high-performance, and low-latency private global network that
			delivers a secure cloud computing environment to support your networking needs. AWS
			Regions are connected to multiple Internet Service Providers (ISPs) as well as to a
			private global network backbone, which provides improved network performance for
			cross-Region traffic sent by customers.


Packets that originate in the private global network with a destination in the private
			global network stay in the private global network and do not traverse the public
			internet. This is true whether the destination is a private IP address or a public IP
			address. For example, if EC2 instances in two VPCs communicate using public IP
			addresses, the traffic stays in the private global network. The destination can be in
			the same Availability Zone, a different Availability Zone in the same Region, or a
			different Region, except for the China Regions.


Network packet loss can be caused by a number of factors, including network flow
			collisions, lower level (Layer 2) errors, and other network failures. We engineer
			and operate our networks to minimize packet loss. We measure packet-loss rate (PLR)
			across the global backbone that connects the AWS Regions. We operate our backbone
			network to target a p99 of the hourly PLR of less than 0.0001%.


Javascript is disabled or is unavailable in your browser.


To use the Amazon Web Services Documentation, Javascript must be enabled. Please refer to your browser's Help pages for instructions.


Thanks for letting us know we're doing a good job!


If you've got a moment, please tell us what we did right so we can do more of it.


Thanks for letting us know this page needs work. We're sorry we let you down.


If you've got a moment, please tell us how we can make the documentation better.
