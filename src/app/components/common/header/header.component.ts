import {Component, OnInit} from '@angular/core';
import {UiService} from "../../../services/ui.service";
import {Subscription} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task Tracker';
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService, private router: Router) {
    this.subscription = this.uiService.ShowAddTaskTogglerService().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  addTaskHandler() {
this.uiService.ShowAddTaskService()
  }

  urlChecker(route: string) {
    return this.router.url === route
  }

}
