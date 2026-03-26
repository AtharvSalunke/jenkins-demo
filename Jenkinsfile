pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run App (Test)') {
            steps {
                bat 'node app.js & timeout /t 5'
            }
        }

        stage('Verify App') {
            steps {
                bat 'curl http://localhost:3000'
            }
        }
    }
}