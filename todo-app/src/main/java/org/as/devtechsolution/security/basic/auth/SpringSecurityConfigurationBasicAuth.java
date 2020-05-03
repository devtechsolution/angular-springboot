package org.as.devtechsolution.security.basic.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SpringSecurityConfigurationBasicAuth extends WebSecurityConfigurerAdapter{
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http
			.csrf().disable()
			.authorizeRequests()
			.antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
				.anyRequest().authenticated()
				.and()
			//.formLogin().and()
			.httpBasic();
	}
	
	/*
	 * protected void configure(HttpSecurity http) throws Exception { logger.
	 * debug("Using default configure(HttpSecurity). If subclassed this will potentially override subclass configure(HttpSecurity)."
	 * );
	 * 
	 * http .authorizeRequests() .anyRequest().authenticated() .and()
	 * .formLogin().and() .httpBasic(); }
	 */
}
