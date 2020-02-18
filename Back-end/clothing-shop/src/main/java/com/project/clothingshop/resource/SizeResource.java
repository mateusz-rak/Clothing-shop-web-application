package com.project.clothingshop.resource;

import com.project.clothingshop.model.Color;
import com.project.clothingshop.model.Sex;
import com.project.clothingshop.model.Size;
import com.project.clothingshop.repo.SexRepo;
import com.project.clothingshop.repo.SizeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/size")
public class SizeResource {

    @Autowired
    SizeRepo sizeRepo;

    @GetMapping(value = "/all")
    public List<Size> getAll() {
        return sizeRepo.findAll();
    }

//    @EventListener(ApplicationReadyEvent.class)
//    public void start(){
//        sizeRepo.save(new Size("S"));
//        sizeRepo.save(new Size("M"));
//        sizeRepo.save(new Size("L"));
//        sizeRepo.save(new Size("XL"));
//    }
}
