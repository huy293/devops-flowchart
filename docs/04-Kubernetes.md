# Kubernetes Documentation

## 1. Kubernetes Architecture

Kubernetes is a container orchestration platform. The main components of its architecture include:
- **Master Node**: Controls the Kubernetes cluster, manages workloads, and stores the cluster state.
  - **API Server**: Serves as the front end of the Kubernetes control plane.
  - **Controller Manager**: Regulates the state of the cluster by performing routine tasks.
  - **Scheduler**: Assigns workloads to worker nodes based on resource availability.
- **Worker Nodes**: Execute the containerized applications. Each worker node contains:
  - **Kubelet**: Agent that communicates with the master.
  - **Kube Proxy**: Maintains network rules and manages communication between pods.
  - **Container Runtime**: Software responsible for running containers (e.g., Docker).

## 2. Deployment

Kubernetes uses objects called Deployments to declare the desired state of application deployments. Key benefits include:
- Rolls out updates automatically.
- Rollbacks to previous versions are simple and straightforward.

To create a Deployment, use the following command:
```bash
kubectl apply -f deployment.yaml
3. Networking
Kubernetes networking focuses on communication between pods and includes:

ClusterIP: The default type that exposes a service on a cluster-internal IP.
NodePort: Exposes a service on a static port on each node.
LoadBalancer: Uses an external load balancer to handle traffic.
4. Storage
Kubernetes supports various storage types:

Volumes: Persistent storage that exists beyond the lifecycle of a pod.
Persistent Volumes (PVs): Cluster-wide storage resources.
Persistent Volume Claims (PVCs): Requests for storage by a user.
5. Security
Kubernetes security encompasses several aspects:

Role-Based Access Control (RBAC): Restricts access based on user roles.
Network Policies: Controls the communication between pod network endpoints.
Secrets and ConfigMaps: Securely manages sensitive information.
6. Advanced Topics
Advanced Kubernetes concepts include:

Operators: Extensions that use custom resources to manage applications.
Helm: A package manager for Kubernetes that simplifies application deployment.
Kubernetes API: The interface for interacting