package com.project.clothingshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.project.clothingshop.repo")
@SpringBootApplication
public class ClothingShopApplication {

    public static void main(String[] args) {
        SpringApplication.run(ClothingShopApplication.class, args);
    }

}
