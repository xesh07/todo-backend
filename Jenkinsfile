pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Deploy Application') {
            steps {
                sh 'sudo -u ubuntu /home/ubuntu/update.sh'
            }
        }
    }
}

