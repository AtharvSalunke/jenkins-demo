pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Test Run') {
            steps {
                bat 'node app.js & timeout /t 5'
            }
        }
    }
}