package com.example.pinandbuy_backend.utils

import com.example.pinandbuy_backend.model.UserEntity
import io.jsonwebtoken.security.Password
import javax.validation.constraints.Email

class UserBuilder() {

    private var id: Long? = null
    private var username: String? = null
    private var password: String? = null
    private var email: String? = null
    private var image: String? = null

    fun registerUser(): UserEntity{
        return UserEntity("username", "password", "email", null)
    }
    fun build(): UserEntity {
        return UserEntity(username, password, email, image)
    }
    fun withId(id: Long): UserBuilder {
        this.id = id
        return this
    }
    fun withUsername(username: String): UserBuilder {
        this.username = username
        return this
    }
    fun withPassword(password: String): UserBuilder {
        this.password = password
        return this
    }
    fun withEmail(email: String): UserBuilder {
        this.email = email
        return this
    }
    fun withImage(image: String): UserBuilder {
        this.image = image
        return this
    }

}