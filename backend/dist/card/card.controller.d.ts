import { TaskService } from './card.service';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(taskData: {
        title: string;
        columnId: number;
    }): Promise<import("./card.entity").Task>;
    findAll(): Promise<import("./card.entity").Task[]>;
    findAllByColumn(columnId: number): Promise<import("./card.entity").Task[]>;
    updateTask(id: number, taskData: {
        title: string;
        columnId: number;
    }): Promise<import("./card.entity").Task>;
}
