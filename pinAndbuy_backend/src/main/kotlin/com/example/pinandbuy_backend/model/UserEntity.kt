package com.example.pinandbuy_backend.model

import jakarta.persistence.*

@Entity
class UserEntity(

    @Column(nullable = false, unique = true)
    var username: String?,
    @Column(nullable = false)
    var password: String?,
    @Column(nullable = false)
    var email: String?,
    var image: String?
) {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    var id: Long? = null


    @ManyToMany(fetch = FetchType.EAGER, targetEntity = RoleEntity :: class, cascade = arrayOf(CascadeType.PERSIST))
    @JoinTable(name = "user_profile",
               joinColumns = [JoinColumn(name = "user_id")],
               inverseJoinColumns = [JoinColumn(name = "profile_id")])
    var profile: Set<Profile> = mutableSetOf()
}