package com.example.ServiceCenterApplication.Config;

import com.github.benmanes.caffeine.cache.Caffeine;
import org.springframework.cache.CacheManager;
import org.springframework.cache.caffeine.CaffeineCacheManager;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import java.util.concurrent.TimeUnit;
import org.springframework.context.annotation.Primary;

@Configuration
public class CacheConfig {

    @Bean
    @Primary
    public CacheManager cacheManager() {
        CaffeineCacheManager cacheManager = new CaffeineCacheManager("userAppointmentsCache");
        cacheManager.setCaffeine(Caffeine.newBuilder().maximumSize(100).expireAfterWrite(60, TimeUnit.MINUTES));
        return cacheManager;
    }

    @Bean
    public CacheManager userCacheManager() {
        CaffeineCacheManager cacheManager = new CaffeineCacheManager("userCache");
        cacheManager.setCaffeine(Caffeine.newBuilder().maximumSize(100).expireAfterWrite(30, TimeUnit.MINUTES));
        return cacheManager;
    }
}
