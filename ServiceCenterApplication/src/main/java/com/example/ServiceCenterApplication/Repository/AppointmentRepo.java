package com.example.ServiceCenterApplication.Repository;

import com.example.ServiceCenterApplication.model.*;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepo extends JpaRepository<Appointment, Long> {
    List<Appointment> findByUsers_userId(Long userId);
}
