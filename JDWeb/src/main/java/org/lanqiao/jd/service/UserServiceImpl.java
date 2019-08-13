package org.lanqiao.jd.service;

import org.lanqiao.jd.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    UserMapper userMapper;
    @Override
    public boolean checkUser(String userName,String password) {
        return userMapper.checkUser(userName).equals(password);
    }
}
