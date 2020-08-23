import { Todo } from './../models/Todo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todoURL : string = `https://jsonplaceholder.typicode.com/todos`;
  constructor(private http : HttpClient) { }

  //GET DATA
  getToDoList() : Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.todoURL}?_limit=5`);
  }

  //TOGGLE
  toggleSucess(itemTodo: Todo) : Observable<any> {
    const url = `${this.todoURL}/${itemTodo.id}`;
    return this.http.put(url, itemTodo, httpOptions);
  }

  //DELETE
  deleteToDoItem(value : Todo) : Observable<Todo>{
    const delUrl = `${this.todoURL}/${value.id}`;
    return this.http.delete<Todo>(delUrl, httpOptions);
  } 

  //AddPost
  addToDo(value:Todo) : Observable<Todo> {
    return this.http.post<any>(this.todoURL,value,httpOptions);
  }
}
