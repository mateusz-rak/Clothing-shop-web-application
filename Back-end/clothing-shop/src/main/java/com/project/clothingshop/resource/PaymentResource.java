package com.project.clothingshop.resource;

import com.project.clothingshop.model.Category;
import com.project.clothingshop.model.Employee;
import com.project.clothingshop.model.Payment;
import com.project.clothingshop.repo.EmployeeRepo;
import com.project.clothingshop.repo.PaymentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/payment")
public class PaymentResource {

    @Autowired
    PaymentRepo paymentRepo;

    @GetMapping(value = "/all")
    public List<Payment> getAll() {
        return paymentRepo.findAll();
    }

//    @EventListener(ApplicationReadyEvent.class)
//    public void start(){
//        paymentRepo.save(new Payment("Przelewy24"));
//        paymentRepo.save(new Payment("PayU"));
//        paymentRepo.save(new Payment("Dotpay"));
//    }
}
