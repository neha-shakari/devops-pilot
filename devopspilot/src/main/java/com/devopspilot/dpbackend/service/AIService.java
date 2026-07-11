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
}
