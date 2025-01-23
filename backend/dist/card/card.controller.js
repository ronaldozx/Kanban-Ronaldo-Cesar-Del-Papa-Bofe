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
exports.TaskController = void 0;
const common_1 = require("@nestjs/common");
const card_service_1 = require("./card.service");
let TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async create(taskData) {
        try {
            return await this.taskService.createTask(taskData.title, taskData.columnId);
        }
        catch (error) {
            console.error('Error creating task:', error);
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll() {
        try {
            return await this.taskService.findAll();
        }
        catch (error) {
            console.error('Error retrieving tasks:', error);
            throw new common_1.HttpException('Error retrieving tasks', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAllByColumn(columnId) {
        try {
            return await this.taskService.findAllByColumn(columnId);
        }
        catch (error) {
            console.error('Error retrieving tasks for column:', error);
            throw new common_1.HttpException('Error retrieving tasks for column', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async updateTask(id, taskData) {
        try {
            return await this.taskService.updateTask(id, taskData.title, taskData.columnId);
        }
        catch (error) {
            console.error('Error updating task:', error);
            throw new common_1.HttpException(error.message, error.status || common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.TaskController = TaskController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':columnId'),
    __param(0, (0, common_1.Param)('columnId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "findAllByColumn", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateTask", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [card_service_1.TaskService])
], TaskController);
//# sourceMappingURL=card.controller.js.map