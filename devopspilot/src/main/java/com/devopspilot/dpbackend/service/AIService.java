package com.devopspilot.dpbackend.service;

import com.google.genai.Client;
import org.springframework.stereotype.Service;
import com.google.genai.types.GenerateContentResponse;

@Service
public class AIService {

    private final Client client;

    public AIService(Client client) {
        this.client = client;
    }

    public String analyzeLog(String log) {

        String prompt = """
You are a Senior DevOps Engineer.

Analyze the following application log.

Return ONLY in this format:

Problem:
...

Root Cause:
...

Solution:
...

Best Practices:
...

Keep the answer under 200 words.

Log:
""" + log;

        try {

            GenerateContentResponse response =
                    client.models.generateContent(
                            "models/gemini-3-flash-preview",
                            prompt,
                            null
                    );

            return response.text();

        } catch (Exception e) {

            return "Error communicating with Gemini: " + e.getMessage();

        }
    }


    public String generateDockerfile(String repository) {

        String prompt = """
You are an expert DevOps engineer.

Generate a production-ready Dockerfile for the following project.

The input can be:
- GitHub repository URL
- pom.xml
- package.json

Identify the technology stack and generate the correct Dockerfile.

Rules:
- Return ONLY the Dockerfile.
- Do not add explanations.
- Do not use markdown code blocks.

Project input:
""" + repository;

        try {

            GenerateContentResponse response =
                    client.models.generateContent(
                            "models/gemini-3-flash-preview",
                            prompt,
                            null
                    );

            return response.text();

        } catch (Exception e) {

            return "Error communicating with Gemini: " + e.getMessage();

        }
    }
}
