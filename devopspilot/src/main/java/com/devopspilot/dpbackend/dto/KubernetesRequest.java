package com.devopspilot.dpbackend.dto;

import lombok.Data;

@Data
public class KubernetesRequest {

    private String appName;
    private String image;

}
