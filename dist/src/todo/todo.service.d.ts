import { Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
export declare class TodoService {
    private readonly todoRepository;
    constructor(todoRepository: Repository<Todo>);
    findAll(): Promise<Todo[]>;
    create(todo: Todo): Promise<Todo>;
    update(todo: Todo): Promise<Todo>;
    remove(id: number): Promise<void>;
}
