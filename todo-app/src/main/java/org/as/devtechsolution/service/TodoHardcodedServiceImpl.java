package org.as.devtechsolution.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.function.Predicate;

import org.as.devtechsolution.bean.Todo;
import org.springframework.stereotype.Service;

@Service
public class TodoHardcodedServiceImpl implements TodoHardcodedService{
	
	private static List<Todo> todos= new ArrayList<>();
	private static int idCounter= 0;
	
	static {
		todos.add(new Todo(++idCounter, "devtechsolution", "Learn Angular", new Date(), false));
		todos.add(new Todo(++idCounter, "devtechsolution", "Learn Angula Fullstack", new Date(), false));
		todos.add(new Todo(++idCounter, "devtechsolution", "Learn Spring Boot", new Date(), false));
		todos.add(new Todo(++idCounter, "devtechsolution", "Learn Microservices", new Date(), false));
		
	}

	@Override
	public List<Todo> findAll() {
		// TODO Auto-generated method stub
		return todos;
	}

	@Override
	public Todo deleteById(long id) {
		Todo todo= findById(id);
		
		if(todo==null) { 
			return null;
		}else if(todos.remove(todo)) {
			return todo;
		}
		return null;
	}

	@Override
	public Todo findById(long id) {
		
		for (Todo todo : todos) {
			if(todo.getId()== id) {
				return todo;
			}
		}
		return null;
	}
	
	

}
