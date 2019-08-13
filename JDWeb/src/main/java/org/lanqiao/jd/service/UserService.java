package org.lanqiao.jd.service;

import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public boolean checkUser(String userName, String password);
}
