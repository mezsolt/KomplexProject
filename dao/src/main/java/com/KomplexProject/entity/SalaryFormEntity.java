package com.KomplexProject.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.io.Serializable;

/**
 * Created by mezsolt on 2018.04.27..
 */

@Entity
public class SalaryFormEntity implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonIgnore
    private Long id;

    private String gender;
    private String age;
    private String foreignLanguages;
    private String position;
    private String experience;
    private String placeOfWork;
    private String educationAttained;
    private int salary;

    public SalaryFormEntity() {
    }

    public SalaryFormEntity(String gender, String age, String foreignLanguages, String position, String experience, String placeOfWork, String educationAttained, int salary) {
        this.gender = gender;
        this.age = age;
        this.foreignLanguages = foreignLanguages;
        this.position = position;
        this.experience = experience;
        this.placeOfWork = placeOfWork;
        this.educationAttained = educationAttained;
        this.salary = salary;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getForeignLanguages() {
        return foreignLanguages;
    }

    public void setForeignLanguages(String foreignLanguages) {
        this.foreignLanguages = foreignLanguages;
    }

    public String getPosition() {
        return position;
    }

    public void setPosition(String position) {
        this.position = position;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getPlaceOfWork() {
        return placeOfWork;
    }

    public void setPlaceOfWork(String placeOfWork) {
        this.placeOfWork = placeOfWork;
    }

    public String getEducationAttained() {
        return educationAttained;
    }

    public void setEducationAttained(String educationAttained) {
        this.educationAttained = educationAttained;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    @Override
    public String toString() {
        return "SalaryFormEntity{" +
                ", gender='" + gender + '\'' +
                ", age='" + age + '\'' +
                ", foreignLanguages='" + foreignLanguages + '\'' +
                ", position='" + position + '\'' +
                ", experience='" + experience + '\'' +
                ", placeOfWork='" + placeOfWork + '\'' +
                ", educationAttained='" + educationAttained + '\'' +
                ", salary=" + salary +
                '}';
    }
}
