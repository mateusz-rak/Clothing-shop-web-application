package com.project.clothingshop.resource;

import com.project.clothingshop.model.ClothesOrder;
import com.project.clothingshop.repo.ClothesOrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/order")
public class ClothesOrderResource {

    @Autowired
    ClothesOrderRepo clothesOrderRepo;

    @GetMapping(value = "/all")
    public List<ClothesOrder> getAll() {
        return clothesOrderRepo.findAll();
    }
}
