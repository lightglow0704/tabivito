package com.travelmanager.backend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

// 전역 예외 처리기
@RestControllerAdvice
public class GlobalExceptionHandler {

    // 단순 검증 실패 등
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ErrorResponse> handleIllegalArgument(IllegalArgumentException e) {
        return ResponseEntity
                .badRequest()
                .body(new ErrorResponse(e.getMessage()));
    }

    // 그 외 모든 예외(선택)
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleAll(Exception e) {
        return ResponseEntity
                .internalServerError()
                .body(new ErrorResponse("서버 오류가 발생했습니다.", e.getMessage()));
    }

    // --- 에러 응답 DTO ---
    public static class ErrorResponse {
        private String message;
        private String detail;

        public ErrorResponse() {}
        public ErrorResponse(String message) { this.message = message; }
        public ErrorResponse(String message, String detail) {
            this.message = message; this.detail = detail;
        }

        public String getMessage() { return message; }
        public void setMessage(String message) { this.message = message; }
        public String getDetail() { return detail; }
        public void setDetail(String detail) { this.detail = detail; }
    }
}
