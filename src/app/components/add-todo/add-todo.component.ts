import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent implements OnInit {

  titleValue: string = '';
  todos: Todos = new Todos();
  submitted = false;


  constructor(private ts: TodoService, private _router: Router) { }


  ngOnInit(): void {
    
  }


  saveTodo(): void {
    this.ts.create(this.todos).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
    this.titleValue = '';
    this._router.navigate(['list']);
  }


  newTutorial(): void {
    this.submitted = false;
    this.todos = new Todos();
  }
}
