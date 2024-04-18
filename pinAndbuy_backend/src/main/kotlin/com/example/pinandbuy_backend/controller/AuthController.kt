package com.example.pinandbuy_backend.controller

import com.example.pinandbuy_backend.DTO.LoginDTO
import com.example.pinandbuy_backend.DTO.Mapper
import com.example.pinandbuy_backend.DTO.RegisterDTO
import com.example.pinandbuy_backend.model.UserEntity
import com.example.pinandbuy_backend.security.jwt.JwtUtils
import com.example.pinandbuy_backend.service.AuthService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.bind.annotation.ExceptionHandler
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.server.ResponseStatusException
import org.springframework.web.servlet.mvc.support.DefaultHandlerExceptionResolver
import org.xml.sax.helpers.DefaultHandler

@RestController
class AuthController {

    @Autowired
    lateinit var userService: AuthService
    @Autowired
    lateinit var mapper: Mapper

    @Autowired
    lateinit var jwtUtils: JwtUtils

    @Autowired
    lateinit var authenticationManager: AuthenticationManager

    @Autowired
    lateinit var passwordEncoder: PasswordEncoder

    @GetMapping("/test")
    fun test():String{
        return "success"
    }

    @PostMapping("/register")
    @ExceptionHandler(Exception:: class)
    fun register(@RequestBody userDTO: RegisterDTO): ResponseEntity<String>{
        val user = mapper.fromRegisterDTOtoUser(userDTO)
        var token = jwtUtils.generateAccessToken(user.username!!)
        userService.register(user)
        return ResponseEntity.ok().body(token)
    }

    @PostMapping("/login")
    fun login(@RequestBody loginDTO: LoginDTO): ResponseEntity<String>{
        try{
            authenticationManager.authenticate(
                UsernamePasswordAuthenticationToken(
                    loginDTO.username,
                    loginDTO.password
                )
            )
            val user: UserEntity = userService.getUserByUsername(loginDTO.username)
            var token = jwtUtils.generateAccessToken(loginDTO.username)
            return ResponseEntity.ok(token)
        } catch (e: Exception){
            throw e
        }

    }

}