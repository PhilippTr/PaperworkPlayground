import { Module } from '@nestjs/common';
import {AuthMiddleware} from "./auth.middleware";
import {AuthService} from "./auth.service";

@Module({
    providers: [
        AuthService,
        AuthMiddleware
    ],
    exports: [
        AuthMiddleware
    ]
})
export class AuthModule {}