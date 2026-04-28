import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
}
