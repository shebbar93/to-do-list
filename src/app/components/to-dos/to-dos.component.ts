import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todos: Todo[];
  constructor(private ts: TodoService ) { }

  ngOnInit(): void {
    this.ts.getToDoList().subscribe( result => {
      this.todos = result;
    });
  }

  deleteToDoInMainComponent(value:Todo): void {
    //Remove from UI
    this.todos = this.todos.filter( t => t.id != value.id);

    //Remove from Server
    this.ts.deleteToDoItem(value).subscribe();
  }

  addNewToDoList(value : Todo): void{
    this.ts.addToDo(value).subscribe(result => {
      this.todos.push(result);
    })

  }
}
