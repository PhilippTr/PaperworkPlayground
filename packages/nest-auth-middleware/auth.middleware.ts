import {Injectable, NestMiddleware} from "@nestjs/common";
import { Request, Response, NextFunction } from 'express';
import {AuthService} from "./auth.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {

    constructor(
        private readonly authService: AuthService
    ) { }

    use(req: Request, res: Response, next: NextFunction) {
        let valid = this.authService.validateToken(req);

        if (!valid) {
            res.json({
                status: 401,
                message: "Unauthorized"
            });
            return;
        }

        next();
    }
}