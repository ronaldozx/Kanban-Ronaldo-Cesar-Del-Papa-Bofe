import { Repository } from 'typeorm';
import { KanbanColumn } from '../column/column.entity';
export declare class ColumnsService {
    private columnRepository;
    constructor(columnRepository: Repository<KanbanColumn>);
    createColumn(title: string): Promise<KanbanColumn>;
    findAll(): Promise<KanbanColumn[]>;
    findOne(id: number): Promise<KanbanColumn>;
    update(id: number, title: string): Promise<KanbanColumn>;
    delete(id: number): Promise<void>;
}
