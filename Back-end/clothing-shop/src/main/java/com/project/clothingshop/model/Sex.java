package com.project.clothingshop.model;

import javax.persistence.*;

@Entity
public class Sex {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sex_id")
    private Long sex_id;

    private String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Sex() {}

    public Sex(String name) {
        this.name = name;
    }
}
