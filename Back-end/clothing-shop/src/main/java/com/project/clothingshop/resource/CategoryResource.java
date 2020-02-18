package com.project.clothingshop.resource;

import com.project.clothingshop.model.Category;
import com.project.clothingshop.repo.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/category")
public class CategoryResource {

    @Autowired
    CategoryRepo categoryRepo;


    @GetMapping(value = "/all")
    public List<Category> getAll() {
        return categoryRepo.findAll();
    }

//    @EventListener(ApplicationReadyEvent.class)
//    public void start(){
//        categoryRepo.save(new Category("t-shirt"));
//        categoryRepo.save(new Category("jeans"));
//        categoryRepo.save(new Category("hoodie"));
//        categoryRepo.save(new Category("jacket"));
//    }

}
