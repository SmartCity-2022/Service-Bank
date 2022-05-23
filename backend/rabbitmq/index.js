let amqp = require('amqplib');

require('dotenv').config()

const connection = amqp.connect(process.env.RABBITMQ_URL, (error0, connection) => {
  if (error0) throw error0;
  return connection;
});

function getConnection() {
  return connection
}

async function listen(queueName, routingKey, callback){

    try {

        const connection = await getConnection()
        const channel = await connection.createChannel()

        await channel.assertExchange(process.env.EXCHANGE, "topic", {durable: true})

        const queue = await channel.assertQueue("Bank", {durable: true, exclusive: true})
        await channel.bindQueue(queue.queue, process.env.EXCHANGE, routingKey)

        await channel.consume(queue.queue, (message) => {
            callback(message.content.toString())
        })
    }
    catch(error){
        console.log(error)
    }
}

module.exports = {getConnection, receive}
