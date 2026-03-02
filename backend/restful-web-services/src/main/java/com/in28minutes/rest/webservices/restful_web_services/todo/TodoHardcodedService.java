package com.in28minutes.rest.webservices.restful_web_services.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedService {

    private static List<Todo> todos = new ArrayList<Todo>();
    private static int idCounter = 0;

    static {
        todos.add(new Todo(++idCounter, "avismic", "Learn to Dance", new Date(), false));
        todos.add(new Todo(++idCounter, "avismic", "Learn Spring Boot", new Date(), false));
        todos.add(new Todo(++idCounter, "avismic", "Learn to Angular", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }
}
