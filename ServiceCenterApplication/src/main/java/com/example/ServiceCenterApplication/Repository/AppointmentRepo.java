package com.example.ServiceCenterApplication.Repository;

import com.example.ServiceCenterApplication.model.*;
import java.util.List;
import java.time.LocalDate;
import java.time.LocalTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepo extends JpaRepository<Appointment, Long> {
    List<Appointment> findByUsers_userId(Long userId);

    @Query("SELECT a FROM Appointment a WHERE a.appointmentDate = :appointmentDate AND a.appointmentTime = :appointmentTime")
    Appointment findSlot(LocalDate appointmentDate, LocalTime appointmentTime);
}
