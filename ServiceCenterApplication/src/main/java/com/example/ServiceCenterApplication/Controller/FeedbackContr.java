package com.example.ServiceCenterApplication.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;

import com.example.ServiceCenterApplication.model.Feedback;
import com.example.ServiceCenterApplication.Service.FeedbackServ;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FeedbackContr {

    @Autowired
    private FeedbackServ feedbackServ;

    @PostMapping("/user/service/submitFeedback")
    public ResponseEntity<Feedback> postFeedback(@RequestBody FeedbackResponse feedbackResponse) {

        return ResponseEntity.ok(
                feedbackServ.postFeedback(feedbackResponse.userId, feedbackResponse.comments, feedbackResponse.rating));
    }

    @GetMapping("/admin/feedback/all")
    public List<Feedback> getFeedback() {
        return feedbackServ.getFeedback();
    }
}

class FeedbackResponse {
    int userId;
    String comments;
    int rating;

    // Getters and Setters
    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
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
