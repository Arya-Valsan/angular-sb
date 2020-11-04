import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from './Employee';


@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  // employees : Array<Employee> = [
  //   {id: 234, name:'Ravi', salary: 34343.33},
  //   {id: 4, name:'Priya', salary: 44343.33},
  //   {id: 34, name:'Samaira', salary: 24343.33}
  // ]

  searchEmployee(id: number){
    console.log(id);
    this.router.navigate(['details', id]);

  }

  deleteEmployee(index: number){
   // this.employeeService.employees.splice(index, 1)

   // AJAX Http delete

  //  this.httpClient.delete('http://localhost:3000/employees/' + index)
  this.employeeService.deleteEmployee(index)
   .subscribe(res => console.log(res))

  }

  constructor(public employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {

    //Right place for http calls on component load
    // this.httpClient.get('http://localhost:4200/assets/employees_dummy.json')
    // this.httpClient.get('https://jsonplaceholder.typicode.com/users')    
    // this.httpClient.get('http://localhost:3000/employees')  
    this.employeeService.fetchAllEmployees()
    .subscribe((res:any)=>
      {
        console.log(res)
        this.employeeService.employees = res;

      })
  }

}
