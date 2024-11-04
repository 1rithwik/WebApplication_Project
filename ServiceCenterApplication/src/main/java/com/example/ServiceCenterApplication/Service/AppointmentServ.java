package com.example.ServiceCenterApplication.Service;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.ServiceCenterApplication.Repository.AppointmentRepo;
import com.example.ServiceCenterApplication.model.Appointment;

@Service
public class AppointmentServ {

    @Autowired
    private AppointmentRepo appointmentRepo;

    public Appointment scheduleAppointment(Appointment appointment) {
        return appointmentRepo.save(appointment);
    }

    public List<Appointment> getAppointment() {
        return appointmentRepo.findAll();
    }

    public Appointment updateAppointment(Appointment appointment) {
        return appointmentRepo.save(appointment);
    }

    public void deleteAppointment(Appointment appointment) {
        appointmentRepo.delete(appointment);
    }

    public Appointment getAppointmentById(Long id) {
        return appointmentRepo.findById(id).orElse(null);
    }

    public List<Appointment> getAppointmentsByUserId(Long userId) {
        return appointmentRepo.findByUsers_userId(userId);
    }
}
