pipeline {
  agent any

  tools {
    nodejs 'nodejs-18.x.x'
  }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/oskrmarolv/tecgurus-devops-mar25-app.git', credentialsId: 'tecgurus_devops_mar25', branch: '$BRANCH_NAME'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'sleep 15;npm test'
      }
    }
  }

  post {
    always {
       sh 'echo "success"'
    }
  }
}
