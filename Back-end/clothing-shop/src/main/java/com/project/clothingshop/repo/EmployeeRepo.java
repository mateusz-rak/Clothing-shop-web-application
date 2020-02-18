package com.project.clothingshop.repo;

import com.project.clothingshop.model.AppUser;
import com.project.clothingshop.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo  extends JpaRepository<Employee, Long> {
}
