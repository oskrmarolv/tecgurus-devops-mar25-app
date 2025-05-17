pipeline {

  agent any

  // Precargando herramientas...
  tools {
    nodejs 'nodejs-18.x.x'
  }

  // Definiendo variables de entorno...
  environment {
    DATABASE_HOST = '127.0.0.1'
    GITHUB_TOKEN = credentials('tecgurus-github-admin')
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

    stage('Ejecutando pruebas unitarias') {
      steps {
        sh 'sleep 15'
        sh 'npm run test:ci'
      } 
    }

    stage('Recuperando reporte') {
      steps{
        junit 'tests/reports/junit.xml'

        publishChecks name: 'Jenkins Tests', title: 'Resultado de Test', summary: 'Reporte de pruebas unitarias.'
      }
    }

    stage('Finalizando pruebas unitarias') {
      steps {
        sh 'echo "Finalizando proceso!!"'
      }
    }

 
  }

  post {

    success {
      echo 'Ejecutando exitosa !!'
    }
    failure {
      echo 'Error en pruebas de integracion !!'
    }

  }

}