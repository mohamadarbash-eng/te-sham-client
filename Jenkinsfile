node {
        withEnv(["PATH+MAVEN=${tool name: 'NodeJS 12.6.0', type: 'jenkins.plugins.nodejs.tools.NodeJSInstallation'}/bin"]) {
    stage('Install Packages') {
        sh 'npm install'
    }

        stage('Run Tests') {
         sh "npm run test_ci"
        }
        stage('Create Build Artifacts') {
            sh 'npm run build'
        }
      }
}
