package com.ust.employeeapp.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.ust.employeeapp.entities.Product;





@Service
public class EmployeeService {
	@Autowired

	ProductJpaRepo employeeRepository;

	public List<Product> fetchAllEmployees() {
		
		return employeeRepository.findAll();
		
	}

	public void addEmployee(Product input) {

		
		 employeeRepository.save(input);
	}

	/*
	 * public Product findEmployeeById(String category) { Optional<Product> emp =
	 * employeeRepository.findById(category); if(emp.isPresent()) { return
	 * emp.get(); } return null; }
	 */

	public void deleteEmployee(int id) {
		employeeRepository.deleteById(id);
		
	}

	/*
	 * public boolean findByName(String name) { Product emp =
	 * employeeRepository.findByName(name); System.out.println(emp); if(emp==null){
	 * return false; } return true; }
	 */
	

}
