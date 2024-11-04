package com.example.ServiceCenterApplication.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.ServiceCenterApplication.Service.AppointmentServ;
import com.example.ServiceCenterApplication.model.Appointment;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserAppointment {

    @Autowired
    private AppointmentServ appointmentServ;

    @PostMapping("/scheduleAppointment")
    public Appointment scheduleAppointment(@RequestBody Appointment appointment) {
        return appointmentServ.scheduleAppointment(appointment);
    }

    @DeleteMapping("/deleteAppointment/{id}")
    public void deleteAppointment(@PathVariable Appointment appointment) {
        appointmentServ.deleteAppointment(appointment);
    }

}
