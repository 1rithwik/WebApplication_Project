package com.example.ServiceCenterApplication.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.ServiceCenterApplication.model.Tire;
import org.springframework.stereotype.Repository;

@Repository
public interface TireRepo extends JpaRepository<Tire, Integer> {
    Tire findByModel(String model);
}
