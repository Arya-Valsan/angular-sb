import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './Todo';

@Pipe({
  name: 'searchText'
})
export class SearchTextPipe implements PipeTransform {

  transform(list: Array<Todo>, ...args: string[]): Array<Todo> {
    console.log('Search Text Pipe transform function')
    let firstChar = args[0];
    let filteredList = list.filter(element => element.text.startsWith(firstChar));
    return filteredList;
  }

}
