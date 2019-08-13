package org.lanqiao.jd.controller;

import org.lanqiao.jdlogin.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    @Autowired
    UserService userService;

    @RequestMapping("/checkUser")
    public boolean checkUser(String userName,String password) {
        return userService.checkUser(userName,password);
    }
}
