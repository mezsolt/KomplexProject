package com.KomplexProject.service;

import com.KomplexProject.entity.ClientEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

/**
 * Created by mezsolt on 2018.04.21..
 */

@Service
public interface ClientService {
    List<ClientEntity> getClients();
    void addClient(ClientEntity clientEntity);
    List<ClientEntity> getClientsById(String id);
    boolean ipAllowed(String ip,LocalDateTime date);
    List<ClientEntity> deleteClient(String ip,String date);
}