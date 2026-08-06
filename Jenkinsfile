
pipeline {
    agent any

    environment {
        DOCKER_USER = 'jatinpatter0702'
        IMAGE_NAME  = 'cloud-native-app'
        SHORT_SHA   = ''
    }

    stages {
        stage('Checkout & Setup') {
            steps {
                script {
                    SHORT_SHA = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
                    echo "Extracted Git SHA: ${SHORT_SHA}"
                }
            }
        }

        stage('Unit Testing') {
            steps {
                sh 'npm ci'
                sh 'npm test'
            }
        }

        stage('Build & Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'docker-hub-credentials', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh "docker build -t ${DOCKER_USER}/${IMAGE_NAME}:${SHORT_SHA} ."
                    sh "echo \$PASS | docker login -u \$USER --password-stdin"
                    sh "docker push ${DOCKER_USER}/${IMAGE_NAME}:${SHORT_SHA}"
                }
            }
        }

        stage('Deploy to Kubernetes (CLI)') {
            steps {
                withCredentials([file(credentialsId: 'kubeconfig-file', variable: 'KUBECONFIG')]) {
                    sh "sed -i 's|DOCKER_USER|${DOCKER_USER}|g' k8s/deployment.yaml"
                    sh "sed -i 's|TAG_PLACEHOLDER|${SHORT_SHA}|g' k8s/deployment.yaml"
                    sh "kubectl --kubeconfig=\${KUBECONFIG} apply -f k8s/deployment.yaml"
                    sh "kubectl --kubeconfig=\${KUBECONFIG} apply -f k8s/service.yaml"
                    sh "kubectl --kubeconfig=\${KUBECONFIG} rollout status deployment/cloud-native-app --timeout=60s"
                }
            }
        }
    }

    post {
        success {
            echo "Successfully deployed version ${SHORT_SHA} to Kubernetes!"
        }
        failure {
            echo "Pipeline build failed!"
        }
    }
}
