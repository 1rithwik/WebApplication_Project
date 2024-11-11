package com.example.ServiceCenterApplication.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.ServiceCenterApplication.Service.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import com.example.ServiceCenterApplication.model.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ServiceContr {
    @Autowired
    private ServiceServ serviceServ;

    @GetMapping("/user/service/all")
    public List<com.example.ServiceCenterApplication.model.Service> getAllServices() {
        return serviceServ.getAllServices();
    }

    @PostMapping("/admin/service/addService")
    public Service addService(@RequestBody Service service) {
        return serviceServ.addService(service);
    }

    @PutMapping("/admin/service/updateService")
    public Service updateService(@RequestBody Service service) {
        return serviceServ.updateService(service);
    }

    @DeleteMapping("/admin/service/deleteService/{serviceId}")
    public void deleteService(@PathVariable int serviceId) {
        serviceServ.deleteService(serviceId);
    }
}
