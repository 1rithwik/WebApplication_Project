package com.example.ServiceCenterApplication.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.List;

import com.example.ServiceCenterApplication.model.Feedback;
import com.example.ServiceCenterApplication.Service.FeedbackServ;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class FeedbackContr {

    @Autowired
    private FeedbackServ feedbackServ;

    @PostMapping("/feedback")
    public ResponseEntity<Feedback> postFeedback(@RequestBody Feedback feedback) {
        return ResponseEntity.ok(feedbackServ.postFeedback(feedback));
    }

    @GetMapping("/admin/feedback/all")
    public List<Feedback> getFeedback() {
        return feedbackServ.getFeedback();
    }
}
