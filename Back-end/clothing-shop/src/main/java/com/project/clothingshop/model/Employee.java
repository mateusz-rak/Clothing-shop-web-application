package com.project.clothingshop.model;

import javax.persistence.*;

@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "employee_id")
    private Long employee_id;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id" ,referencedColumnName = "user_id")
    private AppUser appUser;

    public Long getEmployee_id() {
        return employee_id;
    }

    public void setEmployee_id(Long employee_id) {
        this.employee_id = employee_id;
    }

    public AppUser getAppUser() {
        return appUser;
    }

    public void setAppUser(AppUser appUser) {
        this.appUser = appUser;
    }

    public Employee(AppUser appUser) {
        this.appUser = appUser;
    }
}
