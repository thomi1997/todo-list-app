import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Todos } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';


@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit { 


  @Input() todos?: Todos;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();


  currentIndex = -1;
  message: string = '';

  currentChangeTodo: Todos = {
    title: '',
    description: '',
    date: '',
    published: false
  };


  constructor(private ts: TodoService) {
    
  }


  ngOnInit(): void {
    this.message = '';
  }


  ngOnChanges(): void {
    this.message = '';
    this.currentChangeTodo = { ...this.todos };
  }


  setActiveTodo(todo: Todos, index: number): void {
    this.currentChangeTodo = todo;
    this.currentIndex = index;
    console.log(this.currentChangeTodo);
  }


  updateTodo(): void {
    const data = {
      title: this.currentChangeTodo.title,
      description: this.currentChangeTodo.description,
      date: this.currentChangeTodo.date
    };
    console.log(data);
    

    if (this.currentChangeTodo.id) {
      this.ts.update(this.currentChangeTodo.id, data)
        .then(() => this.message = 'The tutorial was updated successfully!')
        .catch(err => console.log(err));
    }
  }
}
