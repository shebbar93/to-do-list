import { TodoService } from './../../services/todo.service';
import { Todo } from './../../models/Todo';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-to-do-items',
  templateUrl: './to-do-items.component.html',
  styleUrls: ['./to-do-items.component.css']
})

export class ToDoItemsComponent implements OnInit {
  @Input() xyz : Todo;
  @Output() deleteToDo : EventEmitter<Todo> = new EventEmitter();

  constructor( private ts:TodoService ) { }

  ngOnInit(): void {
  }

  //Set Classes
  setClasses(){
    let classes = {
      todo : true,
      'is-complete' : this.xyz.completed
    }
    return classes;
  }

  //toggle
  toggle(item){
    item.completed = !item.completed;
    
    //Toggle Completed
    this.ts.toggleSucess(item).subscribe( result => {
      console.log(result);
    })

  }
  
  delete(item){
    this.deleteToDo.emit(item);
  }
}
