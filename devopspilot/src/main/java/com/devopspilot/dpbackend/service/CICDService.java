package com.devopspilot.dpbackend.service;

import org.springframework.stereotype.Service;

@Service
public class CICDService {

    public String generateWorkflow(String language){

        if(language.equalsIgnoreCase("java")){
            return javaWorkflow();
        }

        if(language.equalsIgnoreCase("node")){
            return nodeWorkflow();
        }

        return "Unsupported Language";
    }

    private String javaWorkflow(){

        return """
name: Java CI

on:
  push:
    branches: [ main ]

  pull_request:
    branches: [ main ]

jobs:

  build:

    runs-on: ubuntu-latest

    steps:

    - uses: actions/checkout@v4

    - name: Set up JDK 17
      uses: actions/setup-java@v4
      with:
        java-version: '17'
        distribution: 'temurin'

    - name: Build
      run: mvn clean install
""";
    }

    private String nodeWorkflow(){

        return """
name: Node CI

on:
  push:
    branches: [ main ]

jobs:

  build:

    runs-on: ubuntu-latest

    steps:

    - uses: actions/checkout@v4

    - uses: actions/setup-node@v4
      with:
        node-version: 20

    - run: npm install

    - run: npm test
""";
    }

}
