import { Injectable, OnModuleDestroy } from '@nestjs/common'
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['strong-guppy-7812-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'c3Ryb25nLWd1cHB5LTc4MTIkIuYdmWovavrPFZeP3frKrA8lwKo5TWDTf_ztqt8',
                    password: 'UMY5ZGTXl1ILEQXinftCKITk_H_dQGXgmIZ9XGJv_3vTuuwpPhUUoODTYVdkPHEZ8QYwEA==',
                },
                ssl: true,
            }
        })
    }
    
    async onModuleDestroy() {
        await this.close();
    }
}