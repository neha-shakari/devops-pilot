package com.devopspilot.dpbackend.controller;

import com.devopspilot.dpbackend.dto.KubernetesRequest;
import com.devopspilot.dpbackend.service.KubernetesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/kubernetes")
@CrossOrigin(origins="*")
public class KubernetesController {

    @Autowired
    KubernetesService service;

    @PostMapping("/generate")
    public String generate(
            @RequestBody KubernetesRequest request){

        return service.generateYaml(
                request.getAppName(),
                request.getImage()
        );

    }

}