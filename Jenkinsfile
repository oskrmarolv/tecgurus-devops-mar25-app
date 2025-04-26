pipeline {
  agent any

  // Precargando herramientas...
  tool {
    nodejs 'nodejs-18.x.x'
  }

  // Definiendo variables de entorno...
  environment {
    DATABASE_HOST = '127.0.0.1'
  }

  // Definicion de los estados y pasos a ejecutar....
  stages {
    stage('Revision') { 
      steps {
        git url: 'https://github.com/oskrmarolv/tecgurus-devops-mar25-app.git',
        credentialsId: 'tecgurus_devops_mar25',
        branch: '$BRANCH_NAME'
      }
    } 

    stage('Construccion') { 
      steps {
        sh 'sleep 10'
        sh 'npm install'
      }
    } 

    stage('Pruebas') {
      steps {
        sh 'sleep 15'
        sh 'npm test'
      } 
    } 
  }
}