package com.in28minutes.rest.webservices.restful_web_services.todo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ToDoResource {

    @Autowired
    private TodoHardcodedService todoService;
    
    @GetMapping(path = "/users/{username}/todos")
    public List<Todo> getAllTodos(@PathVariable String username){
        return todoService.findAll();
    }
}
