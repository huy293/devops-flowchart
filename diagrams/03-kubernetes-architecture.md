# Kubernetes Cluster Architecture

## Overview
This document illustrates the architecture of a Kubernetes cluster, showcasing the main components involved in managing application containers.

## Diagram

```
+---------------------+
|     Master Node     |
|                     | 
|  +---------------+  |
|  | API Server    |  |
|  +---------------+  |
|        |            |
|  +---------------+  |
|  | Controller    |  |
|  | Manager       |  |
|  +---------------+  |
|        |            |
|  +---------------+  |
|  | Scheduler     |  |
|  +---------------+  |
+---------------------+
         |
         |
 +-------+-------+
 |               |
 |               |
+---------------------+  +----------------------+  +----------------------+ 
| Worker Node  #1      |  | Worker Node  #2     |  | Worker Node  #3     |
|                      |  |                      |  |                      |
|  +---------------+   |  |  +---------------+   |  |  +---------------+   |
|  | Kubelet       |   |  |  | Kubelet       |   |  |  | Kubelet       |   |
|  +---------------+   |  |  +---------------+   |  |  +---------------+   |
|          |           |  |          |           |  |          |           |
|  +---------------+   |  |  +---------------+   |  |  +---------------+   |
|  | Pod          |   |   |  | Pod          |   |   |  | Pod          |   |
|  +---------------+   |  |  +---------------+   |  |  +---------------+   |
|                      |  |                      |  |                      |  
+---------------------+  +----------------------+  +----------------------+ 

```

## Components
- **Master Node**: Responsible for managing the Kubernetes cluster, including the API server, controller manager, and scheduler.
- **Worker Nodes**: Run the application containers and communicate with the master node through Kubelet and the kube-proxy.