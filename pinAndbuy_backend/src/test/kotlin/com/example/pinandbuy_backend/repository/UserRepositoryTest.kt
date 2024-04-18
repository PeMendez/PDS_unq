package com.example.pinandbuy_backend.repository

import com.example.pinandbuy_backend.model.UserEntity
import com.example.pinandbuy_backend.utils.UserBuilder
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.assertThrows
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.dao.DataIntegrityViolationException

@SpringBootTest
class UserRepositoryTest {

    @Autowired
    lateinit var userRepository: UserRepository

    @Test()
    fun `when two users with the same username are saved, an exception is raised`(){
        var user1: UserEntity = UserBuilder().registerUser()
        var user2: UserEntity = UserBuilder().registerUser()

        val errorMessage = assertThrows<DataIntegrityViolationException> {
            user1 = userRepository.save(user1)
            user2 = userRepository.save(user2)
        }.message

        assertTrue(errorMessage!!.contains("Duplicate entry"))
    }

    @Test
    fun `when a user with null values in required properties is saved, an exception is raised`(){
        var user: UserEntity = UserBuilder().withUsername("username").build()
        val expectedErrorMessage = ""

        val errorMessage = assertThrows<DataIntegrityViolationException>{
            userRepository.save(user)
        }.message

        assertTrue(errorMessage!!.contains("not-null property references a null or transient value"))
    }

    @Test
    fun `when a user is saved, an id is generated`(){
        val user: UserEntity = UserBuilder().registerUser()
        val savedUser = userRepository.save(user)

        assertEquals(savedUser.id, 1L)
    }

}