# Glance (Automatic Shelf Recognition System)

Glance is the Automatic Shelf Recognition System, It is developed as to submitted as a senior project II which is a course in bachelor degree of Computer Science of Vincent Mary School of Science and Technology, Assumption University.
The academic report submitted to the committee members was available in the following link below

[Glance CS4200 Final Report](https://assumptionuniversity-my.sharepoint.com/:b:/g/personal/u6013732_au_edu/EZayC-gq_ohEjRukGuRUThQBIqh-5ogo8CBa3qwotHCXyg?e=M7E8AD) 


In this repo contains the source code for Glance portal which is the web application for revealing the share of shelf information / share of shelf report.

## Glance System Architecture

Glance was design to be consists of four main compnents such as API service (controller unit), Computational Service (Image recognition)(Flask API), Glance Portal (web application) ,and Database and Blob Storage. The flow of the mentoined components are as in the figure below

![Glance System Architecture](https://github.com/gridK/glance-portal/blob/main/public/img/System_Architecture_glance.png)

## Glance Portal 

In the Glance Portal, there are two main features available. First, the share of shelf by manufacturers, it will query out all the SKUs on the shelf detected and display as a summarize for each manufacturer. On the other hand, Glance's second feature is to reveal the SKUs detected by the auditing.
Which available as a live demo in the hosted url below

[Glance Portal](https://glance-portal.web.app/)

** Noted that the web adress below in run connected with database and storage but without computational service, so in the report (in pdf) preview the detected images will not appear.

## Available Scripts
In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
