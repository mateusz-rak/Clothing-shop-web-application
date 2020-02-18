package com.project.clothingshop.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class ClothesOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "clothesOrder_id")
    private Long clothesOrder_id;

    private String date;
    private int price;

    //@ManyToOne(cascade = CascadeType.ALL)
    private Long client_id;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "payment_id")
    private Payment typeOfPayment;

    @ManyToMany(cascade = CascadeType.REFRESH)
    private List<Cloth>clothes = new ArrayList<Cloth>();

    public Long getClothesOrder_id() {
        return clothesOrder_id;
    }

    public void setClothesOrder_id(Long clothesOrder_id) {
        this.clothesOrder_id = clothesOrder_id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Long getClient_id() {
        return client_id;
    }

    public void setClient_id(Long client_id) {
        this.client_id = client_id;
    }

    public Payment getTypeOfPayment() {
        return typeOfPayment;
    }

    public void setTypeOfPayment(Payment typeOfPayment) {
        this.typeOfPayment = typeOfPayment;
    }

    public List<Cloth> getClothes() {
        return clothes;
    }

    public void setClothes(List<Cloth> clothes) {
        this.clothes = clothes;
    }



    public ClothesOrder(){}

}



