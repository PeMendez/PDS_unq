package com.example.pinandbuy_backend.service

import com.example.pinandbuy_backend.exceptions.UserCannotBeRegisteredException
import com.example.pinandbuy_backend.exceptions.UsernameAlreadyTakenException
import com.example.pinandbuy_backend.model.UserEntity
import com.example.pinandbuy_backend.repository.UserRepository
import jakarta.transaction.Transactional
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.dao.DataIntegrityViolationException
import org.springframework.stereotype.Service

@Service
@Transactional
class AuthService {

    @Autowired
    lateinit var userRepository: UserRepository
    fun register(user: UserEntity){
        try{
            userRepository.save(user)
        } catch (e: DataIntegrityViolationException) {
            var message = e
            when {
                message.message!!.contains("Duplicate entry") -> throw UsernameAlreadyTakenException("Username ${user.username} has already been taken")
                message.message!!.contains("not-null property references a null or transient value") -> throw UserCannotBeRegisteredException("Username, Password and Email are required fields")

            }
        }
    }
    fun getUserByUsername(username: String): UserEntity {
        return userRepository.findByUsername(username).get()
    }
}