package com.example.ServiceCenterApplication.Service;

import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

import com.example.ServiceCenterApplication.Repository.FeedbackRepo;
import com.example.ServiceCenterApplication.model.Feedback;

@Service
public class FeedbackServ {

    @Autowired
    private FeedbackRepo feedbackRepo;

    public Feedback postFeedback(Feedback feedback) {
        return feedbackRepo.save(feedback);
    }

    public List<Feedback> getFeedback() {
        return feedbackRepo.findAll();
    }
}
