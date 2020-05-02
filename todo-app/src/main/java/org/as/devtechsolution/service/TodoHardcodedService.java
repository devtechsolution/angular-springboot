package org.as.devtechsolution.service;

import java.util.List;

import org.as.devtechsolution.bean.Todo;

public interface TodoHardcodedService {
	
	public List<Todo> findAll();
	
	public Todo deleteById(long id);
	
	public Todo findById(long id);
	
	

}
