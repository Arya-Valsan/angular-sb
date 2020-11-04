import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Todo } from '../Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css']
})
export class ViewTodosComponent implements OnInit {

  todos: Array<Todo>= []
  today:Date =  new Date();
  stringArray: Array<string> = ['JAN', 'Feb', 'March']
  durationInSeconds = 10;

  constructor(private todoService: TodoService, private _snackBar: MatSnackBar) { }

  openSnackBar() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  addTodo(text: string){
    this.todoService.addTodo({text, done:false});
    //Snackbar component
    this.openSnackBar();

    
    // .subscribe((res: any)=> {
    //       console.log(res);

    // })
  }

  ngOnInit(): void {

    //Component code 


    // Service call
    this.todoService.fetchAllTodos()
    .then((res: Array<Todo>)=> {
      console.log('In promises ', res);
        this.todos = res;
    })
    // .subscribe((res: Array<Todo>)=> {
    //   console.log('In subscribe ', res);
    //     this.todos = res;

    // })
  
  }

}



@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class PizzaPartyComponent {}
