package com.travelmanager.backend.controller;

import com.travelmanager.backend.dto.LoginReq;
import com.travelmanager.backend.dto.RegisterReq;
import com.travelmanager.backend.dto.UserDto;
import com.travelmanager.backend.model.User;
import com.travelmanager.backend.service.UserService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserService userService;
    private static final Pattern USERNAME_RULE =
            Pattern.compile("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z0-9_]{6,20}$");

    @PostMapping("/register")
    public String register(@RequestBody RegisterReq req) {
        if (req.getPassword() == null || !req.getPassword().equals(req.getConfirm())) {
            throw new IllegalArgumentException("비밀번호 확인이 일치하지 않습니다.");
        }
        userService.register(req.getUsername(), req.getName(), req.getPassword(), req.getEmail());
        return "OK";
    }

    // 아이디 중복 체크: { "available": true/false } 로 항상 JSON 반환
    @GetMapping("/check/{username}")
    public Map<String, Object> checkUsername(@PathVariable("username") String username) {
        Map<String, Object> res = new HashMap<>();
        if (!USERNAME_RULE.matcher(username).matches()) {
            res.put("available", false);
            res.put("message", "아이디 형식이 올바르지 않습니다. (6~20자, 영문 + 숫자 필수)");
            return res;
        }
        boolean available = !userService.existsByUsername(username);
        res.put("available", available);
        if (!available) res.put("message", "이미 사용 중인 아이디입니다.");
        return res;
    }





    @PostMapping("/login")
    public UserDto login(@RequestBody LoginReq req, HttpSession session) {
        User u = userService.login(req.getUsername(), req.getPassword());
        session.setAttribute("LOGIN_USER", u.getUsername());
        return new UserDto(u.getUsername(), u.getName(), u.getEmail());
    }

    @PostMapping("/logout")
    public String logout(HttpSession session) {
        session.invalidate();
        return "OK";
    }

    @GetMapping("/me")
    public UserDto me(HttpSession session) {
        String username = (String) session.getAttribute("LOGIN_USER");
        if (username == null) return null;
        User u = userService.getByUsername(username);
        return new UserDto(u.getUsername(), u.getName(), u.getEmail());
    }

    // AuthController.java
    @DeleteMapping("/delete")
    public String deleteUser(HttpSession session) {
        String username = (String) session.getAttribute("LOGIN_USER");
        if (username == null) throw new IllegalArgumentException("로그인 상태가 아닙니다.");
        userService.deleteByUsername(username);
        session.invalidate();
        return "OK";
    }

}
