package com.example.pinandbuy_backend.service

import com.example.pinandbuy_backend.model.UserEntity
import com.example.pinandbuy_backend.repository.UserRepository
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.security.core.GrantedAuthority
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.userdetails.User
import org.springframework.security.core.userdetails.UserDetails
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.core.userdetails.UsernameNotFoundException
import org.springframework.stereotype.Service

@Service
class UserDetailServiceimpl : UserDetailsService{

    @Autowired
    lateinit var userDao: UserRepository

    override fun loadUserByUsername(username: String?): UserDetails {
        var userdetails: UserEntity = userDao.findByUsername(username!!).orElseThrow {
            throw UsernameNotFoundException("El usuario no existe")
        }
        var authorities: Set<GrantedAuthority> = userdetails.profile.map { SimpleGrantedAuthority("ROLE_${it.name}") }.toSet()
        println("sarasa")
        return User(userdetails.username, userdetails.password, true, true, true, true, authorities)
    }
}