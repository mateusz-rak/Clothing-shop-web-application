package com.project.clothingshop.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "client_id")
    private Long client_id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id" ,referencedColumnName = "user_id")
    private AppUser appUser;

    private String name;
    private String surname;
    private String sex;
    private String address;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "client_id" ,referencedColumnName = "client_id")
    private List<ClothesOrder> clothesOrderList =  new ArrayList<ClothesOrder>();

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Long getClient_id() {
        return client_id;
    }

    public void setClient_id(Long client_id) {
        this.client_id = client_id;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }

    public Client(AppUser appUser) {
        this.appUser = appUser;
    }

    public List<ClothesOrder> getClothesOrderList() {
        return clothesOrderList;
    }

    public void setClothesOrderList(List<ClothesOrder> clothesOrderList) {
        this.clothesOrderList = clothesOrderList;
    }

    public Client(){}
}
