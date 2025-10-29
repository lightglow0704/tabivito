package com.travelmanager.backend.dto;

public class RegisterReq {
    private String username;
    private String name;
    private String password;
    private String confirm;
    private String email;

    public RegisterReq() {}

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getConfirm() { return confirm; }
    public void setConfirm(String confirm) { this.confirm = confirm; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }
}
