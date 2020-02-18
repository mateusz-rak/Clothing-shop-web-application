package com.project.clothingshop.repo;

import com.project.clothingshop.model.Cart;
import com.project.clothingshop.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface CartRepo extends JpaRepository<Cart,Long> {
    Cart findById(long id);
}
