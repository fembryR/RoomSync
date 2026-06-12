import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Observable } from 'rxjs';

import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss'
})
export class TasksComponent implements OnInit {

  titulo = '';
  fechaLimite = '';

  tasks$!: Observable<Task[]>;

  constructor(
    private taskService: TaskService,
    private location: Location
  ) {}

  ngOnInit(): void {

    this.tasks$ =
      this.taskService.getTasks();
  }

  async saveTask() {

    await this.taskService.addTask({
      titulo: this.titulo,
      creadoPor: 'Roomie',
      fechaLimite: this.fechaLimite,
      completada: false
    });

    this.titulo = '';
    this.fechaLimite = '';
  }

  goBack() {
    this.location.back();
  }

  async completeTask(id: string) {

    await this.taskService.completeTask(id);
  }

}