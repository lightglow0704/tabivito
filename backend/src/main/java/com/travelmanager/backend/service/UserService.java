package com.travelmanager.backend.service;

import com.travelmanager.backend.model.User;
import com.travelmanager.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import java.util.Locale;
import java.util.regex.Pattern;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository repo;

    private static final Pattern USERNAME_RULE =
            Pattern.compile("^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z0-9_]{6,20}$");

    public void register(String username, String name, String password, String email) {
        if (username == null || !USERNAME_RULE.matcher(username).matches()) {
            throw new IllegalArgumentException("아이디 형식이 올바르지 않습니다. (6~20자, 영문 + 숫자 필수)");
        }

        String uname = username.trim().toLowerCase(Locale.ROOT);
        User u = new User();
        u.setUsername(uname);
        u.setName(name);
        u.setPassword(password);
        u.setEmail(email);

        try {
            repo.save(u);
        } catch (DataIntegrityViolationException e) {
            throw new IllegalArgumentException("이미 사용 중인 아이디입니다.");
        }
    }

    /** 로그인: 소문자로 통일해서 조회 후 비밀번호 비교 */
    public User login(String username, String password) {
        String uname = username == null ? null : username.toLowerCase(Locale.ROOT);

        User u = repo.findByUsername(uname)
                .orElseThrow(() -> new IllegalArgumentException("아이디 또는 비밀번호가 올바르지 않습니다."));

        if (!password.equals(u.getPassword())) {
            throw new IllegalArgumentException("아이디 또는 비밀번호가 올바르지 않습니다.");
        }
        return u;
    }

    /** 회원탈퇴: username을 소문자로 통일하여 조회 후 id로 삭제 */
    public void deleteByUsername(String username) {
        String uname = username == null ? null : username.toLowerCase(Locale.ROOT);

        User user = repo.findByUsername(uname)
                .orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다."));
        repo.deleteById(user.getId());
    }

    /** 내 정보 조회 */
    public User getByUsername(String username) {
        String uname = username == null ? null : username.toLowerCase(Locale.ROOT);
        return repo.findByUsername(uname).orElse(null);
    }

    /** 아이디 존재 여부 (중복 체크용) */
    public boolean existsByUsername(String username) {
        String uname = username == null ? null : username.toLowerCase(Locale.ROOT);
        return repo.existsByUsername(uname); // true = 이미 존재
    }
}
