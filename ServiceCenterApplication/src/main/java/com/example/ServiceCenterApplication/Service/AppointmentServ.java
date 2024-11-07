package com.example.ServiceCenterApplication.Service;

import java.util.List;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;

import com.example.ServiceCenterApplication.Repository.AppointmentRepo;
import com.example.ServiceCenterApplication.model.Appointment;
import com.example.ServiceCenterApplication.model.Users;
import com.example.ServiceCenterApplication.Repository.UserRepo;
import com.example.ServiceCenterApplication.Repository.ServiceRepo;

@Service
public class AppointmentServ {

    @Autowired
    private AppointmentRepo appointmentRepo;
    @Autowired
    private ServiceRepo serviceRepo;
    @Autowired
    private UserRepo userRepo;

    public Appointment scheduleAppointment(Appointment appointment) {
        Appointment appoint = new Appointment();
        Users user = userRepo.findById(appointment.getUsers().getUserId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        com.example.ServiceCenterApplication.model.Service service = serviceRepo
                .findById(appointment.getService().getServiceId())
                .orElseThrow(() -> new RuntimeException("Service not found"));
        appoint.setUsers(user);
        appoint.setService(service);
        appoint.setAppointmentDate(appointment.getAppointmentDate());
        appoint.setAppointmentTime(appointment.getAppointmentTime());
        appoint.setAppointmentStatus(appointment.getAppointmentStatus());
        return appointmentRepo.save(appoint);
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
