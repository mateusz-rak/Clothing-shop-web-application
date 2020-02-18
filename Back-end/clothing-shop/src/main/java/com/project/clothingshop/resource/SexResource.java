package com.project.clothingshop.resource;

import com.project.clothingshop.model.Color;
import com.project.clothingshop.model.Payment;
import com.project.clothingshop.model.Sex;
import com.project.clothingshop.repo.SexRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/sex")
public class SexResource {

    @Autowired
    SexRepo sexRepo;

    @GetMapping(value = "/all")
    public List<Sex> getAll() {
        return sexRepo.findAll();
    }

//    @EventListener(ApplicationReadyEvent.class)
//    public void start(){
//        sexRepo.save(new Sex("man"));
//        sexRepo.save(new Sex("woman"));
//    }
}
