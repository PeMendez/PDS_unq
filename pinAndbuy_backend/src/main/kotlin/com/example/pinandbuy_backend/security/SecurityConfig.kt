package com.example.pinandbuy_backend.security

import com.example.pinandbuy_backend.security.filters.JwtAuthenticationFilter
import com.example.pinandbuy_backend.security.jwt.JwtUtils
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.security.authentication.AuthenticationManager
import org.springframework.security.authentication.ProviderManager
import org.springframework.security.authentication.dao.DaoAuthenticationProvider
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.http.SessionCreationPolicy
import org.springframework.security.core.userdetails.UserDetailsService
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import org.springframework.security.crypto.password.PasswordEncoder
import org.springframework.security.web.SecurityFilterChain

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
class SecurityConfig {

    @Autowired
    lateinit var userDetailsService: UserDetailsService

    @Autowired
    lateinit var jwtUtils: JwtUtils

    @Bean
    fun securityFilterChain(httpSecurity: HttpSecurity, authenticationManager: AuthenticationManager): SecurityFilterChain{

        var jwtAuthenticationFilter: JwtAuthenticationFilter = JwtAuthenticationFilter(jwtUtils)
        jwtAuthenticationFilter.setAuthenticationManager(authenticationManager)
        jwtAuthenticationFilter.setFilterProcessesUrl("/login")
        return httpSecurity.let{
            it.csrf { it.disable() }
            it.authorizeHttpRequests {
                it.requestMatchers("/register").permitAll()
                it.anyRequest().authenticated()
            }
            it.sessionManagement {
                it.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
            }
            it.addFilter(jwtAuthenticationFilter)
            it.build()
        }
    }

    @Bean
    fun authenticationManager(userDetailsService: UserDetailsService, passwordEncoder: PasswordEncoder): AuthenticationManager{
        var authenticationProvider: DaoAuthenticationProvider = DaoAuthenticationProvider()
        authenticationProvider.setUserDetailsService(userDetailsService)
        authenticationProvider.setPasswordEncoder(passwordEncoder)
        return ProviderManager(authenticationProvider)
    }

    @Bean
    fun  passwordEncoder(): PasswordEncoder {
        return BCryptPasswordEncoder()
    }
}