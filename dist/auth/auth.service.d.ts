import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    validateUserByEmailAndPassword(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        name: string;
        email: string;
        password: string;
        id: string;
        createdAt: Date;
    }>;
    validateUser(username: string, pass: string): Promise<any>;
}
