import {Request} from "express";
import {Injectable} from "@nestjs/common";

@Injectable()
export class AuthService {
    validateToken(req: Request): boolean {
        let headers = req.headers;
        let auth_header = headers['authorization'];

        return false;
    }
}