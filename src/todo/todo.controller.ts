import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private service: TodoService) {}

  @Post()
  create(@Body('title') title: string) {
    return this.service.create(title);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}

