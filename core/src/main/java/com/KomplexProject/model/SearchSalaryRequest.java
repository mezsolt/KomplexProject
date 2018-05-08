package com.KomplexProject.model;

/**
 * Created by mezsolt on 2018.05.04..
 */

public class SearchSalaryRequest {

    private String gender;
    private String age;
    private String foreignLanguages;
    private String position;
    private String experience;
    private String placeOfWork;
    private String educationAttained;

    public SearchSalaryRequest() {
    }

    public SearchSalaryRequest(String gender, String age, String foreignLanguages, String position, String experience, String placeOfWork, String educationAttained) {
        this.gender = gender;
        this.age = age;
        this.foreignLanguages = foreignLanguages;
        this.position = position;
        this.experience = experience;
        this.placeOfWork = placeOfWork;
        this.educationAttained = educationAttained;
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
}
