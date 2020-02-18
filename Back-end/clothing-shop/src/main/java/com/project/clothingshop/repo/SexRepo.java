package com.project.clothingshop.repo;

import com.project.clothingshop.model.Payment;
import com.project.clothingshop.model.Sex;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SexRepo  extends JpaRepository<Sex, Long> {
    Sex findByName(String name);
}
