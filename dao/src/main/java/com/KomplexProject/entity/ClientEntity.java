package com.KomplexProject.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Created by mezsolt on 2018.04.21..
 */

@Entity
public class ClientEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonIgnore
    private Long id;

    private String ip;
    private String sendDate;

    public ClientEntity() {
    }

    public ClientEntity(String ip, String sendDate) {
        this.ip = ip;
        this.sendDate = sendDate;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getIp() {
        return ip;
    }

    public void setIp(String ip) {
        this.ip = ip;
    }

    public String getSendDate() {
        return sendDate;
    }

    public void setSendDate(String sendDate) {
        this.sendDate = sendDate;
    }

    @Override
    public String toString() {
        return "ClientEntity{" +
                ", ip='" + ip + '\'' +
                ", sendDate=" + sendDate +
                '}';
    }
}
