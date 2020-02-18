package com.project.clothingshop.repo;

import com.project.clothingshop.model.AppUser;
import com.project.clothingshop.model.Category;
import com.project.clothingshop.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepo  extends JpaRepository<Payment, Long> {
    Payment findByName(String name);
}
