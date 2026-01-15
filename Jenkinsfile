pipeline {
    agent any

    environment {
        APP_NAME = "todo-backend"
        BUILD_ID = "dontKillMe"
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
                  pm2 delete todo-backend || true
                  pm2 start dist/main.js \
                    --name todo-backend \
                    --cwd "$WORKSPACE"
                '''
            }
        }
    }
}

