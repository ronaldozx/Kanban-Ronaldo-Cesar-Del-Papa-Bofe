import { Repository } from 'typeorm';
import { Task } from './card.entity';
import { KanbanColumn } from '../column/column.entity';
export declare class TaskService {
    private taskRepository;
    private columnRepository;
    constructor(taskRepository: Repository<Task>, columnRepository: Repository<KanbanColumn>);
    createTask(title: string, columnId: number): Promise<Task>;
    updateTask(id: number, title: string, columnId: number): Promise<Task>;
    findAll(): Promise<Task[]>;
    findAllByColumn(columnId: number): Promise<Task[]>;
    deleteTask(id: number): Promise<void>;
}
