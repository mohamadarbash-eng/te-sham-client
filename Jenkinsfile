pipeline {
  agent any
   tools {nodejs "NodeJS-12.6.0"}
       environment {
           CI = 'true'
          CHROME_BIN = '/var/lib/jenkins/workspace/tesham_app@2/node_modules/puppeteer/.local-chromium/linux-706915/chrome-linux/chrome'
       }
  stages {
    stage('Install') {
      steps {
        sh 'npm install'
      }
    }
        stage('Run   Tests') {
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
