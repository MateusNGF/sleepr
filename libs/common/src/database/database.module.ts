import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigService as NestConfigService } from '@nestjs/config';
import { ConfigModule } from '../config'

@Module({
    imports: [
        MongooseModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: NestConfigService) => ({
                uri: configService.getOrThrow<string>('MONGO_URI'),
            }),
            inject: [NestConfigService],
        })],
})
export class DatabaseModule { }
