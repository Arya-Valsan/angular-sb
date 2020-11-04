import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './Todo';

const baseUrl: string =  'http://localhost:3000/todos';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private httpClient: HttpClient) { }

  addTodo(todo: Todo){
    console.log(todo)
    //http communication change to localStorage
    // return this.httpClient.post(baseUrl, todo)
    let todoArray = JSON.parse(localStorage.getItem('mytodo')) || []
    todoArray.push(todo)
    localStorage.setItem('mytodo', JSON.stringify(todoArray));
  }

  fetchAllTodos(){
    return this.httpClient.get(baseUrl).toPromise();
   
    //create our own observable

    // let observable= Observable.create(observer => {
    //   let todoArray = JSON.parse(localStorage.getItem('mytodo')) || []
    //     observer.next(todoArray);
    //     console.log("am done");
    //     observer.complete(); // to show we are done with our processing
     
    // });
    // return observable;
  }


  // delete(index){
  //   let todoArray = JSON.parse(localStorage.getItem('mytodo')) || []
  //   // todoArray.push(todo)
  //   todoArray.splice(index, 1);
  //   localStorage.setItem('mytodo', JSON.stringify(todoArray));
  // }

}
