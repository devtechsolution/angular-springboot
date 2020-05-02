package org.as.devtechsolution.rest;

import org.as.devtechsolution.bean.HelloWorldBean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins= {"http://localhost:4200"})
public class HelloWorldController {
	
	@GetMapping(path="/hello-world")
	private String helloWorld() {
		return "Hello World Backend";

	}
	
	
	@GetMapping(path="/hello-world-bean")
	private HelloWorldBean helloWorldBean() {
		return new HelloWorldBean("Hello World");

	}
	
	@GetMapping(path="/hello-world/path-variable/{name}")
	private HelloWorldBean helloWorldPathVariable(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name));

	}

}
