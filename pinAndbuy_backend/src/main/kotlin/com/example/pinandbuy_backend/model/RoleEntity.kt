package com.example.pinandbuy_backend.model

import jakarta.persistence.*

@Entity
class RoleEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null
    @Enumerated(EnumType.STRING)
    lateinit var role: Profile

}