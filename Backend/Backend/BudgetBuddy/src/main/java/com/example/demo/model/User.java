package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String fullname;
  @Column(unique = true)
  private String email;
  private String password;
  private String accountNumber;
  private String ifsc;

  public Long getId() { return id; }
  public void setId(Long id) { this.id = id; }
  public String getFullname() { return fullname; }
  public void setFullname(String fullname) { this.fullname = fullname; }
  public String getEmail() { return email; }
  public void setEmail(String email) { this.email = email; }
  public String getPassword() { return password; }
  public void setPassword(String password) { this.password = password; }
  public String getAccountNumber() { return accountNumber; }
  public void setAccountNumber(String accountNumber) { this.accountNumber = accountNumber; }
  public String getIfsc() { return ifsc; }
  public void setIfsc(String ifsc) { this.ifsc = ifsc; }
}
