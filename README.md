# Supporting Material Manager

[![License](https://img.shields.io/badge/license-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache)

## Table of contents

- [Supporting Material Manager](#supporting-material-manager)
  - [Table of contents](#table-of-contents)
  - [Requirements](#requirements)
  - [Deployment](#deployment)
  - [Development](#development)
  - [Getting help](#getting-help)
  - [Contributing](#contributing)
  - [License](#license)
  - [Authors and history](#authors-and-history)


## Requirements


## Deployment

There is two options depending on the desired usage:

#### Testing 

Simply set up a MinIO pod by 

```shell
kubectl apply -f ./kubernetes/min.io/001_minio-pod.yaml
```
and then configure the service and de virtual service for istio

```shell
kubectl apply -f ./kubernetes/min.io/002_minio-network.yaml
```

#### Production

By seting up the deployment the state pods will be managed by kubernetes 

```shell
kubectl apply -f ./kubernetes/min.io/001_minio-deployment.yaml
```
and then configure the service and de virtual service for istio

```shell
kubectl apply -f ./kubernetes/min.io/002_minio-network.yaml
```

#### Security guidelines for MinIO

By following the instructions on the [MinIO documentation](https://min.io/docs/minio/kubernetes/upstream/administration/identity-access-management.html#minio-authentication-and-identity-management) you can set the IAM through OIDC for the integration with Keycloak

#### Service deployment

First, in order to set up the service config you have to modify the [ConfigMap](./kubernetes/001_config-map.yaml) resource with the desired credentials of the minIO bucket and FHIR url

```yaml

  APP_PORT: "3000"
  MINIO_URL: "" #depending of the environment
  MINIO_PORT: "9000"
  ACCESS_KEY: "" 
  SECRET_KEY: ""
  FHIR_URL: "gravitate-health.lst.tfo.upm.es/ips/api/fhir/"
  GH_BUCKET: "gh-bucket"
  API_URL: "gravitate-health.lst.tfo.upm.es/bucket"
```

```shell
kubectl apply -f kubernetes/001_config-map.yaml
kubectl apply -f ./kubernetes/002_smm-deployment.yaml
kubectl apply -f ./kubernetes/003_smm-network.yaml

```

### List of env variables 

| Variable name | Example value | Description|
|---------------|---------------|------------|
| APP_PORT | 3000 | The port where the application will run |
| MINIO_URL | localhost | The URL of the MinIO server |
| MINIO_PORT | 9000 | The port of the MinIO server |
| ACCESS_KEY | \<access-key> | The access key for the MinIO server |
| SECRET_KEY | \<secret-key> | The secret key for the MinIO server |
| FHIR_URL | https://\<fhir-server>/ips/api/fhir/ | The URL of the FHIR server |
| GH_BUCKET | gh-bucket | The name of the bucket in the MinIO server |
| API_URL | https://\<url>:3000 | The URL of the API |


## Development

To set up a development min.io server on docker run:

```yaml
docker run \
   -p 9000:9000 \
   -p 9001:9001 \
   --name minio \
   -v ~/minio/data:/data \
   -e "MINIO_ROOT_USER=admin" \
   -e "MINIO_ROOT_PASSWORD=password123" \
   quay.io/minio/minio server /data --console-address ":9001"
```



## Getting help
------------
In case you find a problem or you need extra help, please use the issues tab to report the issue.

## Contributing
------------
To contribute, fork this repository and send a pull request with the changes squashed.

## License
------------

This project is distributed under the terms of the [Apache License, Version 2.0 (AL2)](https://www.apache.org/licenses/LICENSE-2.0). The license applies to this file and other files in the [GitHub repository](https://github.com/Gravitate-Health/content-manager-service) hosting this file.
```
Copyright 2024 Universidad Politécnica de Madrid

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

Authors and history
---------------------------
- Alejo Esteban ([@10alejospain](https://github.com/10alejospain))