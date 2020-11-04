package com.ust.employeeapp.services;


import java.util.ArrayList;
import java.util.List;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Repository;


import com.ust.employeeapp.entities.Product;


@Repository
public class EmployeeRepository {
	
	List<Product> employees = new ArrayList<>();


	@PostConstruct
	public void init(){

	}

	public List<Product> findAllEmployees() {
		return employees;
	}

	public int addEmployee(Product input) {
		this.employees.add(input);
		System.out.println(employees.size());
		return this.employees.size();
		
	}

	/*
	 * public boolean findById(String category) { return this.employees.stream()
	 * .anyMatch((e)->e.category == category); }
	 */
	

}

