import { TodoService } from './todo.service';
import { Todo } from './entities/todo.entity';
export declare class TodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    findAll(): Promise<Todo[]>;
    create(todo: Todo): Promise<Todo>;
    update(id: string, todo: Todo): Promise<Todo>;
    remove(id: number): Promise<void>;
}
