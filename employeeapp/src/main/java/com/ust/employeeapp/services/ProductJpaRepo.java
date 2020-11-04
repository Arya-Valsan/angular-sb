package com.ust.employeeapp.services;
import org.springframework.data.jpa.repository.JpaRepository;

import com.ust.employeeapp.entities.Product;
public interface ProductJpaRepo extends JpaRepository<Product, Integer> {

}
