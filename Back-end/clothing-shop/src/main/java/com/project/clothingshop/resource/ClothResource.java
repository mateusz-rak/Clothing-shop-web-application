package com.project.clothingshop.resource;

import com.project.clothingshop.model.Category;
import com.project.clothingshop.model.Client;
import com.project.clothingshop.model.Cloth;
import com.project.clothingshop.model.ClothWithAllSize;
import com.project.clothingshop.repo.*;
import org.hibernate.engine.jdbc.BlobProxy;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/cloth")
public class ClothResource {

    @Autowired
    ClothRepo clothRepo;
    @Autowired
    SexRepo sexRepo;
    @Autowired
    CategoryRepo categoryRepo;
    @Autowired
    SizeRepo sizeRepo;
    @Autowired
    ColorRepo colorRepo;
    @Autowired
    ClothWithAllSizeRepo clothWithAllSizeRepo;

    @GetMapping(value = "/all")
    public List<Cloth> getAll() {
        return clothRepo.findAll();
    }

    @GetMapping()
    public Optional<Cloth> findById(@RequestParam Long id)
    {
        return  clothRepo.findById(id);
    }


    @GetMapping(value = "/getCloth")
    public Cloth getCloth(@RequestParam String name, @RequestParam String size)
    {
        List<Cloth> list = clothRepo.findByName(name);
        Cloth cloth = new Cloth();
        for(int i = 0 ; i<list.size(); i++) {
            if(list.get(i).getSize().getName().equals(size)) {
                cloth = list.get(i);
            }
        }
        return cloth;
    }

    @PostMapping(value = "/addCloth")
    public Cloth addCloth(@RequestBody final Cloth cloth){
        cloth.setSex(sexRepo.findByName(cloth.getSex().getName()));
        cloth.setSize(sizeRepo.findByName(cloth.getSize().getName()));
        cloth.setCategory(categoryRepo.findByName(cloth.getCategory().getName()));
        cloth.setColor(colorRepo.findByName(cloth.getColor().getName()));
        cloth.setImage(cloth.getImage());

        return clothRepo.save(cloth);
    }


    @DeleteMapping(value = "/deleteCloth")
    public void deleteById(@RequestParam Long id)
    {
        Optional<Cloth> cloth = clothRepo.findById(id);
        ClothWithAllSize clothWithAllSize = clothWithAllSizeRepo.findByName(cloth.get().getName());
        for( int i = 0; i<clothWithAllSize.getSizes().size(); i++) {
            if (clothWithAllSize.getSizes().get(i).getName().equals(cloth.get().getSize().getName())) {
                clothWithAllSize.getSizes().remove(i);
            }
        }
        clothRepo.deleteById(id);
    }
}
