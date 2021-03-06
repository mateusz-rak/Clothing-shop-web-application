package com.project.clothingshop.repo;

import com.project.clothingshop.model.ClothesOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClothesOrderRepo extends JpaRepository<ClothesOrder, Long> {
}
