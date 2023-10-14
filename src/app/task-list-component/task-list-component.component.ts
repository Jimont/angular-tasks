import { Component, Input } from '@angular/core';
import { TaskServiceService } from '../services/task-service.service';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-task-list-component',
  templateUrl: './task-list-component.component.html',
  styleUrls: ['./task-list-component.component.css']
})
export class TaskListComponentComponent {


  get taskArray() {
    return this.taskService.tasks;
  }

  constructor(
    private taskService: TaskServiceService
  ) { }

  onDelete(index: number) {
    this.taskService.onDeleteService(index);
  }

  onCheck(index: number) {
    this.taskService.onCheckService(index);
  }

}
