package com.project.clothingshop.repo;

import com.project.clothingshop.model.Cloth;
import com.project.clothingshop.model.ClothWithAllSize;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClothWithAllSizeRepo extends JpaRepository<ClothWithAllSize, Long> {
    ClothWithAllSize findByName(String name);
}
