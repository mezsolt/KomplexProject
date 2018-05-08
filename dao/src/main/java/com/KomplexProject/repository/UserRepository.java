package com.KomplexProject.repository;

import com.KomplexProject.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/**
 * Created by mezsolt on 2018.03.25..
 */

@Repository
public interface UserRepository extends JpaRepository<UserEntity,Long> {
    UserEntity findOneByUsername(String username);
}
