package com.project.clothingshop.resource;

import com.project.clothingshop.model.*;
import com.project.clothingshop.repo.ClientRepo;
import com.project.clothingshop.repo.ClothRepo;
import com.project.clothingshop.repo.PaymentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/client")
public class ClientResource {

    @Autowired
    ClientRepo clientRepo;

    @Autowired
    PaymentRepo paymentRepo;

    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @GetMapping(value = "/all")
    public List<Client> getAll() {
        return clientRepo.findAll();
    }

    @GetMapping()
    public Optional<Client> findById(@RequestParam Long id)
    {
        return  clientRepo.findById(id);
    }

    @GetMapping(value = "/getClientByUsername")
    public Client findClientByUsername(@RequestParam String username)
    {
        List<Client> list = clientRepo.findAll();
        for(int i = 0 ; i < list.size() ; i++) {
            if (list.get(i).getAppUser().getUsername().equals(username)) {
                return list.get(i);
            }
        }
        return null;
    }

    @PutMapping(value = "/updateClient")
    public Client updateClient(@RequestBody final Client client){

        return clientRepo.save(client);
    }

    @GetMapping(value = "/getOrdersByUsername")
    public List<ClothesOrder> findOrdersByUsername(@RequestParam String username)
    {
        List<Client> list = clientRepo.findAll();
        for(int i = 0 ; i < list.size() ; i++) {
            if (list.get(i).getAppUser().getUsername().equals(username)) {
                return list.get(i).getClothesOrderList();
            }
        }
        return null;
    }

    @PutMapping(value = "/pay")
    public void pay(@RequestBody final ClothesOrder clothesOrder, @RequestParam String username){
        List<Client> list = clientRepo.findAll();
        for(int i = 0 ; i < list.size() ; i++) {
            if (list.get(i).getAppUser().getUsername().equals(username)) {
                clothesOrder.setTypeOfPayment(paymentRepo.findByName(clothesOrder.getTypeOfPayment().getName()));
                list.get(i).getClothesOrderList().add(clothesOrder);
                clientRepo.save(list.get(i));
            }
        }
    }

    @PostMapping(value = "/addClient")
    public Client addClient(@RequestBody final Client client){
        client.getAppUser().setPassword(passwordEncoder().encode(client.getAppUser().getPassword()));
        client.getAppUser().setRole("ROLE_CLIENT");
        clientRepo.save(client);
        return client;
    }

    @DeleteMapping(value = "/deleteClient")
    public void deleteById(@RequestParam String username)
    {
        List<Client> list = clientRepo.findAll();
        for(int i = 0 ; i < list.size() ; i++) {
            if (list.get(i).getAppUser().getUsername().equals(username)) {
                clientRepo.deleteById(list.get(i).getClient_id());
            }
        }
    }
}
