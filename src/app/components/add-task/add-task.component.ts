import { Component } from '@angular/core';
import { TasksService } from '../../services/tasks.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  constructor(public tasksService: TasksService, public router:Router){}
  ngOnInit():void{}
saveTask(title:any, description:any, dueDate:any) {
 this.tasksService.saveTask(title.value, description.value, dueDate.value);
 this.router.navigate(['/'])
}
Cancel() {
  this.router.navigate(['/']);
  }

}
