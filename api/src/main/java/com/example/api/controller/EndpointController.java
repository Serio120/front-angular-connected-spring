package com.example.api.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/endpoint")
@CrossOrigin // Permite CORS
public class EndpointController {

    @GetMapping
    public String getEndpoint() {
        return "Soy un endpoint GET";
    }

    @PostMapping
    public String postEndpoint() {
        return "Soy un endpoint POST";
    }

    @PutMapping
    public String putEndpoint() {
        return "Soy un endpoint PUT";
    }

    @PatchMapping
    public String patchEndpoint() {
        return "Soy un endpoint PATCH";
    }

    @DeleteMapping
    public String deleteEndpoint() {
        return "Soy un endpoint DELETE";
    }
}
