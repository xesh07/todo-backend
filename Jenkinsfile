pipeline {
    agent any

    environment {
        APP_NAME = "todo-backend"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build App') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Start / Restart App') {
            steps {
                sh '''
                  pm2 delete ${APP_NAME} || true
                  pm2 start dist/main.js --name ${APP_NAME}
                '''
            }
        }
    }
}

