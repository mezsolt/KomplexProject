package com.KomplexProject.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by mezsolt on 2018.05.03..
 */

@Entity
public class VerifyingCodeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String verifyingCode;

    public VerifyingCodeEntity() {
    }

    public VerifyingCodeEntity(String verifyingCode) {
        this.verifyingCode = verifyingCode;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getVerifyingCode() {
        return verifyingCode;
    }

    public void setVerifyingCode(String verifyingCode) {
        this.verifyingCode = verifyingCode;
    }

    @Override
    public String toString() {
        return "VerifyingCodeEntity{" +
                "id=" + id +
                ", verifyingCode='" + verifyingCode + '\'' +
                '}';
    }
}
