package com.devopspilot.dpbackend.controller;

import com.devopspilot.dpbackend.dto.LogRequest;
import com.devopspilot.dpbackend.service.AIService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/ai")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://devops-pilot.vercel.app"
})
public class AIController {

    private final AIService aiService;

    public AIController(AIService aiService) {
        this.aiService = aiService;
    }

    @PostMapping("/analyze")
    public String analyze(@RequestBody LogRequest request) {
        return aiService.analyzeLog(request.getLog());
    }
}
