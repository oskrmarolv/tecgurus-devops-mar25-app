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
      }
    }
 
  }

  post {

    success {
        githubNotify context: 'CI Build', status: 'SUCCESS', description: 'Pruebas fueron exitosas.'
    }
    failure {
        githubNotify context: 'CI Build', status: 'FAILURE', description: 'Pruebas han fallado.'
    }

    always {
      sh 'echo "Finalizando proceso!!"'
    }

  }

}