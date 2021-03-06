
- [Overview](#overview)
- [Total Project Outline - Gantt Chart](#total-project-outline---gantt-chart)
- [System Design](#system-design)
  - [Progression System Outline](#progression-system-outline)
  - [Infrastructure](#infrastructure)
  - [CI/CD Infrastructure](#cicd-infrastructure)



###[To-Do List: Notion..](https://www.notion.so/24aed6a0f02c4f3a87ec2ff7a55de317?v=c0db33f39d684cc19f989c2255bdb131)

## Overview 

This project was initially aimed to establish a structured learning environment for candidates who participate in technical interviews ranging from Algorithms and Data Structures to other disciplines within engineering such as Cloud engineers etc. There are websites that provide the function, but the implementation in these platforms allow the individual to bypass any “hand holding” and go straight to complex problems, there is no structure into their progression.

The question has naturally evolved into “Is a structured learning environment or progression system superior to letting individuals have free roam of the platform”. We can answer this question by using a framework:

- How long has the individual candidate taken to progress from “Easy” labelled questions to “Hard”
- From starting at 0, how long has the individual candidate taken to understand the framework for success within this - platform
- What is the success/failure rate of questions that a candidate performs at
- What is the average length of time a candidate remains on the platform 
- Offering a survey comparing the eGuru platform to others

We can use monitoring tools such as Prometheus to monitor the platform infrastructure to analyse data and metrics for conclusion on our framework, we can then use Grafana to provide an easy to understand dashboard/visualisation based on our data, providing we have built a logging system.


## Total Project Outline - Gantt Chart

Although the time estimation for the project has skewed, It still represents the work to be completed for sucessfull software delivery

![Imgur](documents/images/gantt-chart-overview.png)



## System Design

The complete system design that covers everything that contributes to the application's operational ability, Infrastructure, Progression system and Application design. 

### Progression System Outline

1. The user enters the dashboard immersion
2. The user has to complete the sectioned videos about various algorithms and data structures topic
3. The user is presented with questions relevant to the content they have viewed for e.g If they have not viewed the arrays video, that content will ideally not be shown.
4. When the user submits a question they are allocated points depending on how efficient the solution is


### Infrastructure

The overview of the infrastructure aims to implement the diagram shown below.

An explanation of the flow is as follows:

1. Traffic is routed through the IGW to a VPC that exposes an ENI in a public subnet.
2. The ENI is responsible for providing connectivity to our ECS Fargate tasks (would love to introduce an ALB but unless this application gains popularity there will not be much use)
3. ECS Fargate runs a multi-container setup (client and api) we will have an event from our application invoke our lambda function.
4. The lambda takes our event and pushes that to an async queue to be handled in a FIFO order
5. All our lambda function does is tell our second fargate setup which image we need to pull and then injects the message into the startup of the container - this is how our remote code execution works
6. We then write some metrics to a dynamodb instance and allow fargate to shutdown the unused container automatically


![Imgur](documents/images/RCE.jpg)


### CI/CD Infrastructure

The overview of the CI/CD architecture that will be implemented within this project. 

Note: The CI system has recently changed from Travis CI to github actions.


![Imgur](documents/images/infrastructure-architecture.png)
