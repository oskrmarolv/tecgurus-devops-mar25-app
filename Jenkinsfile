pipeline {
  agent any

  tools {
    nodejs 'nodejs-18.x.x'
  }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/oskrmarolv/tecgurus-devops-mar25-app.git', credentialsId: 'tecgurus_devops_mar25'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
    }
  }

  post {
    always {
       sh 'echo "success"'
    }
  }
}
