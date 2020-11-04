package com.ust.employeeapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;


import com.ust.employeeapp.entities.Product;
import com.ust.employeeapp.services.EmployeeService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/products")
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	
	@RequestMapping(path="/{id}", method=RequestMethod.DELETE)
	@ResponseStatus(HttpStatus.NOT_FOUND)
	@ExceptionHandler({EmptyResultDataAccessException.class})
	public ResponseEntity<String> deleteEmployee(@PathVariable("id") int id){
		
		ResponseEntity<String> re = null;
		try{
			employeeService.deleteEmployee(id);
			re = ResponseEntity.ok().body("product has been deleted successfully.");
		}
		catch(EmptyResultDataAccessException e){

		}
		
		return re;
	}
	
	@GetMapping("/")
	public List<Product> fetchAllEmployee(){
		return employeeService.fetchAllEmployees();
	}
	
	@PostMapping("/")
	public ResponseEntity<Void> addEmployee(@RequestBody Product employee){
		
		
		 employeeService.addEmployee(employee);
		 return new ResponseEntity<>(HttpStatus.CREATED);
	}

}
