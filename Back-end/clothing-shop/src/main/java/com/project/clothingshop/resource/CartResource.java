package com.project.clothingshop.resource;

import com.project.clothingshop.model.Cart;
import com.project.clothingshop.model.Cloth;
import com.project.clothingshop.repo.AppUserRepo;
import com.project.clothingshop.repo.CartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/cart")
public class CartResource {

    @Autowired
    CartRepo cartRepo;


    @PutMapping(value = "/updateCart")
    public Cart updateCart(@RequestBody final Cart cart){

        return cartRepo.save(cart);
    }

    @PutMapping(value = "/clearCart")
    public Cart clearCart(@RequestBody final Cart cart){

        cart.getClothes().clear();
        return cartRepo.save(cart);
    }



    @GetMapping(value = "/getCloth")
    public List<Cloth> getCart() {
        return cartRepo.findById((long)1).getClothes();
    }

    @EventListener(ApplicationReadyEvent.class)
    public void start(){
        cartRepo.save(new Cart());
    }

}
