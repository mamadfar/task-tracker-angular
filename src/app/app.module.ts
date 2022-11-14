import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

import {AppComponent} from './app.component';
import {HeaderComponent} from './components/common/header/header.component';
import {ButtonComponent} from './components/button/button.component';
import {TasksComponent} from './components/tasks/tasks.component';
import {TaskItemComponent} from './components/tasks/task-item/task-item.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AddTaskComponent} from './components/tasks/add-task/add-task.component';
import {AboutComponent} from './components/about/about.component';
import { FooterComponent } from './components/common/footer/footer.component';

const appRouter: Routes = [
  {
    path: "",
    component: TasksComponent
  },
  {
    path: "about",
    component: AboutComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
