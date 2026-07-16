package com.devopspilot.dpbackend.controller;

import com.devopspilot.dpbackend.dto.GithubRequest;
import com.devopspilot.dpbackend.service.AIService;
import org.springframework.web.bind.annotation.*;
import com.devopspilot.dpbackend.dto.GithubAnalysisResponse;


import java.util.Map;

@RestController
@RequestMapping("/api/github")
@CrossOrigin
public class GithubController {

    private final AIService aiService;

    public GithubController(AIService aiService) {
        this.aiService = aiService;
    }


    @PostMapping("/analyze")
    public Map<String,String> analyzeRepository(
            @RequestBody GithubRequest request
    ){

        String analysis =
                aiService.analyzeRepository(
                        request.getRepository()
                );

        return Map.of(
                "analysis",
                analysis
        );
    }
}