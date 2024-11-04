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

import com.example.ServiceCenterApplication.Service.AppointmentServ;
import com.example.ServiceCenterApplication.model.Appointment;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserAppointment {

    @Autowired
    private AppointmentServ appointmentServ;

    @PostMapping("/service/scheduleAppointment")
    public ResponseEntity<Appointment> postAppointment(@RequestBody Appointment appointment) {
        return ResponseEntity.ok(appointmentServ.scheduleAppointment(appointment));
    }

    @DeleteMapping("/service/deleteAppointment/{id}")
    public void deleteAppointment(@PathVariable Long id) {
        Appointment appointment = appointmentServ.getAppointmentById(id);
        if (appointment != null) {
            appointmentServ.deleteAppointment(appointment);
        }
    }

    @GetMapping("/service/getUserAppointments/{userId}")
    public List<Appointment> getUserAppointments(@PathVariable Long userId) {
        return appointmentServ.getAppointmentsByUserId(userId);
    }
}
