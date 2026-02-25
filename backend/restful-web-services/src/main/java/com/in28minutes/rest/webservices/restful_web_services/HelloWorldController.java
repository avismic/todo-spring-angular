package com.in28minutes.rest.webservices.restful_web_services;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController 
public class HelloWorldController {
    
    @GetMapping("/hello-world")
    public String helloWorld() {
        return "Hello Abhishek Anand The Great";
    }
}
