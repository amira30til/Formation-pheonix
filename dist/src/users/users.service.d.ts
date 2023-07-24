import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    getAll(): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    create(user: CreateUserDto): Promise<User>;
    update(id: number, user: UpdateUserDto): Promise<UpdateResult>;
    remove(id: number): Promise<DeleteResult>;
    findOne(username: string): Promise<User | undefined>;
}
