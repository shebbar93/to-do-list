import { Todo } from './../../models/Todo';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})

export class AddToDoComponent implements OnInit {
  constructor() { }

  @Output() sendToDoToList : EventEmitter<any> = new EventEmitter(); 
  title:string;
  ngOnInit(): void {
  }

  submitFunc(){
    const todo = {
      title : this.title,
      completed : false
    }
    this.sendToDoToList.emit(todo);
  }
  
}
