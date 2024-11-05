package com.example.ServiceCenterApplication.Controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import com.example.ServiceCenterApplication.Service.tiresService;
import com.example.ServiceCenterApplication.model.Tire;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.List;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
@RestController
@RequestMapping("/tires")
public class TireController{
    @Autowired
    private tiresService tiresService;

    @PostMapping("/tires")
    public ResponseEntity<Tire> getAllTires(@RequestBody Tire tire){
        Tire savedTire= tiresService.saveTire(tire);
        return ResponseEntity.ok(savedTire);
    }
    @GetMapping("/alltires")
    public List<Tire> getAllTires(){
        return tiresService.getAllTires();
    }
    @DeleteMapping("/deletetires/{id}")
    public void deleteById(@PathVariable Integer id){
        tiresService.deleteById(id);
    }
    @PutMapping("/updateTires")
    public ResponseEntity<Tire> updateTire(@RequestBody Tire tire){
        Tire updatedTire= tiresService.updateTire(tire);
        return ResponseEntity.ok(updatedTire);
    }
}
