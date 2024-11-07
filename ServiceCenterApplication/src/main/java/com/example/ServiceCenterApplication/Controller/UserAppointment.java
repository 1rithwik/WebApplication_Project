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

import com.example.ServiceCenterApplication.Service.AppointmentServ;
import com.example.ServiceCenterApplication.model.Appointment;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserAppointment {

    @Autowired
    private AppointmentServ appointmentServ;

    @PostMapping("/user/service/scheduleAppointment")
    public ResponseEntity<?> postAppointment(@RequestBody Appointment appointment) {
        // try {
        return ResponseEntity.ok(appointmentServ.scheduleAppointment(appointment));
        // } catch (Exception e) {
        // return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error
        // scheduling appointment");
        // }
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
