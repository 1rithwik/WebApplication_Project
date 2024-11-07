package com.example.ServiceCenterApplication.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name = "feedback")
public class Feedback {

    // @Id
    // private int id;
    // private String username;
    // private String comments;
    // private String rating;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
<<<<<<< HEAD
<<<<<<< HEAD
    @JoinColumn(name = "user_id")
    // @JsonManagedReference
    @JsonIgnoreProperties({ "username", "appointments", "password", "role" })
=======
    @JoinColumn(name = "userId")
=======
    @JoinColumn(name = "user_id")
>>>>>>> ec41372 (user feedback initialized)
    // @JsonManagedReference
    @JsonIgnoreProperties({ "username", "appointments", "password", "role" })
    // "mobile", "feedbackList" })
    private Users users;

    private String comments;
    private int rating;

    // Getters and setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Users getUsers() {
        return users;
    }

    public void setUsers(Users users) {
        this.users = users;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }
}
