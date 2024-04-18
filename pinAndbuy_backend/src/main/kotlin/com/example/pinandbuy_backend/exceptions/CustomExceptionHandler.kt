package com.example.pinandbuy_backend.exceptions

import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.core.Ordered
import org.springframework.http.ResponseEntity
import org.springframework.http.converter.HttpMessageNotReadableException
import org.springframework.web.bind.annotation.ControllerAdvice
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.servlet.ModelAndView
import org.springframework.web.servlet.mvc.support.DefaultHandlerExceptionResolver

@RestController
@ControllerAdvice
class CustomExceptionHandler {

    @ExceptionHandler(Exception:: class)
    fun handleException(): ResponseEntity<String>{
        return ResponseEntity.ok("asd")
    }

}