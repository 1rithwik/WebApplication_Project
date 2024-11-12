package com.example.ServiceCenterApplication.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import com.example.ServiceCenterApplication.model.Users;
import com.example.ServiceCenterApplication.Repository.UserRepo;
import com.example.ServiceCenterApplication.model.UserPrincipal;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

@Service
public class MyUserDetailsSer implements UserDetailsService {

    @Autowired
    private UserRepo userRepo;

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users user = userRepo.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException("User not found");
        }
        return new UserPrincipal(user);
    }

}
