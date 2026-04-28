import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  task: Task = { id: 0, titulo: '', descricao: '', status: '', dataCriacao: new Date() };

  constructor(private taskService: TaskService) {}

  salvar() {
    this.taskService.addTask(this.task);
    this.task = { id: 0, titulo: '', descricao: '', status: '', dataCriacao: new Date() };
  }
}
