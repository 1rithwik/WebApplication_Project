package com.example.ServiceCenterApplication.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.ServiceCenterApplication.model.Feedback;
import org.springframework.stereotype.Repository;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, Integer> {

}
