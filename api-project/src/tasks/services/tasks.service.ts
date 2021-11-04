import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../entities/task.entity';

@Injectable()
export class TasksService {

    constructor(@InjectRepository(Task) private taskRepo: Repository<Task>){}

    findAll() {
        return this.taskRepo.find();
    }

    findOne(id: number) {
        return this.taskRepo.findOne(id);
    }

    create(body : any) {
        //const newTask = new Task();
        //newTask.name = body.name;
        const newTask = this.taskRepo.create(body); //ayuda para hacer match entre lo que viene llegando y la entity
        return this.taskRepo.save(newTask);
    }

    async update(id: number, body: any) {
        const task = await this.taskRepo.findOne(id);
        this.taskRepo.merge(task, body); // ayuda para hacer match entre lo que viene llegando y la entidad reemplazando solo los valores nuevos que son recibidos
        return this.taskRepo.save(task);

    }

    async delete(id: number) {
        await this.taskRepo.delete(id);
        return true;
    }

}
