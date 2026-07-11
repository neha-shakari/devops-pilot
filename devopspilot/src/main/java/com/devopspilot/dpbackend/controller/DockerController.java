package com.devopspilot.dpbackend.controller;

import com.devopspilot.dpbackend.dto.DockerRequest;
import com.devopspilot.dpbackend.service.AIService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/docker")
@CrossOrigin
public class DockerController {

    private final AIService aiService;

    public DockerController(AIService aiService) {
        this.aiService = aiService;
    }

    @PostMapping("/generate")
    public Map<String, String> generateDockerfile(@RequestBody DockerRequest request) {

        String dockerfile = aiService.generateDockerfile(request.getRepository());

        return Map.of(
                "dockerfile", dockerfile
        );
    }
}
