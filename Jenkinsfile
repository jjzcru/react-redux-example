pipeline {
    agent any 

    stages {
        stage('Test'){
            environment { 
                NODE_ENV = 'test'
            }
            steps {
                print "Environment will be : ${env.NODE_ENV}"
                sh 'node -v'
                sh 'npm prune'
                sh 'npm install'
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }
}