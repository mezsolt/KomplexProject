package com.KomplexProject.service;


import com.KomplexProject.entity.UserEntity;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by mezsolt on 2018.03.25..
 */

@Service
public interface UserService {
    UserEntity addUser(UserEntity userEntity);
    List<UserEntity> listUsers();
    UserEntity findOneByUsername(String username);
    void changePassword(UserEntity userEntity,String newPassword);
    UserEntity deleteUser(String username);
}
