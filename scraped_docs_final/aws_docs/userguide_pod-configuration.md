# Document: https://docs.aws.amazon.com/eks/latest/userguide/pod-configuration.html


View a markdown version of this page


Help improve this page


To contribute to this user guide, choose the Edit this page on GitHub link that is located in the right pane of every page.


# Configure Pods to use a Kubernetes service account


If a Pod needs to access AWS services, then you must configure it to use a Kubernetes service account. The service account must be associated to an AWS Identity and Access Management (IAM) role that has permissions to access the AWS services.

- An existing cluster. If you donât have one, you can create one using one of the guides in Get started with Amazon EKS.
- An existing IAM OpenID Connect (OIDC) provider for your cluster. To learn if you already have one or how to create one, see Create an IAM OIDC provider for your cluster.
- An existing Kubernetes service account thatâs associated with an IAM role. The service account must be annotated with the Amazon Resource Name (ARN) of the IAM role. The role must have an associated IAM policy that contains the permissions that you want your Pods to have to use AWS services. For more information about how to create the service account and role, and configure them, see Assign IAM roles to Kubernetes service accounts.
- Version 2.12.3 or later or version 1.27.160 or later of the AWS Command Line Interface (AWS CLI) installed and configured on your device or AWS CloudShell. To check your current version, use aws --version | cut -d / -f2 | cut -d ' ' -f1. Package managers such as yum, apt-get, or Homebrew for macOS are often several versions behind the latest version of the AWS CLI. To install the latest version, see Installing and Quick configuration with aws configure in the 
               AWS Command Line Interface User Guide. The AWS CLI version that is installed in AWS CloudShell might also be several versions behind the latest version. To update it, see Installing AWS CLI to your home directory in the 
               AWS CloudShell User Guide.
- The kubectl command line tool is installed on your device or AWS CloudShell. The version can be the same as or up to one minor version earlier or later than the Kubernetes version of your cluster. For example, if your cluster version is 1.29, you can use kubectl version 1.28, 1.29, or 1.30 with it. To install or upgrade kubectl, see Set up kubectl and eksctl.
- An existing kubectl
config file that contains your cluster configuration. To create a kubectl
config file, see Connect kubectl to an EKS cluster by creating a kubeconfig file.


Use the following command to create a deployment manifest that you can deploy a Pod to confirm configuration with. Replace the example values with your own values.
cat >my-deployment.yaml <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      serviceAccountName: my-service-account
      containers:
      - name: my-app
        image: public.ecr.aws/nginx/nginx:X.XX
EOF

Deploy the manifest to your cluster.
kubectl apply -f my-deployment.yaml

Confirm that the required environment variables exist for your Pod.


View the Pods that were deployed with the deployment in the previous step.
kubectl get pods | grep my-app
An example output is as follows.
my-app-6f4dfff6cb-76cv9   1/1     Running   0          3m28s

View the ARN of the IAM role that the Pod is using.
kubectl describe pod my-app-6f4dfff6cb-76cv9 | grep AWS_ROLE_ARN:
An example output is as follows.
AWS_ROLE_ARN:                 arn:aws:iam::111122223333:role/my-role
The role ARN must match the role ARN that you annotated the existing service account with. For more about annotating the service account, see Assign IAM roles to Kubernetes service accounts.

Confirm that the Pod has a web identity token file mount.
kubectl describe pod my-app-6f4dfff6cb-76cv9 | grep AWS_WEB_IDENTITY_TOKEN_FILE:
An example output is as follows.
AWS_WEB_IDENTITY_TOKEN_FILE:  /var/run/secrets/eks.amazonaws.com/serviceaccount/token
The kubelet requests and stores the token on behalf of the Pod. By default, the kubelet refreshes the token if the token is older than 80 percent of its total time to live or older than 24 hours. You can modify the expiration duration for any account other than the default service account by using the settings in your Pod spec. For more information, see Service Account Token Volume Projection in the Kubernetes documentation.
The Amazon EKS Pod Identity Webhook on the cluster watches for Pods that use a service account with the following annotation:
eks.amazonaws.com/role-arn: arn:aws:iam::111122223333:role/my-role
The webhook applies the previous environment variables to those Pods. Your cluster doesnât need to use the webhook to configure the environment variables and token file mounts. You can manually configure Pods to have these environment variables. The supported versions of the AWS SDK look for these environment variables first in the credential chain provider. The role credentials are used for Pods that meet this criteria.


Confirm that your Pods can interact with the AWS services using the permissions that you assigned in the IAM policy attached to your role.
NoteWhen a Pod uses AWS credentials from an IAM role thatâs associated with a service account, the AWS CLI or other SDKs in the containers for that Pod use the credentials that are provided by that role. If you donât restrict access to the credentials that are provided to the Amazon EKS node IAM role, the Pod still has access to these credentials. For more information, see Restrict access to the instance profile assigned to the worker node.
If your Pods canât interact with the services as you expected, complete the following steps to confirm that everything is properly configured.


Confirm that your Pods use an AWS SDK version that supports assuming an IAM role through an OpenID Connect web identity token file. For more information, see Use IRSA with the AWS SDK.

Confirm that the deployment is using the service account.
kubectl describe deployment my-app | grep "Service Account"
An example output is as follows.
Service Account:  my-service-account

If your Pods still canât access services, review the steps that are described in Assign IAM roles to Kubernetes service accounts to confirm that your role and service account are configured properly.
- Use the following command to create a deployment manifest that you can deploy a Pod to confirm configuration with. Replace the example values with your own values.
cat >my-deployment.yaml <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      serviceAccountName: my-service-account
      containers:
      - name: my-app
        image: public.ecr.aws/nginx/nginx:X.XX
