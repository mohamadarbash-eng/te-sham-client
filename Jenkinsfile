      node('nodeJS') {
        withEnv(["PATH+MAVEN=${tool name: 'NodeJS 12.6.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'}/bin"]) {
  stages {
    stage('Install Packages') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test and Build') {
      parallel {
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
}
}
}
