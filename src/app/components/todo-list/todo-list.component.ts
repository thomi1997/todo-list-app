import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { TodoDetailsComponent } from "../todo-details/todo-details.component";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {


  todos?: Todos[];
  currentChangeTodo?: Todos;
  currentIndex = -1;

  constructor(private ts: TodoService, public dialog: MatDialog, private td: TodoDetailsComponent) { }


  ngOnInit(): void {
    this.retrieveTodos();
  }


  retrieveTodos(): void {
    this.ts.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.todos = data;
    });
  }


  deleteTodo(todo: any): void {
    this.ts.delete(todo.id);
  }


  openDialog(todo: any, i: number) {
    this.dialog.open(TodoDetailsComponent);
    this.td.setActiveTodo(todo, i);
  }
}
