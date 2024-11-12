package com.example.ServiceCenterApplication.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.ServiceCenterApplication.model.Users;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<Users, Long> {
    Users findByUsername(String username);

}