EOF
- Deploy the manifest to your cluster.
kubectl apply -f my-deployment.yaml
- Confirm that the required environment variables exist for your Pod.


View the Pods that were deployed with the deployment in the previous step.
kubectl get pods | grep my-app
An example output is as follows.
my-app-6f4dfff6cb-76cv9   1/1     Running   0          3m28s

View the ARN of the IAM role that the Pod is using.
kubectl describe pod my-app-6f4dfff6cb-76cv9 | grep AWS_ROLE_ARN:
An example output is as follows.
AWS_ROLE_ARN:                 arn:aws:iam::111122223333:role/my-role
The role ARN must match the role ARN that you annotated the existing service account with. For more about annotating the service account, see Assign IAM roles to Kubernetes service accounts.

Confirm that the Pod has a web identity token file mount.
kubectl describe pod my-app-6f4dfff6cb-76cv9 | grep AWS_WEB_IDENTITY_TOKEN_FILE:
An example output is as follows.
AWS_WEB_IDENTITY_TOKEN_FILE:  /var/run/secrets/eks.amazonaws.com/serviceaccount/token
The kubelet requests and stores the token on behalf of the Pod. By default, the kubelet refreshes the token if the token is older than 80 percent of its total time to live or older than 24 hours. You can modify the expiration duration for any account other than the default service account by using the settings in your Pod spec. For more information, see Service Account Token Volume Projection in the Kubernetes documentation.
The Amazon EKS Pod Identity Webhook on the cluster watches for Pods that use a service account with the following annotation:
eks.amazonaws.com/role-arn: arn:aws:iam::111122223333:role/my-role
The webhook applies the previous environment variables to those Pods. Your cluster doesnât need to use the webhook to configure the environment variables and token file mounts. You can manually configure Pods to have these environment variables. The supported versions of the AWS SDK look for these environment variables first in the credential chain provider. The role credentials are used for Pods that meet this criteria.
- View the Pods that were deployed with the deployment in the previous step.
kubectl get pods | grep my-app
An example output is as follows.
my-app-6f4dfff6cb-76cv9   1/1     Running   0          3m28s
- View the ARN of the IAM role that the Pod is using.
kubectl describe pod my-app-6f4dfff6cb-76cv9 | grep AWS_ROLE_ARN:
An example output is as follows.
AWS_ROLE_ARN:                 arn:aws:iam::111122223333:role/my-role
The role ARN must match the role ARN that you annotated the existing service account with. For more about annotating the service account, see Assign IAM roles to Kubernetes service accounts.
- Confirm that the Pod has a web identity token file mount.
kubectl describe pod my-app-6f4dfff6cb-76cv9 | grep AWS_WEB_IDENTITY_TOKEN_FILE:
An example output is as follows.
AWS_WEB_IDENTITY_TOKEN_FILE:  /var/run/secrets/eks.amazonaws.com/serviceaccount/token
The kubelet requests and stores the token on behalf of the Pod. By default, the kubelet refreshes the token if the token is older than 80 percent of its total time to live or older than 24 hours. You can modify the expiration duration for any account other than the default service account by using the settings in your Pod spec. For more information, see Service Account Token Volume Projection in the Kubernetes documentation.
The Amazon EKS Pod Identity Webhook on the cluster watches for Pods that use a service account with the following annotation:
eks.amazonaws.com/role-arn: arn:aws:iam::111122223333:role/my-role
The webhook applies the previous environment variables to those Pods. Your cluster doesnât need to use the webhook to configure the environment variables and token file mounts. You can manually configure Pods to have these environment variables. The supported versions of the AWS SDK look for these environment variables first in the credential chain provider. The role credentials are used for Pods that meet this criteria.
- Confirm that your Pods can interact with the AWS services using the permissions that you assigned in the IAM policy attached to your role.
NoteWhen a Pod uses AWS credentials from an IAM role thatâs associated with a service account, the AWS CLI or other SDKs in the containers for that Pod use the credentials that are provided by that role. If you donât restrict access to the credentials that are provided to the Amazon EKS node IAM role, the Pod still has access to these credentials. For more information, see Restrict access to the instance profile assigned to the worker node.
If your Pods canât interact with the services as you expected, complete the following steps to confirm that everything is properly configured.


Confirm that your Pods use an AWS SDK version that supports assuming an IAM role through an OpenID Connect web identity token file. For more information, see Use IRSA with the AWS SDK.

Confirm that the deployment is using the service account.
kubectl describe deployment my-app | grep "Service Account"
An example output is as follows.
Service Account:  my-service-account

If your Pods still canât access services, review the steps that are described in Assign IAM roles to Kubernetes service accounts to confirm that your role and service account are configured properly.
- Confirm that your Pods use an AWS SDK version that supports assuming an IAM role through an OpenID Connect web identity token file. For more information, see Use IRSA with the AWS SDK.
- Confirm that the deployment is using the service account.
kubectl describe deployment my-app | grep "Service Account"
An example output is as follows.
Service Account:  my-service-account
- If your Pods still canât access services, review the steps that are described in Assign IAM roles to Kubernetes service accounts to confirm that your role and service account are configured properly.


Javascript is disabled or is unavailable in your browser.


To use the Amazon Web Services Documentation, Javascript must be enabled. Please refer to your browser's Help pages for instructions.


Thanks for letting us know we're doing a good job!


If you've got a moment, please tell us what we did right so we can do more of it.


Thanks for letting us know this page needs work. We're sorry we let you down.


If you've got a moment, please tell us how we can make the documentation better.
