# 🚀 Enterprise Cloud-Native CI/CD Pipeline

![Jenkins Pipeline Status](https://img.shields.io/badge/Jenkins-Pipeline_Passed-brightgreen?logo=jenkins)
![Docker Registry](https://img.shields.io/badge/Docker_Hub-Image_Pushed-blue?logo=docker)
![Kubernetes Deploy](https://img.shields.io/badge/Kubernetes-Rollout_Success-326CE5?logo=kubernetes)
![Node.js](https://img.shields.io/badge/Node.js-18_Alpine-339933?logo=node.js)
![Linux OS](https://img.shields.io/badge/OS-RHEL_9.7-red?logo=redhat)

An end-to-end, fully automated Continuous Integration & Continuous Deployment (CI/CD) pipeline for a microservice application. Built on **Red Hat Enterprise Linux (RHEL)** using **Jenkins**, **Docker**, and **Kubernetes (Minikube)**.

This pipeline automates code checkout, unit testing, containerization, image distribution with immutable Git SHA tags, and zero-downtime Kubernetes rollouts.

---

## 🏗️ Architecture & Workflow

```text
  ┌──────────┐      git push      ┌────────────┐
  │ Developer│ ─────────────────> │   GitHub   │
  └──────────┘                    └─────┬──────┘
                                        │ Webhook/SCM Poll
                                        ▼
                                ┌──────────────┐
                                │ Jenkins Host │
                                └──────┬───────┘
                                       │
     ┌─────────────────────────────────┼─────────────────────────────────┐
     │                                 │                                 │
     ▼                                 ▼                                 ▼
┌─────────┐                      ┌───────────┐                     ┌───────────┐
│ Stage 1 │                      │  Stage 2  │                     │  Stage 3  │
│ Unit    │                      │ Build &   │                     │ Deploy to │
│ Testing │                      │   Push    │                     │   K8s     │
└────┬────┘                      └─────┬─────┘                     └─────┬─────┘
     │ npm ci                          │ docker build                    │ kubectl apply
     │ npm test                        │ docker push                     │ rollout status
     ▼                                 ▼                                 ▼
[Mocha Tests]                [Docker Hub Registry]               [Minikube Cluster]
```

## 🛠️ Tech Stack

- Operating System: Red Hat Enterprise Linux (RHEL 9.7 / ARM64)

- Version Control: Git & GitHub

- CI/CD Automation: Jenkins (Declarative Pipeline)

- Application Framework: Node.js (Express), Mocha & Supertest

- Containerization: Docker (Multi-stage Dockerfile)

- Registry: Docker Hub (jatinpatter0702/cloud-native-app)

- Orchestration: Kubernetes (Minikube)

---

## 📸 Proof of Execution
1. Jenkins Pipeline Execution
<img width="1448" height="796" alt="jenkins-success" src="https://github.com/user-attachments/assets/d8f0d0c8-e148-4869-b635-fda56c51964c" />

2. Live Kubernetes Deployment
<img width="1448" height="796" alt="Live Kubernetes Deployment" src="https://github.com/user-attachments/assets/c19dbe49-1183-4956-9cdd-682fa2e2043a" />

3. Application Verification
<img width="1448" height="796" alt=" Application Verification" src="https://github.com/user-attachments/assets/3b36a07e-8066-457d-b875-3eaf265c4b56" />



## ⚙️ Repository File Structure

```text
.
├── Dockerfile              # Multi-stage Docker build config
├── Jenkinsfile             # Declarative Pipeline definition
├── package.json            # Node.js dependencies & scripts
├── package-lock.json       # Deterministic lockfile for CI builds
├── server.js               # Node.js microservice application
├── k8s/
│   ├── deployment.yaml     # Kubernetes Deployment manifest
│   └── service.yaml        # Kubernetes NodePort Service manifest
└── tests/
    └── app.test.js         # Automated unit test suite
```

## 🚀 Getting Started

### Prerequisites
* RHEL / Linux server with Docker, Jenkins, `kubectl`, and Minikube configured.
* Docker Hub Account & GitHub Personal Access Token.

### Local Execution

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/jatinpatter/cloud-native-app.git](https://github.com/jatinpatter/cloud-native-app.git)
   cd cloud-native-app
   
  
2. **Run tests:**
   ```bash
   npm install
   npm test



  4.	Deploy via Jenkins:
  •	Create a new Pipeline job pointing to https://github.com/jatinpatter/cloud-native-app.git.
  •	Trigger Build Now.


## 👤 Author
•	Jatin Patter
•	GitHub: @jatinpatter
•	Docker Hub: jatinpatter0702


