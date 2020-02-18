package com.project.clothingshop.resource;

import com.project.clothingshop.model.Cloth;
import com.project.clothingshop.model.ClothWithAllSize;
import com.project.clothingshop.model.Size;
import com.project.clothingshop.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/clothSize")
public class ClothWithAllSizeResource {

    @Autowired
    ClothWithAllSizeRepo clothWithAllSizeRepo;
    @Autowired
    SexRepo sexRepo;
    @Autowired
    CategoryRepo categoryRepo;
    @Autowired
    SizeRepo sizeRepo;
    @Autowired
    ColorRepo colorRepo;




    @GetMapping(value = "/getClothesSize")
    public List<ClothWithAllSize> getClothes(@RequestParam String sex, @RequestParam String category)
    {
        List<ClothWithAllSize> list = clothWithAllSizeRepo.findAll();
        List<ClothWithAllSize> finalList = new ArrayList<>();
        for(int i = 0 ; i<list.size() ; i++) {
            if ((list.get(i).getSex().getName().equals(sex)) && (list.get(i).getCategory().getName().equals(category))) {
                finalList.add(list.get(i));
            }
        }
        return finalList;
    }

    @PostMapping(value = "/addClothSize")
    public ClothWithAllSize addClothSize(@RequestBody final ClothWithAllSize clothWithAllSize){
        clothWithAllSize.setSex(sexRepo.findByName(clothWithAllSize.getSex().getName()));
        List<Size> sizes = new ArrayList<>();
        for(int i = 0 ; i<clothWithAllSize.getSizes().size(); i++) {
            sizes.add(sizeRepo.findByName(clothWithAllSize.getSizes().get(i).getName()));
        }
        clothWithAllSize.setSizes(sizes);
        clothWithAllSize.setCategory(categoryRepo.findByName(clothWithAllSize.getCategory().getName()));
        clothWithAllSize.setColor(colorRepo.findByName(clothWithAllSize.getColor().getName()));
        clothWithAllSize.setImage(clothWithAllSize.getImage());

        return clothWithAllSizeRepo.save(clothWithAllSize);
    }



}