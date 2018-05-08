package com.KomplexProject.serviceImpl;

import com.KomplexProject.entity.UserEntity;
import com.KomplexProject.repository.UserRepository;
import com.KomplexProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by mezsolt on 2018.03.25..
 */

@Service
public class UserServiceImpl implements UserService {

    UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    public UserEntity addUser(UserEntity userEntity) {
        return userRepository.save(userEntity);
    }

    @Override
    public List<UserEntity> listUsers() {
        return userRepository.findAll();
    }

    @Override
    public UserEntity findOneByUsername(String username) {
        return userRepository.findOneByUsername(username);
    }

    @Override
    public void changePassword(UserEntity userEntity, String newPassword) {
        UserEntity userToChange = this.userRepository.findOneByUsername(userEntity.getUsername());
        userToChange.setPassword(newPassword);
        this.userRepository.save(userToChange);
    }

    @Override
    public UserEntity deleteUser(String username) {
        UserEntity userToDelete = this.userRepository.findOneByUsername(username);
        if(userToDelete != null) {
            this.userRepository.delete(this.userRepository.findOneByUsername(username));
        }
        return userToDelete;
    }
}

