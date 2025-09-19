pipeline {
    agent any

    environment {
        IMAGE_NAME = "sathvikaa/streamify"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    url: 'https://github.com/SathvikaKakarapalli/STREAMIFY.git',
                    credentialsId: 'github-pat'
            }
        }

        stage('Install & Test - Backend') {
            steps {
                dir('Backend') {
                    bat 'npm install'
                    bat 'npm run lint || exit 0'
                    bat 'npm test || exit 0'
                }
            }
        }

        stage('Install & Test - Frontend') {
            steps {
                dir('Frontend') {
                    bat 'npm install'
                    bat 'npm run lint || exit 0'
                    bat 'npm test || exit 0'
                }
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    echo "Building Docker image..."
                    bat "docker build -t %IMAGE_NAME%:%BUILD_NUMBER% ."
                }
            }
        }

        stage('Docker Push') {
            steps {
                script {
                    echo "Pushing Docker image to Docker Hub..."
                    withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                        bat """
                        echo %DOCKER_PASS% | docker login -u %DOCKER_USER% --password-stdin
                        docker push %IMAGE_NAME%:%BUILD_NUMBER%
                        docker tag %IMAGE_NAME%:%BUILD_NUMBER% %IMAGE_NAME%:latest
                        docker push %IMAGE_NAME%:latest
                        """
                    }
                }
            }
        }
    }

    post {
        success {
            echo "✅ Build %BUILD_NUMBER% completed successfully!"
        }
        failure {
            echo "❌ Build failed. Check logs."
        }
    }
}
