import { Kafka } from "kafkajs";
import { randomUUID } from "node:crypto";

async function bootstrap() {
    const kafka = new Kafka({
        brokers: ['strong-guppy-7812-us1-kafka.upstash.io:9092'],
        sasl: {
            mechanism: 'scram-sha-256',
            username: 'c3Ryb25nLWd1cHB5LTc4MTIkIuYdmWovavrPFZeP3frKrA8lwKo5TWDTf_ztqt8',
            password: 'UMY5ZGTXl1ILEQXinftCKITk_H_dQGXgmIZ9XGJv_3vTuuwpPhUUoODTYVdkPHEZ8QYwEA==',
        },
        ssl: true,
    })

    const producer = kafka.producer()

    await producer.connect()

    await producer.send({
        topic:'notifications.send-notification',
        messages: [
            {
                value: JSON.stringify({
                    content: 'Nova solicitação de amizade!',
                    category: 'social',
                    recipientId: randomUUID()
                })
            },
        ]
    })

    await producer.disconnect();
}

bootstrap();