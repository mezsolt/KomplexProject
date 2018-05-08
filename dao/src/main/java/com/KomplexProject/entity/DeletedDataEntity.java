package com.KomplexProject.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by mezsolt on 2018.05.05..
 */

@Entity
public class DeletedDataEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String username;
    private String data;
    private String deletionDate;

    public DeletedDataEntity() {
    }

    public DeletedDataEntity(String username, String data, String deletionDate) {
        this.username = username;
        this.data = data;
        this.deletionDate = deletionDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getDeletionDate() {
        return deletionDate;
    }

    public void setDeletionDate(String deletionDate) {
        this.deletionDate = deletionDate;
    }

    @Override
    public String toString() {
        return "DeletedDataEntity{" +
                "id=" + id +
                ", username='" + username + '\'' +
                ", data='" + data + '\'' +
                ", deletionDate='" + deletionDate + '\'' +
                '}';
    }
}
