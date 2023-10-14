import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskServiceService } from '../services/task-service.service';

@Component({
  selector: 'app-task-form-component',
  templateUrl: './task-form-component.component.html',
  styleUrls: ['./task-form-component.component.css']
})
export class TaskFormComponentComponent {

  constructor(
    private taskService: TaskServiceService
  ) { }


  onSubmit(form: NgForm) {
    this.taskService.onSubmitService(form);
  }

}
