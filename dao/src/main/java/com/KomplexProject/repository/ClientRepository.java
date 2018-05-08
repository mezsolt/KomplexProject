package com.KomplexProject.repository;

import com.KomplexProject.entity.ClientEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by mezsolt on 2018.04.21..
 */

@Repository
public interface ClientRepository extends JpaRepository<ClientEntity,Long> {
    List<ClientEntity> findByIp(String ip);
}