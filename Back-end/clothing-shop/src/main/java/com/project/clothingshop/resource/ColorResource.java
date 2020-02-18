package com.project.clothingshop.resource;

import com.project.clothingshop.model.Category;
import com.project.clothingshop.model.Client;
import com.project.clothingshop.model.Color;
import com.project.clothingshop.repo.ColorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/color")
public class ColorResource {

    @Autowired
    ColorRepo colorRepo;

    @GetMapping(value = "/all")
    public List<Color> getAll() {
        return colorRepo.findAll();
    }

//    @EventListener(ApplicationReadyEvent.class)
//    public void start(){
//        colorRepo.save(new Color("Black"));
//        colorRepo.save(new Color("White"));
//        colorRepo.save(new Color("Blue"));
//        colorRepo.save(new Color("Green"));
//        colorRepo.save(new Color("Yellow"));
//        colorRepo.save(new Color("Brown"));
//        colorRepo.save(new Color("Red"));
//        colorRepo.save(new Color("Pink"));
//    }

}
