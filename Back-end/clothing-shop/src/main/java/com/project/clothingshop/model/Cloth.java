package com.project.clothingshop.model;

import javax.persistence.*;
import java.sql.Blob;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Cloth {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cloth_id")
    private Long cloth_id;

    private String name;
    private int price;

    @Lob
    private byte[] image;


    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "sex_id")
    private Sex sex;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "size_id")
    private Size size;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "color_id")
    private Color color;

    public Sex getSex() {
        return sex;
    }

    public void setSex(Sex sex) {
        this.sex = sex;
    }

    public Cloth(String name, int price, byte[] image, Sex sex, Size size, Category category, Color color) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.sex = sex;
        this.size = size;
        this.category = category;
        this.color = color;
    }

    public Size getSize() {
        return size;
    }

    public void setSize(Size size) {
        this.size = size;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Long getCloth_id() {
        return cloth_id;
    }

    public void setCloth_id(Long cloth_id) {
        this.cloth_id = cloth_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public byte[] getImage() {
        return image;
    }

    public void setImage(byte[] image) {
        this.image = image;
    }


    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }


    public Cloth() {}
}
