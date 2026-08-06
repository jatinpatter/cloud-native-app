# 🚀 Enterprise Cloud-Native CI/CD Pipeline

![Jenkins Pipeline Status](https://img.shields.io/badge/Jenkins-Pipeline_Passed-brightgreen?logo=jenkins)
![Docker Registry](https://img.shields.io/badge/Docker_Hub-Image_Pushed-blue?logo=docker)
![Kubernetes Deploy](https://img.shields.io/badge/Kubernetes-Rollout_Success-326CE5?logo=kubernetes)
![Node.js](https://img.shields.io/badge/Node.js-18_Alpine-339933?logo=node.js)
![Linux OS](https://img.shields.io/badge/OS-RHEL_9.7-red?logo=redhat)

An end-to-end **Enterprise Cloud-Native CI/CD Pipeline** built using **Jenkins, Docker, Kubernetes (Minikube), GitHub, and Red Hat Enterprise Linux (RHEL 9.7 ARM64)**.

The pipeline automatically performs source code checkout, dependency installation, unit testing, Docker image creation, image publishing to Docker Hub, and deployment to Kubernetes with automated rollout verification.

---

# 📌 Features

- Automated CI/CD using Jenkins Declarative Pipeline

- Automated source code checkout from GitHub

- Dependency installation using `npm ci`

- Automated unit testing with Mocha & Supertest

- Docker image build using Multi-stage Dockerfile

- Automatic Docker Hub image publishing

- Immutable Docker image tagging using Git Commit SHA

- Kubernetes Deployment & Service automation

- Automatic rollout verification

- Fully reproducible builds

- Enterprise DevOps workflow

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

---

## 🛠️ Tech Stack

- Operating System: Red Hat Enterprise Linux (RHEL 9.7 / ARM64)

- Version Control: Git & GitHub

- CI/CD Automation: Jenkins (Declarative Pipeline)

- Application Framework: Node.js (Express), Mocha & Supertest

- Containerization: Docker (Multi-stage Dockerfile)

- Registry: Docker Hub (jatinpatter0702/cloud-native-app)

- Orchestration: Kubernetes (Minikube)

---


# 🚀 Jenkins Pipeline Stages

### Stage 1 — Checkout Source Code

- Clone GitHub Repository

---

### Stage 2 — Install Dependencies

```bash
npm ci
```

---

### Stage 3 — Run Unit Tests

```bash
npm test
```

---

### Stage 4 — Build Docker Image

```bash
docker build -t jatinpatter0702/cloud-native-app:${GIT_COMMIT_SHA} .
```

---

### Stage 5 — Push Image to Docker Hub

```bash
docker push jatinpatter0702/cloud-native-app:${GIT_COMMIT_SHA}
```

---

### Stage 6 — Deploy to Kubernetes

```bash
kubectl apply -f k8s/
```

---

### Stage 7 — Verify Deployment

```bash
kubectl rollout status deployment/cloud-native-app
```

---

## 📸 Proof of Execution

### 1. Jenkins Pipeline Execution

<img width="1448" height="796" alt="jenkins-success" src="https://github.com/user-attachments/assets/d8f0d0c8-e148-4869-b635-fda56c51964c" />

### 2. Live Kubernetes Deployment

<img width="1448" height="796" alt="Live Kubernetes Deployment" src="https://github.com/user-attachments/assets/c19dbe49-1183-4956-9cdd-682fa2e2043a" />

### 3. Application Verification

<img width="1448" height="796" alt="Application Verification" src="https://github.com/user-attachments/assets/3b36a07e-8066-457d-b875-3eaf265c4b56" />

---

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

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/jatinpatter/cloud-native-app.git
cd cloud-native-app
```

---

## Install Dependencies & Run Tests

```bash
npm install
npm test
```

---

## Local Docker Test

```bash
docker build -t cloud-native-app .
docker run -d -p 3000:3000 cloud-native-app
```

---

## Deploy to Kubernetes

```bash
kubectl apply -f k8s/
```

---

## Verify Deployment

```bash
kubectl get pods
kubectl get svc
kubectl rollout status deployment/cloud-native-app
```

---

## Verify Application

```bash
curl http://<NODE-IP>:30080
```

**Expected Output:**

```html
<h1>Cloud-Native App Active!</h1>
<p>Tag: v1.0.0</p>
```

---

# 📦 Docker Hub Repository

jatinpatter0702/cloud-native-app

---

# 👨‍💻 Author

**Jatin Patter**

- GitHub: jatinpatter
- Docker Hub: jatinpatter0702

---

# ⭐ If you found this project helpful, don't forget to star the repository!
