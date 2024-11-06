package com.example.ServiceCenterApplication.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import java.util.List;

<<<<<<< HEAD
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
=======
import com.fasterxml.jackson.annotation.JsonManagedReference;

>>>>>>> e4bde25 (Appointment Implemented for admin)
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "users")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long userId;

    private String username;
    private String password;
    private String email;
    private String mobile;
    private String role; // Values could be "ADMIN" or "USER"

    @OneToMany(mappedBy = "users")
<<<<<<< HEAD
    // @JsonManagedReference
    @JsonIgnoreProperties({ "users" })
    @JsonIgnore
    private List<Appointment> appointments;

    @OneToMany(mappedBy = "users")
    // @JsonBackReference
=======
    @JsonManagedReference
    private List<Appointment> appointments;

    @OneToMany(mappedBy = "users")
    @JsonManagedReference
>>>>>>> e4bde25 (Appointment Implemented for admin)
    private List<Feedback> feedbackList;

    // Getters and setters
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public List<Appointment> getAppointments() {
        return appointments;
    }

    public void setAppointments(List<Appointment> appointments) {
        this.appointments = appointments;
    }
}
