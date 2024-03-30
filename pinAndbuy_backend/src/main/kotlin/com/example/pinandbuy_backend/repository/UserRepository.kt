package com.example.pinandbuy_backend.repository

import com.example.pinandbuy_backend.model.UserEntity
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository
import java.util.Optional

@Repository
interface UserRepository : CrudRepository<UserEntity,Long> {

    fun findByUsername(username: String): Optional<UserEntity>;

}