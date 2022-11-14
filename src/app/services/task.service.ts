import {Injectable} from '@angular/core';
import {ITask} from "../Task.vendor";
// import {TASKS} from "../mock-tasks";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "Application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private TasksApi = "http://localhost:5000/tasks"

  constructor(private http: HttpClient) {
  }

  getTasksService(): Observable<ITask[]> {
    return this.http.get<ITask[]>(this.TasksApi);
  }

  deleteTaskService(task: ITask): Observable<ITask> {
    const deleteUrl = `${this.TasksApi}/${task.id}`
    return this.http.delete<ITask>(deleteUrl);
  }

  updateTaskReminder(task: ITask): Observable<ITask> {
    const updateUrl = `${this.TasksApi}/${task.id}`
    return this.http.patch<ITask>(updateUrl, {reminder: task.reminder}, httpOptions);
    // return this.http.put<ITask>(updateUrl, task, httpOptions);
  };

  createNewTask(newTask: ITask): Observable<ITask> {
    return this.http.post<ITask>(this.TasksApi, newTask, httpOptions);
  }

}
