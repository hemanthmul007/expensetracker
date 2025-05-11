package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
  @Autowired
  private UserRepository repo;

  public String register(User u) {
    if (repo.existsByEmail(u.getEmail())) {
      return "401::Email already exists";
    }
    repo.save(u);
    return "200::User registered successfully";
  }

  public String login(String email, String rawPassword) {
    boolean ok = repo.validateCredentials(email, rawPassword);
    return ok ? "200::Login successful" : "401::Invalid credentials";
  }
}
