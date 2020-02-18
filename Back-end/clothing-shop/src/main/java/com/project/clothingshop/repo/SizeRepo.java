package com.project.clothingshop.repo;

import com.project.clothingshop.model.Payment;
import com.project.clothingshop.model.Sex;
import com.project.clothingshop.model.Size;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SizeRepo   extends JpaRepository<Size, Long> {
    Size findByName(String name);
}
