import { SendNotification } from "@application/use-cases/send-notification";
import { DatabaseModule } from "@infra/database/database.module";
import { Module } from "@nestjs/common";
import { KafkaConsumerService } from '../messaging/kafka/kafka-consumer.service'
import { NotificationsController } from "./kafka/controllers/notifications.controller";

@Module({
    imports:[DatabaseModule],
    providers:[SendNotification, KafkaConsumerService],
    controllers:[NotificationsController]
})
export class MessagingModule {}