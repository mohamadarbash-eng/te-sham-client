pipeline {
  agent any
   tools {nodejs "NodeJS-12.6.0"}
       environment {
           CI = 'true'
       }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
        stage('Run Tests') {
          steps {
            sh 'npm run test'
          }
        }
        stage('Create Build Artifacts') {
          steps {
            sh 'npm run build'
          }
    }
}
}
