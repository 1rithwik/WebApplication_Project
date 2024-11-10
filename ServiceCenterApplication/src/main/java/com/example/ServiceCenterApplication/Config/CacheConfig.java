package com.example.ServiceCenterApplication.Config;

import com.github.benmanes.caffeine.cache.Caffeine;
import org.springframework.cache.CacheManager;
import org.springframework.cache.caffeine.CaffeineCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.concurrent.TimeUnit;

@Configuration
public class CacheConfig {

    @Bean
    public CacheManager cacheManager() {
        CaffeineCacheManager cacheManager = new CaffeineCacheManager("userAppointmentsCache");
        cacheManager.setCaffeine(Caffeine.newBuilder().maximumSize(1000).expireAfterWrite(10, TimeUnit.MINUTES));
        return cacheManager;
    }
}
