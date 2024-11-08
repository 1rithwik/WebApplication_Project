package com.example.ServiceCenterApplication.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.ServiceCenterApplication.model.*;
import com.example.ServiceCenterApplication.Repository.*;

@Service
public class ServiceServ {
    @Autowired
    private ServiceRepo serviceRepo;

    public List<com.example.ServiceCenterApplication.model.Service> getAllServices() {
        return serviceRepo.findAll();
    }
}
