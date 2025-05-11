package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {
  @Autowired
  private UserService svc;

  @PostMapping("/signup")
  public String signup(@RequestBody User u) {
    return svc.register(u);
  }

  @PostMapping("/signin")
  public String signin(@RequestBody User u) {
    return svc.login(u.getEmail(), u.getPassword());
  }
}
