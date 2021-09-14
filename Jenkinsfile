node{
    
    properties([[$class: 'BuildDiscarderProperty', strategy: [$class: 'LogRotator', artifactDaysToKeepStr: '', artifactNumToKeepStr: '', daysToKeepStr: '', numToKeepStr: '2']]])
    
    stage("Git Clone"){
     
     git branch: 'development', credentialsId: '46cdb7f0-1c73-46f2-8fff-8cead102cff1', url: 'https://github.com/manju2052/int-node.git'
     
    }
    
    stage("Docker Image Build"){
        
        sh "docker build --no-cache -t comtechsayan/int-node-docker-dev ."
        
    }
    
    stage("Docker Login & Push"){
        
        withCredentials([string(credentialsId: 'DockerHubPwd', variable: 'DockerHubPwd')]) {
            
            sh "docker login -u comtechsayan -p ${DockerHubPwd}"
        }
        
        sh "docker push comtechsayan/int-node-docker-dev"
    }

    stage("Remove Local Image"){
        sh "docker rmi -f comtechsayan/int-node-docker-dev"
    }
    
    stage("Run in Docker Swarm Manager"){
        
        sshagent(['Docker_Swarm_Manager_SSH']) {
            
            sh 'scp -o StrictHostKeyChecking=no  docker-compose.yml ubuntu@172.31.35.129:'
            sh 'ssh -o StrictHostKeyChecking=no ubuntu@172.31.35.129 docker stack deploy --prune --compose-file docker-compose.yml nodeappdev'
            sh 'ssh -o StrictHostKeyChecking=no  ubuntu@172.31.35.129 docker rmi -f  $(docker images -a -q) || true'
        }
        
    }
    
}