pipeline{
    agent any
    stages{
        stage('Cloning github repository'){
            steps{
                bat 'echo Trying to clone github repository...'
                checkout scm
                bat 'successfully cloned github repository!'
            }
        }
        stage('Install dependencies'){
            steps{
                bat 'echo Installing dependencies...'
                bat 'npm install'
                bat 'echo Dependencies are installed successfully!'
            }
        }
        stage('Executing test automations scripts'){
            steps{
                bat 'echo Executing tests...'
                bat 'npm run alltests'
                bat 'Tests are executed successfully!'
                bat 'Execution results are added to the reports folder!'
            }
        }
    }
}