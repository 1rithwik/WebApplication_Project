package com.example.ServiceCenterApplication.model;
public class TimeSlotDTO {
    private String time;
    private String displayTime;
    private boolean available = true;
    
    // Constructor, getters, and setters
    public TimeSlotDTO(String time, String displayTime) {
        this.time = time;
        this.displayTime = displayTime;
    }
    public TimeSlotDTO(String time, String displayTime, boolean available) {
        this.available = available;
    }   
    public String getTime() {
        return time;
    }
    public String getDisplayTime() {
        return displayTime;
    }
    public boolean isAvailable() {
        return available;
    }
    public void setTime(String time) {
        this.time = time;
    }
    public void setDisplayTime(String displayTime) {
        this.displayTime = displayTime;
    }
    public void setAvailable(boolean available) {
        this.available = available;
    }
}