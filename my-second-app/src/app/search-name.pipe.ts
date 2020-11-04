import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from './view-employees/Employee';

@Pipe({
  name: 'searchName'
})
export class SearchNamePipe implements PipeTransform {

  transform(employees: Array<Employee>, ...args: string[]):  Array<Employee> {
    let filteredEmployees = employees.filter(employee => employee.category.includes(args[0]));
    return filteredEmployees
  }

}
