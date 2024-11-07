package com.example.ServiceCenterApplication.Service;

import java.time.LocalDate;
import java.time.LocalTime;
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

<<<<<<< HEAD
    public Appointment scheduleAppointment(Long userId, Long serviceId, LocalDate appointmentDate,
            LocalTime appointmentTime) {
        Users user = userRepo.findById(userId).orElse(null);
        com.example.ServiceCenterApplication.model.Service service = serviceRepo.findById(serviceId).orElse(null);
        Appointment appointment = new Appointment();
        appointment.setUsers(user);
        appointment.setService(service);
        appointment.setAppointmentDate(appointmentDate);
        appointment.setAppointmentTime(appointmentTime);
        return appointmentRepo.save(appointment);
=======
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
>>>>>>> 4915eaa (View ans delete appointment by user)
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
