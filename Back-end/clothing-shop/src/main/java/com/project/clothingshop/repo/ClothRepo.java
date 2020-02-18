package com.project.clothingshop.repo;

import com.project.clothingshop.model.Cloth;
import com.project.clothingshop.model.Color;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClothRepo extends JpaRepository<Cloth, Long> {
    List<Cloth> findByName(String name);
}
