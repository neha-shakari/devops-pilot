package com.devopspilot.dpbackend.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://devops-pilot.vercel.app"
})
public class HealthController {

    @GetMapping("/api/health")
    public String health() {
        return "DevOpsPilot Backend Running!";
    }
}