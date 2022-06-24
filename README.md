![GitHub tag (latest SemVer)](https://shields.herrvergesslich.de/github/v/tag/smartcity-2022/service-bank?label=Version)
# Service-Bank
Microservice Bank

### Umgebungsvariablen

**Backend**

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

**Frontend**

* `REACT_APP_API_URL`: Adresse des Backends<br>
Beispiel: `http://localhost:3000/api`
