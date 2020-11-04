import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../view-employees/Employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      let empId = params.get('id');
      // let empName = params.get('name');
      // let filteredList = this.employeeService.employees.filter((emp) => emp.id == empId);
      // this.employee = filteredList[0];
      this.employeeService.fetchEmployee(empId)
      .subscribe((res: Employee)=> {
        console.log(res);
        this.employee = res;

      })
    });
  }

}
