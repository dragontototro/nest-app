import { Controller, Get, Post, Put, Param, Body, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { CreateTodoDto } from '../dtos/create-todo.dto';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get()
  findAll() {
    return this.todosService.findAll();
  }
  @Get(':id')
  findOne(@Param() params) {
      return this.todosService.findOne(params.id);
  }
  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todosService.create(createTodoDto);
  }
  @Put(':id')
  update(@Param() params, @Body() createTodoDto: CreateTodoDto) {
    return this.todosService.update(params.id, createTodoDto);
  }
  @Delete(':id')
  remove(@Param() params) {
      return this.todosService.remove(params.id);
  }
}
