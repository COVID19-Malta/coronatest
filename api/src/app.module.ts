import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SubmissionsService } from './submissions/submissions.service';
import { SubmissionsController } from './submissions/submissions.controller';

import configuration from './config/configuration';
import { SequelizeModule } from '@nestjs/sequelize';

import { SessionsModule } from './sessions/sessions.module';
import { AuthModule } from './auth/auth.module';

import Submission from './submissions/submission.model';

@Module({
    imports: [
        SequelizeModule.forFeature([Submission]),
        DatabaseModule,
        ConfigModule.forRoot({
            load: [configuration],
            isGlobal: true
        }),
        SessionsModule,
        AuthModule
    ],
    controllers: [AppController, SubmissionsController],
    providers: [AppService, SubmissionsService]
})
export class AppModule { }
