"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const card_entity_1 = require("./card.entity");
const column_entity_1 = require("../column/column.entity");
let TaskService = class TaskService {
    constructor(taskRepository, columnRepository) {
        this.taskRepository = taskRepository;
        this.columnRepository = columnRepository;
    }
    async createTask(title, columnId) {
        const column = await this.columnRepository.findOne({ where: { id: columnId } });
        if (!column) {
            throw new common_1.HttpException('Column not found', common_1.HttpStatus.NOT_FOUND);
        }
        const task = this.taskRepository.create({
            title,
            column,
        });
        return await this.taskRepository.save(task);
    }
    async updateTask(id, title, columnId) {
        const task = await this.taskRepository.findOne({ where: { id }, relations: ['column'] });
        if (!task) {
            throw new Error(`Task with ID ${id} not found`);
        }
        const column = await this.columnRepository.findOne({ where: { id: columnId } });
        if (!column) {
            throw new common_1.HttpException('Column not found', common_1.HttpStatus.NOT_FOUND);
        }
        task.title = title;
        task.column = column;
        return this.taskRepository.save(task);
    }
    async findAll() {
        return this.taskRepository.find();
    }
    async findAllByColumn(columnId) {
        console.log('Trying to find column with id:', columnId);
        const column = await this.columnRepository.findOne({ where: { id: columnId } });
        if (!column) {
            console.log('Column not found');
            throw new common_1.HttpException('Column not found', common_1.HttpStatus.NOT_FOUND);
        }
        return this.taskRepository.find({ where: { column: column } });
    }
    async deleteTask(id) {
        const task = await this.taskRepository.findOne({ where: { id } });
        if (!task) {
            throw new common_1.HttpException(`Task with ID ${id} not found`, common_1.HttpStatus.NOT_FOUND);
        }
        await this.taskRepository.delete(id);
    }
};
exports.TaskService = TaskService;
__decorate([
    (0, common_1.Delete)(':id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaskService.prototype, "deleteTask", null);
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(card_entity_1.Task)),
    __param(1, (0, typeorm_1.InjectRepository)(column_entity_1.KanbanColumn)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], TaskService);
//# sourceMappingURL=card.service.js.map