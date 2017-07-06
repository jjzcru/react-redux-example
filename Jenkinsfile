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
            environment { 
                NODE_ENV = 'production'
            }
            steps {
                print "Environment will be : ${env.NODE_ENV}"
                sh 'npm run build'
            }
        }

        stage('Cleanup') {
            steps {
                print 'Prune and Cleanup'
                sh 'npm prune'
                sh 'rm node_modules -rf'
            }
        }
    }
}