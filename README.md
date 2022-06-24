![GitHub tag (latest SemVer)](https://shields.herrvergesslich.de/github/v/tag/smartcity-2022/service-bank?label=Version)
# Service-Bank
Ein Banken Microservice für die Nutzer der SmartCity-Webseite. 
Dieser Mircoservice bietet die Dienstleistungen einer Bank an, wie die Eröffnung und Verwaltung von Konten, die möglichkeit Geld an andere Konten zu senden und Geld zu empfangen, ein Karte zu beantragen um bargeldlos zu zahlen.

## Installation

### **Backend**<br>
Folgende Umgebungsvariablen müssen in der Datei `backend/.env` gesetzt werden<br>

* `DATABASE_URL`: MySQL Adresse im Format  'mysql://`username`:`password`@`adress`:`port`/`database`<br>
Beispiel: `mysql://root:root@localhost:3306/bank`

* `API_URL`: API Basis Mapping<br>
Beispiel: `http://localhost:`

* `API_PORT`: API Port<br>
Beispiel: `8080`

* `RABBITMQ_URL`: Adresse des RabbitMQ Servers<br>
Beispiel: `amqp://127.0.0.1:5672`

* `RABBITMQ_EXCHANGE`: RabbitMQ Exchange Name<br>
Beispiel: `exchange`

* `MAINHUB_URL`: URL des MainHub's

Folgende Befehle müssen im Ordner `backend` ausgeführt werden um das Backend zu Installieren und zu Starten<br>
* `npm install`
* `node app.js`


#### **Frontend**<br>
Folgende Umgebungsvariablen müssen in der Datei `frontend/smartcity_bank/.env` gesetzt werden<br>
* `REACT_APP_API_URL`: Adresse des Backends<br>
Beispiel: `http://localhost:3000/api`

Folgende Befehle müssen im Ordner `frontend/smartcity_bank` ausgeführt werden um das Frontend zu Installieren und zu Starten<br>
* `npm install`
* `npm start`
