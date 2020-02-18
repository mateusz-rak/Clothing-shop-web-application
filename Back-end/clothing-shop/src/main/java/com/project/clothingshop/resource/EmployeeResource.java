package com.project.clothingshop.resource;

import com.project.clothingshop.model.AppUser;
import com.project.clothingshop.model.Category;
import com.project.clothingshop.model.Employee;
import com.project.clothingshop.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/employee")
public class EmployeeResource {

    @Autowired
    EmployeeRepo employeeRepo;

    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @GetMapping(value = "/all")
    public List<Employee> getAll() {
        return employeeRepo.findAll();
    }

//    @EventListener(ApplicationReadyEvent.class)
//    public void start(){
//        employeeRepo.save(new Employee(new AppUser("emp1",passwordEncoder().encode("emp1"),"ROLE_EMPLOYER")));
//        employeeRepo.save(new Employee(new AppUser("emp2",passwordEncoder().encode("emp2"),"ROLE_EMPLOYER")));
//    }

}
