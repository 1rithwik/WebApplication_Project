package com.example.ServiceCenterApplication.Service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

import com.example.ServiceCenterApplication.Repository.FeedbackRepo;
import com.example.ServiceCenterApplication.model.Feedback;
import com.example.ServiceCenterApplication.model.Users;
import com.example.ServiceCenterApplication.Repository.UserRepo;

@Service
public class FeedbackServ {

    @Autowired
    private FeedbackRepo feedbackRepo;

    @Autowired
    private UserRepo userRepo;

    public Feedback postFeedback(int userId, String comments, int rating) {
        Long userIdLong = Long.valueOf(userId);
        Users user = userRepo.findById(userIdLong).orElse(null);
        Feedback feedback = new Feedback();
        feedback.setUsers(user);
        feedback.setComments(comments);
        feedback.setRating(rating);
        return feedbackRepo.save(feedback);
    }

    public List<Feedback> getFeedback() {
        return feedbackRepo.findAll();
    }
}
