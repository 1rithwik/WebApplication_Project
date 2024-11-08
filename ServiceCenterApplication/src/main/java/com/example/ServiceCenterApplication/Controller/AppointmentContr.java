package com.example.ServiceCenterApplication.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.List;

import com.example.ServiceCenterApplication.model.Appointment;
import com.example.ServiceCenterApplication.Service.AppointmentServ;

@RestController
@RequestMapping("/Appointment")
@CrossOrigin(origins = "http://localhost:4200")
public class AppointmentContr {

    @Autowired
    private AppointmentServ appointmentServ;

    @GetMapping("/appointments")
    public List<Appointment> getAppointment() {
        return appointmentServ.getAppointment();
    }

    @GetMapping("/appointments/{id}")
    public Appointment getAppointmentById(@PathVariable Long id) {
        return appointmentServ.getAppointmentById(id);
    }

    // @PostMapping("/user/service/scheduleAppointment")
    // public ResponseEntity<?> postAppointment(@RequestBody Appointment
    // appointment) {
    // // try {
    // return ResponseEntity.ok(appointmentServ.scheduleAppointment(appointment));
    // // } catch (Exception e) {
    // // return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error
    // // scheduling appointment");
    // // }
    // }

    @DeleteMapping("/DeleteAppointment/{id}")
    public ResponseEntity<String> deleteAppointment(@PathVariable Long id) {
        Appointment existingAppointment = appointmentServ.getAppointmentById(id);
        if (existingAppointment == null) {
            return ResponseEntity.notFound().build();
        }
        appointmentServ.deleteAppointment(existingAppointment);
        return ResponseEntity.ok("Appointment Deleted");
    }

    // Get Appointments by User ID
    @GetMapping("/appointments/user/{userId}")
    public List<Appointment> getAppointmentsByUserId(@PathVariable Long userId) {
        return appointmentServ.getAppointmentsByUserId(userId);
    }
}
