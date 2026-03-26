pipeline {
    agent any

    stages {
        stage('Clone Code') {
            steps {
                git 'https://github.com/AtharvSalunke/jenkins-demo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

        stage('Run App') {
            steps {
                bat 'node app.js &timeout /t 10'
            }
        }
    }
}