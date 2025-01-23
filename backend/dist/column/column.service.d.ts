import { Repository } from 'typeorm';
import { KanbanColumn } from './column.entity';
export declare class ColumnService {
    private columnRepository;
    constructor(columnRepository: Repository<KanbanColumn>);
    findAll(): Promise<KanbanColumn[]>;
    create(title: string): Promise<KanbanColumn>;
}
