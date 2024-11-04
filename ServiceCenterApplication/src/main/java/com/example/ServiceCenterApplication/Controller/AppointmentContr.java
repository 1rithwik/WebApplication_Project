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
import java.util.List;

import com.example.ServiceCenterApplication.model.Appointment;
import com.example.ServiceCenterApplication.Service.AppointmentServ;

@RestController
@RequestMapping("/Appointment")
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

    @PostMapping("/ScheduleAppointment")
    public ResponseEntity<Appointment> postAppointment(@RequestBody Appointment appointment) {
        return ResponseEntity.ok(appointmentServ.scheduleAppointment(appointment));
    }

    @PutMapping("/UpdateAppointment/{id}")
    public ResponseEntity<Appointment> putAppointment(@PathVariable Long id, @RequestBody Appointment appointment) {
        Appointment existingAppointment = appointmentServ.getAppointmentById(id);
        if (existingAppointment == null) {
            return ResponseEntity.notFound().build();
        }
        existingAppointment.setAppointmentDate(appointment.getAppointmentDate());
        existingAppointment.setAppointmentTime(appointment.getAppointmentTime());
        existingAppointment.setAppointmentStatus(appointment.getAppointmentStatus());
        existingAppointment.setServiceId(appointment.getServiceId());
        return ResponseEntity.ok(appointmentServ.updateAppointment(existingAppointment));
    }

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
