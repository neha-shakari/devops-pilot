package com.devopspilot.dpbackend.service;

import org.springframework.stereotype.Service;

@Service
public class KubernetesService {

    public String generateYaml(String appName, String image){

        return """
apiVersion: apps/v1
kind: Deployment

metadata:
  name: %s

spec:
  replicas: 2

  selector:
    matchLabels:
      app: %s

  template:

    metadata:
      labels:
        app: %s

    spec:

      containers:

      - name: %s
        image: %s

        ports:

        - containerPort: 8080

---

apiVersion: v1
kind: Service

metadata:
  name: %s-service

spec:

  selector:
    app: %s

  ports:

  - port: 80
    targetPort: 8080

  type: ClusterIP
"""
                .formatted(
                        appName,
                        appName,
                        appName,
                        appName,
                        image,
                        appName,
                        appName
                );

    }

}
