import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {


  private taskArray = [{ taskName: 'Lavar el carro ', isCompleted: false }];

  constructor() { }

  get tasks() {
    return [...this.taskArray];
  }

  onSubmitService(form: NgForm) {
    this.taskArray.push({
      taskName: form.controls['task'].value,
      isCompleted: false
    })
    form.reset();
  }

  onDeleteService(index: number) {
    this.taskArray.splice(index, 1);
  }

  onCheckService(index: number) {
    this.taskArray[index].isCompleted = !this.taskArray[index].isCompleted;
  }



}
