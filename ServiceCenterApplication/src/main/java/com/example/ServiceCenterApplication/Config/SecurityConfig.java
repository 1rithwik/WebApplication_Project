package com.example.ServiceCenterApplication.Config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;

import org.springframework.security.core.userdetails.*;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Autowired
    private JwtFilter jwtFilter;

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
<<<<<<< HEAD
    public SecurityFilterChain securityFilterChain(HttpSecurity httpsec) throws Exception {

        httpsec
                .csrf(customizer -> customizer.disable())
                .authorizeHttpRequests(request -> request
                        .requestMatchers("login", "register", "home")
                        .permitAll()
                        .anyRequest().authenticated())// any request is authenticated
                // like when you login from
                // different browser, it should
                // ask login
                // .formLogin(Customizer.withDefaults())// enabling the form login
                .httpBasic(Customizer.withDefaults())
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));// session
        // creation policy is stateless i.e every request new session is created

        return httpsec.build();
    }
=======
>>>>>>> e4bde25 (Appointment Implemented for admin)
    // public SecurityFilterChain securityFilterChain(HttpSecurity httpsec) throws
    // Exception {

    // httpsec
    // .csrf(customizer -> customizer.disable())
    // .authorizeHttpRequests(request -> request
    // .requestMatchers("login", "register")
    // .permitAll()
    // .requestMatchers("/admin/**").hasRole("ADMIN")
    // .anyRequest().authenticated())// any request is authenticated
    // // like when you login from
    // // different browser, it should
    // // ask login
    // // .formLogin(Customizer.withDefaults())// enabling the form login
    // .httpBasic(Customizer.withDefaults())
    // .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class)
    // .sessionManagement(session ->
    // session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));// session
    // // creation policy is stateless i.e every request new session is created

    // return httpsec.build();
    // }
    public SecurityFilterChain securityFilterChain(HttpSecurity httpsec) throws Exception {
        httpsec
                .csrf(customizer -> customizer.disable())
                .authorizeHttpRequests(request -> request
                        .anyRequest().permitAll())
                .httpBasic(Customizer.withDefaults());

        return httpsec.build();
    }

    // @Bean
    // public UserDetailsService userDetailsService() {

    // UserDetails user1 = org.springframework.security.core.userdetails.User
    // .withDefaultPasswordEncoder()
    // .username("varun")
    // .password("v@123")
    // .roles("USER")
    // .build();

    // UserDetails user2 = org.springframework.security.core.userdetails.User
    // .withDefaultPasswordEncoder()
    // .username("harsh")
    // .password("h@123")
    // .roles("ADMIN")
    // .build();

    // return new InMemoryUserDetailsManager(user1, user2);
    // }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(new BCryptPasswordEncoder(12));
        provider.setUserDetailsService(userDetailsService);
        return provider;

    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();

    }

}
