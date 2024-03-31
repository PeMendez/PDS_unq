package com.example.pinandbuy_backend.controller

import com.example.pinandbuy_backend.DTO.Mapper
import com.example.pinandbuy_backend.DTO.RegisterDTO
import com.example.pinandbuy_backend.model.UserEntity
import com.example.pinandbuy_backend.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.web.bind.annotation.*
import javax.validation.Valid

@CrossOrigin
@RestController
class AuthController {

    @Autowired
    lateinit var userDao: UserRepository

    @Autowired
    lateinit var mapper: Mapper

    @GetMapping("/test")
    fun test():String{
        return "success"
    }

    @PostMapping("/register")
    fun register(@Valid @RequestBody userDTO: RegisterDTO): String{
        try {
            var user = mapper.fromRegisterDTOtoUser(userDTO)
            userDao.save(user)
            return "success"
        } catch (e: Exception){ return "fail"}

    }
}