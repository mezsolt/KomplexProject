package com.KomplexProject.controller;

import com.KomplexProject.entity.DeletedDataEntity;
import com.KomplexProject.entity.UserEntity;
import com.KomplexProject.service.DeletedDataService;
import com.KomplexProject.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.text.ParseException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by mezsolt on 2018.03.25..
 */

@RestController
@RequestMapping(value = "/user")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private DeletedDataService deletedDataService;

    @RequestMapping(value = "/message", method = RequestMethod.GET)
    String message(HttpServletRequest request) {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String currentPrincipalName = authentication.getName();
        return "userMessage " + currentPrincipalName + " " + request.getRemoteAddr();
    }

    @RequestMapping(value = "/add", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
    void addUser(@RequestBody UserEntity newUser) {
        ArrayList roles = new ArrayList();
        roles.add("ROLE_USER");
        roles.add("ROLE_ADMIN");
        newUser.setRoles(roles);
        userService.addUser(newUser);
    }

    @RequestMapping(value = "/list", method = RequestMethod.GET,produces = MediaType.APPLICATION_JSON_VALUE)
    List<UserEntity> listUsers() {
        return userService.listUsers();
    }

    @RequestMapping(value = "/getOne", method = RequestMethod.GET)
    UserEntity getUser() {
        return userService.findOneByUsername("ferko");
    }

    @RequestMapping(value = "/changepw", method = RequestMethod.POST,consumes = MediaType.APPLICATION_JSON_VALUE)
    void changePassword(@RequestParam String newPassword,@RequestBody UserEntity user) {
        if(userService.findOneByUsername(user.getUsername()).getPassword().equals(user.getPassword())){
            userService.changePassword(user,newPassword);
        }
    }

    @RequestMapping(value = "/delete",method = RequestMethod.DELETE)
    private void deleteUser(@RequestParam String username) throws ParseException {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        UserEntity deletedUser = this.userService.deleteUser(username);
        if(deletedUser != null) {
            this.deletedDataService.addDeletedData(new DeletedDataEntity(auth.getName(),deletedUser.toString(), LocalDateTime.now().toString()));
        }
    }

}
