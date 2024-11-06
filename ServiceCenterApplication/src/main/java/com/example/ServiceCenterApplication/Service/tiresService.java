package com.example.ServiceCenterApplication.Service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.ServiceCenterApplication.Repository.TireRepo;
import com.example.ServiceCenterApplication.model.Tire;
import java.util.List;
@Service
public class tiresService {
    @Autowired
    private TireRepo tiresRepo;

    public Tire saveTire(Tire tire){
        return tiresRepo.save(tire);
    }
    public List<Tire> getAllTires(){
        return tiresRepo.findAll();
    }
    public void deleteById(Integer id){
        tiresRepo.deleteById(id);
    }
    public Tire updateTire(Tire tire){
            tiresRepo.save(tire);
            return tire;
    }
    
}
