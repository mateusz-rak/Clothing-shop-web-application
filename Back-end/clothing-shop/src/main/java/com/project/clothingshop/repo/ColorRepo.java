package com.project.clothingshop.repo;

import com.project.clothingshop.model.Color;
import com.project.clothingshop.model.Sex;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ColorRepo extends JpaRepository<Color,Long> {
    Color findByName(String name);
}
