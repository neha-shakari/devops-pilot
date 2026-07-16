package com.devopspilot.dpbackend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.devopspilot.dpbackend.service.CICDService;
import com.devopspilot.dpbackend.dto.CICDRequest;

@RestController
@RequestMapping("/api/cicd")
@CrossOrigin(origins = "*")
public class CICDController {

    @Autowired
    private CICDService service;

    @PostMapping("/generate")
    public String generate(@RequestBody CICDRequest request){

        return service.generateWorkflow(request.getLanguage());

    }

}
