import { ColumnsService } from '../services/columns.service';
import { KanbanColumn } from '../column/column.entity';
export declare class ColumnsController {
    private readonly columnsService;
    constructor(columnsService: ColumnsService);
    findAll(): Promise<KanbanColumn[]>;
    create(body: {
        title: string;
    }): Promise<KanbanColumn>;
    update(id: number, body: {
        title: string;
    }): Promise<KanbanColumn>;
    delete(id: number): Promise<void>;
}
