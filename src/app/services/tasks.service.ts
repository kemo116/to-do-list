import { Injectable } from '@angular/core';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  
  tasks:Task[]=[
   { title: "Assignment",
    description: "Do it with 6 pages",
    dueDate: new Date('2024-04-15'), 
    completed:false
   },
   { title: "Assignment 2",
    description: "Do it with 12 pages",
    dueDate: new Date('2024-04-30'),
    completed:false
   },

  ]
  constructor() { }
  deleteTask(i: number) {
    this.tasks.splice(i,1);
  }
  saveTask(title:any, description:any,dueDate:any){
    this.tasks.push({
      title,
      description,
      dueDate,
      
    })
  }
}
export { Task };

