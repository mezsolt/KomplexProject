package com.KomplexProject.controller;

/**
 * Created by mezsolt on 2018.04.08..
 */
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class ViewController {

    @RequestMapping(value = {"/login","/salary","/salary/search","/salary/verification","/salarydata","/clientdata","/codedata","/deleteddata","/user"},method = RequestMethod.GET)
    public String index() {
        return "forward:/index.html";
    }

    @RequestMapping(value="/logout", method = RequestMethod.GET)
    public String logoutPage (HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null){
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        return "forward:/login";//
    }

    @RequestMapping(value = "/loggedin", method = RequestMethod.GET)
    @ResponseBody
    public boolean loggedIn() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        boolean loggedIn = false;
        if(auth != null && !auth.getPrincipal().equals("anonymousUser")) {
            loggedIn = true;
        }
        return loggedIn;
    }

}