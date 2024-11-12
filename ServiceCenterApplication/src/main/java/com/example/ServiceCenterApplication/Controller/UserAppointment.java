package com.example.ServiceCenterApplication.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import java.util.List;
import org.springframework.http.HttpStatus;
import java.time.LocalDate;
import java.time.LocalTime;

import com.example.ServiceCenterApplication.Service.AppointmentServ;
import com.example.ServiceCenterApplication.model.Appointment;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserAppointment {

    @Autowired
    private AppointmentServ appointmentServ;

    @PostMapping("/user/service/scheduleAppointment")
    public ResponseEntity<Appointment> postAppointment(@RequestBody AppointmentResponse appointmentResponse) {

        return ResponseEntity
                .ok(appointmentServ.scheduleAppointment(appointmentResponse.userId, appointmentResponse.serviceId,
                        appointmentResponse.appointmentDate, appointmentResponse.appointmentTime));
    }

    @DeleteMapping("/user/service/deleteAppointment/{id}")
    public void deleteAppointment(@PathVariable Long id) {
        Appointment appointment = appointmentServ.getAppointmentById(id);
        if (appointment != null) {
            appointmentServ.deleteAppointment(appointment);
        }
    }

    @GetMapping("/user/service/getUserAppointments/{userId}")
    public List<Appointment> getUserAppointments(@PathVariable Long userId) {
        return appointmentServ.getAppointmentsByUserId(userId);
    }
}

class AppointmentResponse {
    Long userId;
    Long serviceId;
    LocalDate appointmentDate;
    LocalTime appointmentTime;
    String appointmentStatus;

    // Getters and setters
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getServiceId() {
        return serviceId;
    }

    public void setServiceId(Long serviceId) {
        this.serviceId = serviceId;
    }

    public LocalDate getAppointmentDate() {
        return appointmentDate;
    }

    public void setAppointmentDate(LocalDate appointmentDate) {
        this.appointmentDate = appointmentDate;
    }

    public LocalTime getAppointmentTime() {
        return appointmentTime;
    }

    public void setAppointmentTime(LocalTime appointmentTime) {
        this.appointmentTime = appointmentTime;
    }

    public String getAppointmentStatus() {
        return appointmentStatus;
    }

    public void setAppointmentStatus(String appointmentStatus) {
        this.appointmentStatus = appointmentStatus;
    }
}