import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ITask} from "../../../Task.vendor";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<ITask> = new EventEmitter();
  text: string = "";
  day: string = "";
  reminder: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  submitHandler() {
    if (!this.text) {
      alert("Please add a task!");
      return
    }
    const newTask = {
      id: Math.floor(Math.random() * 9999999),
      text: this.text,
      day: this.day,
      reminder: this.reminder
    };
    this.onAddTask.emit(newTask)
    this.text = "";
    this.day = "";
    this.reminder = false;
  }

}
