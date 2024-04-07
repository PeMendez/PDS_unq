package com.example.pinandbuy_backend.model

import jakarta.persistence.*

@Entity
class UserEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null
    lateinit var username: String
    lateinit var password: String

    @ManyToMany(fetch = FetchType.EAGER, targetEntity = RoleEntity :: class, cascade = arrayOf(CascadeType.PERSIST))
    @JoinTable(name = "user_profile",
               joinColumns = [JoinColumn(name = "user_id")],
               inverseJoinColumns = [JoinColumn(name = "profile_id")])
    var profile: Set<Profile> = HashSet()
}