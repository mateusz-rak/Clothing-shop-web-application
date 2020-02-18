package com.project.clothingshop.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class ClothWithAllSize {

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

    @ManyToMany(cascade = CascadeType.REFRESH)
    private List<Size> sizes = new ArrayList<Size>();

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "category_id")
    private Category category;

    @ManyToOne(cascade = CascadeType.REFRESH)
    @JoinColumn(name = "color_id")
    private Color color;

    public ClothWithAllSize(String name, int price, byte[] image, Sex sex, List<Size> sizes, Category category, Color color) {
        this.name = name;
        this.price = price;
        this.image = image;
        this.sex = sex;
        this.sizes = sizes;
        this.category = category;
        this.color = color;
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

    public Sex getSex() {
        return sex;
    }

    public void setSex(Sex sex) {
        this.sex = sex;
    }

    public List<Size> getSizes() {
        return sizes;
    }

    public void setSizes(List<Size> sizes) {
        this.sizes = sizes;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Color getColor() {
        return color;
    }

    public void setColor(Color color) {
        this.color = color;
    }

    ClothWithAllSize() {}
}
