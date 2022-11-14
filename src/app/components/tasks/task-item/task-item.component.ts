import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ITask} from "../../../Task.vendor";
import {faTimes} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  faTimes = faTimes;
  @Input() task: ITask | undefined;
  @Output() onDelete = new EventEmitter();
  @Output() onToggleReminder = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  deleteTaskHandler(task: ITask | undefined) {
    this.onDelete.emit(task);
  }
  reminderHandler(task: ITask | undefined) {
    this.onToggleReminder.emit(task);
  }

}
