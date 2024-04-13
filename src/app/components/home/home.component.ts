import { Component, OnInit } from '@angular/core';
import { TasksService, Task } from '../../services/tasks.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  taskId: any;
  task: any;
  editingTask: Task | null = null;

  constructor(public tasksService: TasksService, public router: Router) { }

  ngOnInit(): void { }

  deleteTask(i: number) {
    this.tasksService.deleteTask(i);
  }

  goToDestination() {
    this.router.navigate(['/add-task']);
  }

  
  editTask(task: Task) {
    this.editingTask = task; 
  }

  
  saveEditedTask(title: string, description: string, dueDate: string) {
    if (this.editingTask) {
      
      this.editingTask.title = title;
      this.editingTask.description = description;
      this.editingTask.dueDate = new Date(dueDate);

      this.editingTask = null; 
    }
  }

  
  cancelEdit() {
    this.editingTask = null;
  }
  toggleTaskCompletion(index: number) {
    const task = this.tasksService.tasks[index];
    task.completed = !task.completed; 
  }
}
