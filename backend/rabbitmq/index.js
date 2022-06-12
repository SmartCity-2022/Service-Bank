let amqp = require('amqplib');

require('dotenv').config()

const connection = amqp.connect(process.env.RABBITMQ_URL, (error0, connection) => {
  if (error0) throw error0;

  return connection;
});

function getConnection() {
  return connection
}

async function listen(queueName, routingKey, callback) {
  try {
    const connection = await getConnection()
    const channel = await connection.createChannel()

    await channel.assertExchange(process.env.RABBITMQ_EXCHANGE, "topic", {durable: true})

    const queue = await channel.assertQueue(queueName, {durable: true, exclusive: false, autoDelete: true})

    await channel.bindQueue(queue.queue, process.env.RABBITMQ_EXCHANGE, routingKey)

    await channel.consume(queue.queue, (message) => {
      console.log("[RabbitMQ] consumed '" + message.content.toString() + "' from '" + message.fields.routingKey + "'")
      callback(message.content.toString())
      channel.ack(message)
    })
  }
  catch(error) {
    console.log(error)
  }
}

async function publish(routingKey, payload) {
  try {
    const connection = await getConnection()
    const channel = await connection.createChannel()
  
    await channel.assertExchange(process.env.RABBITMQ_EXCHANGE, "topic", {durable: true})
    
    channel.publish(process.env.RABBITMQ_EXCHANGE, routingKey, Buffer.from(payload))
    console.log("[RabbitMQ] published '" + payload + "' at '" + routingKey + "'")
  }
  catch(error) {
    console.log(error)
  }
}

module.exports = {getConnection, listen, publish}