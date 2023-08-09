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
const task_service_1 = require("./task.service");
let TaskController = exports.TaskController = class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    getAllTasks() {
        const tasks = this.taskService.getAllTasks();
        return { tasks };
    }
    createTask(title, desc) {
        this.taskService.createTask(title, desc);
        const tasks = this.taskService.getAllTasks();
        return { tasks };
    }
    getTaskById(id) {
        return this.taskService.getTaskById(id);
    }
    updateTask(id, completed, editDescription) {
        if (!completed) {
            completed = this.taskService.getTaskById(id).completed;
        }
        if (!editDescription) {
            editDescription = this.taskService.getTaskById(id).description;
        }
        this.taskService.updateTask(id, completed, editDescription);
        const tasks = this.taskService.getAllTasks();
        return { tasks };
    }
    deleteTask(id) {
        this.taskService.deleteTask(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('tasks'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], TaskController.prototype, "getAllTasks", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Render)('tasks'),
    __param(0, (0, common_1.Body)('title')),
    __param(1, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], TaskController.prototype, "createTask", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], TaskController.prototype, "getTaskById", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, common_1.Render)('tasks'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('completed')),
    __param(2, (0, common_1.Body)('editDescription')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Boolean, String]),
    __metadata("design:returntype", Object)
], TaskController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TaskController.prototype, "deleteTask", null);
exports.TaskController = TaskController = __decorate([
    (0, common_1.Controller)('tasks'),
    __metadata("design:paramtypes", [task_service_1.TaskService])
], TaskController);
//# sourceMappingURL=task.controller.js.map