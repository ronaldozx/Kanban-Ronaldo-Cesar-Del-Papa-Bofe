import { ColumnService } from './column.service';
export declare class ColumnController {
    private readonly columnService;
    constructor(columnService: ColumnService);
    findAll(): Promise<import("./column.entity").KanbanColumn[]>;
    create(body: {
        title: string;
    }): Promise<import("./column.entity").KanbanColumn>;
}
