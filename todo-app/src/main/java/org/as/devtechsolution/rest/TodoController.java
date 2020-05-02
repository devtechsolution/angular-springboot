package org.as.devtechsolution.rest;

import java.util.List;

import org.as.devtechsolution.bean.Todo;
import org.as.devtechsolution.service.TodoHardcodedService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class TodoController {
	
	@Autowired
	private TodoHardcodedService todoService;
	
	@GetMapping("/user/{username}/todos")
	public List<Todo> getTodos(@PathVariable String username){
		
		return todoService.findAll();
	}

}
