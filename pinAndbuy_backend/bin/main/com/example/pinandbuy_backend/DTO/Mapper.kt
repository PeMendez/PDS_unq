package com.example.pinandbuy_backend.DTO

import com.example.pinandbuy_backend.model.UserEntity
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.stereotype.Component

@Component
class Mapper {


    @Autowired
    lateinit var encoder: PasswordEncoder

    fun fromRegisterDTOtoUser(dto: RegisterDTO): UserEntity{
        var user: UserEntity = UserEntity()
        user.username = dto.username
        user.password = encoder.encode(dto.password)
        return user
    }
}