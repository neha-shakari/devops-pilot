package com.devopspilot.dpbackend.dto;

import lombok.Data;
import java.util.List;

@Data
public class GithubAnalysisResponse {

    private String language;
    private String framework;
    private String buildTool;

    private boolean docker;
    private boolean cicd;
    private boolean kubernetes;

    private List<String> recommendations;

}
