import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from '../services/tasks.service'; //se importa la clase de servicio donde tenemos la conexion a base de datos

@Controller('api/tasks')
export class TasksController {

    constructor(
        private taskServices: TasksService
    ) {}

    @Get()
    findAll() {
        return this.taskServices.findAll();
    }

    @Get(':id')
    getOne(@Param('id') id: number ) {
        return this.taskServices.findOne(id);
    }

    @Post()
    create(@Body() body: any) {
        return this.taskServices.create(body);
    }

    @Put(':id')
    actualizar(@Body() body: any, @Param('id') id: number) {
        return this.taskServices.update(id, body);
    }

    @Delete(':id')
    eliminar(@Param('id') id: number) {
        return this.taskServices.delete(id);
    }

}
