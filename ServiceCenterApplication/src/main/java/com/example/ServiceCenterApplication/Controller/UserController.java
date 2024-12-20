package com.example.ServiceCenterApplication.Controller;

import com.example.ServiceCenterApplication.Service.UserService;
import com.example.ServiceCenterApplication.model.Users;

import java.util.HashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.cache.annotation.Cacheable;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    @Autowired
    private UserService service;

    HashMap<String, Users> map = new HashMap<>();

    @PostMapping(value = "/register", consumes = "application/json")
    public ResponseEntity<?> register(@RequestBody Users user) {
        return ResponseEntity.ok(service.register(user));
    }

    @PostMapping("/login")
    @Cacheable(value = "userCache", key = "#user.getUsername()", cacheManager = "userCacheManager")
    public HashMap<String, Users> login(@RequestBody Users user) {
        map.clear();
        String token = service.verify(user);
        if (token != null) {
            Users userDetails = service.getUserDetails(user.getUsername());
            map.put(token, userDetails);
        } else {
            return null;
        }
        return map;
    }
}
