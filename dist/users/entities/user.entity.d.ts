import { Node } from 'to-do-list/src/communs/models/node.model';
export declare class User extends Node {
    name: string;
    email: string;
    password: string;
    checkPassword(password: string): Promise<boolean>;
}
