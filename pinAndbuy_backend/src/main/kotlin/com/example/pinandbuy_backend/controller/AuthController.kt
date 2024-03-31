package com.example.pinandbuy_backend.controller

import com.example.pinandbuy_backend.DTO.Mapper
import com.example.pinandbuy_backend.DTO.RegisterDTO
import com.example.pinandbuy_backend.model.UserEntity
import com.example.pinandbuy_backend.repository.UserRepository
import com.example.pinandbuy_backend.security.jwt.JwtUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RestController
import javax.validation.Valid

@RestController
class AuthController {

    @Autowired
    lateinit var userDao: UserRepository

    @Autowired
    lateinit var mapper: Mapper

    @Autowired
    lateinit var jwtUtils: JwtUtils

    @GetMapping("/test")
    fun test():String{
        return "success"
    }

    @PostMapping("/register")
    fun register(@Valid @RequestBody userDTO: RegisterDTO): String{
        try {
            var user = mapper.fromRegisterDTOtoUser(userDTO)
            var token = jwtUtils.generateAccessToken(user.username)
            userDao.save(user)
            return token
        } catch (e: Exception){ return "fail"}

    }
}