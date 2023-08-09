// /* eslint-disable prettier/prettier */
// import {
//   Body,
//   Controller,
//   Delete,
//   Get,
//   Param,
//   Post,
//   Put,
//   Render
// } from '@nestjs/common';
// import { Task } from './task.model';
// import { TaskService } from './task.service';

// @Controller('tasks')
// export class TaskController {
//   constructor(private readonly taskService: TaskService) {}

//   // @Get()
//   // getAllTasks(): Task[] {
//   //   return this.taskService.getAllTasks();
//   // }

//   @Get()
//   @Render('tasks')
//   getAllTasks(): { tasks: Task[] } {
//       const tasks = this.taskService.getAllTasks();
//       return { tasks };
//   }

//   @Post()
//   createTask(
//     @Body('title') title: string,
//     @Body('description') desc: string,
//     ): Task {
//     return this.taskService.createTask(title,desc);
//   }

//   @Get(':id')
//   getTaskById(@Param('id') id: string): Task {
//     return this.taskService.getTaskById(id);
//   }

//   @Put(':id')
//   updateTask(
//     @Param('id') id: string,
//     @Body('completed') completed: boolean,
//     @Body('description') desc: string,
//   ): Task {
//     if(!completed) completed = this.taskService.getTaskById(id).completed;
//     if(!desc) desc = this.taskService.getTaskById(id).description;
//     return this.taskService.updateTask(id, completed,desc);
//   }

//   @Delete(':id')
//   deleteTask(@Param('id') id: string): void {
//     this.taskService.deleteTask(id);
//   }
// }


/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  Render,
} from '@nestjs/common';
import { Task } from './task.model';
import { TaskService } from './task.service';

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  @Render('tasks') // Render the view that displays all tasks
  getAllTasks(): { tasks: Task[] } {
    const tasks = this.taskService.getAllTasks();
    return { tasks };
  }

  @Post()
  @Render('tasks') // Render the view that displays all tasks
  createTask(
    @Body('title') title: string,
    @Body('description') desc: string,
  ): { tasks: Task[] } {
    this.taskService.createTask(title, desc);
    const tasks = this.taskService.getAllTasks();
    return { tasks };
  }

    @Get(':id')
  getTaskById(@Param('id') id: string): Task {
    return this.taskService.getTaskById(id);
  }

  // @Put(':id')
  // @Render('tasks')
  // updateTask(
  //   @Param('id') id: string,
  //   @Body('completed') completed: boolean,
  //   @Body('description') desc: string,
  // ): Task {
  //   if(!completed) completed = this.taskService.getTaskById(id).completed;
  //   if(!desc) desc = this.taskService.getTaskById(id).description;
  //   return this.taskService.updateTask(id, completed,desc);
  // }

  @Put(':id')
  @Render('tasks')
  updateTask(
    @Param('id') id: string,
    @Body('completed') completed: boolean,
    @Body('editDescription') editDescription: string,
  ): { tasks: Task[] } {
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

  @Delete(':id')
  deleteTask(@Param('id') id: string): void {
    this.taskService.deleteTask(id);
  }
}

  // ... Other methods ...

