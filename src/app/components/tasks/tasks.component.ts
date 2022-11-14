import {Component, OnInit} from '@angular/core';
import {ITask} from "../../Task.vendor";
import {TaskService} from "../../services/task.service";
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  tasks: ITask[] = [];
  showAddTask: boolean;
  subscription: Subscription;

  constructor(private taskService: TaskService, private uiService: UiService) {
    this.subscription = this.uiService.ShowAddTaskTogglerService().subscribe(value => this.showAddTask = value);
  }

  ngOnInit(): void {
    this.taskService.getTasksService().subscribe(res => this.tasks = res);
  }

  deleteTaskHandler(task: ITask) {
    this.taskService.deleteTaskService(task).subscribe(() => this.tasks = this.tasks.filter(t => t.id !== task.id))
  }

  reminderToggleHandler(task: ITask) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  newTaskHandler(newTask: ITask) {
    this.taskService.createNewTask(newTask).subscribe((newT) => this.tasks = [...this.tasks, newT]);
  }

}
