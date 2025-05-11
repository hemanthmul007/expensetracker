package com.example.demo.repository;

import com.example.demo.model.User;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User, Long> {
  @Query("SELECT count(u)>0 FROM User u WHERE u.email = :email")
  boolean existsByEmail(@Param("email") String email);

  @Query("SELECT count(u)>0 FROM User u WHERE u.email = :email AND u.password = :password")
  boolean validateCredentials(@Param("email") String email,
                              @Param("password") String password);
}
