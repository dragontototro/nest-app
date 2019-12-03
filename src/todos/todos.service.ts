import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../entities/todo.entity';
import { CreateTodoDto } from '../dtos/create-todo.dto'

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }
  findOne(id:string): Promise<Todo> {
      return this.todoRepository.findOne(id);
  }
  create(payload: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepository.create({
      title: payload.title,
      description: payload.description,
    });
    return this.todoRepository.save(todo);
  }
  async update(id:string, payload:CreateTodoDto): Promise<Todo> {
    const todo = await this.todoRepository.findOne(id);
    todo.title = payload.title;
    todo.description = payload.description;
    return this.todoRepository.save(todo);
  }
  async remove(id: string): Promise<Todo> {
      const todo = await this.todoRepository.findOne(id);
      return this.todoRepository.remove(todo);
  }
}
