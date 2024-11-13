package com.example.ServiceCenterApplication.Repository;

import com.example.ServiceCenterApplication.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepo extends JpaRepository<Service, Long> {

}
