import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {


  constructor(private _router: Router) { }


  ngOnInit(): void {
    
  }


  navTodoList() {
    this._router.navigate(['list']);
  }


  navAddTodo() {
    this._router.navigate(['add']);
  }
}
