package com.project.clothingshop.repo;

import com.project.clothingshop.model.Category;
import com.project.clothingshop.model.Sex;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryRepo extends JpaRepository<Category,Long> {
    Category findByName(String name);
}
