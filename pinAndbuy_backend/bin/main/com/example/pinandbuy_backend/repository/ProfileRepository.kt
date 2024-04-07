package com.example.pinandbuy_backend.repository

import com.example.pinandbuy_backend.model.Profile
import com.example.pinandbuy_backend.model.RoleEntity
import org.springframework.data.repository.CrudRepository
import org.springframework.stereotype.Repository

@Repository
interface ProfileRepository : CrudRepository<RoleEntity, Long>{

}