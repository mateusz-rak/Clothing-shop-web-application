package com.project.clothingshop.resource;

import com.project.clothingshop.model.AppUser;
import com.project.clothingshop.model.Client;
import com.project.clothingshop.repo.AppUserRepo;
import com.project.clothingshop.repo.ClientRepo;
import com.project.clothingshop.repo.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(value = "/appUser")
public class AppUserResource {

    @Autowired
    private AppUserRepo appUserRepo;

    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @PostMapping(value = "/checkUsername")
    public Boolean checkUsername(@RequestBody final AppUser appUser){
        List<AppUser> list = appUserRepo.findAll();
        for(int i = 0 ; i < list.size() ; i++)
        {
            if(list.get(i).getUsername().equals(appUser.getUsername()))
            {
                return false;
            }
        }
        return  true;
    }

    @PostMapping(value = "/login")
    public AppUser login(@RequestBody final AppUser appUser)
    {
        List<AppUser> list = appUserRepo.findAll();
        for(int i = 0 ; i < list.size() ; i++)
        {
            if(list.get(i).getUsername().equals(appUser.getUsername()))
            {
                if(passwordEncoder().matches(appUser.getPassword(),list.get(i).getPassword())){
                    return  list.get(i);
                }
            }
        }
        return null;
    }



    @GetMapping()
    public AppUser findByUsername(@RequestParam String username)
    {
        return  appUserRepo.findByUsername(username);
    }

    @DeleteMapping(value = "/deleteClient")
    public void deleteById(@RequestParam String username)
    {
        AppUser appUser = appUserRepo.findByUsername(username);
        appUserRepo.deleteById(appUser.getUser_id());
    }


}
