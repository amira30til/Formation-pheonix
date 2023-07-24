import { DeleteResult, UpdateResult } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    create(user: CreateUserDto): Promise<CreateUserDto>;
    getAll(): Promise<{
        users: import("./entities/user.entity").User[];
    }>;
    findByEmail(email: string): Promise<{
        user: import("./entities/user.entity").User;
    }>;
    update(id: number, user: UpdateUserDto): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
