package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class HomeController {

	@RequestMapping(value="/home", method=RequestMethod.GET)
	public String getHomepage(HttpSession s) {
		if(s.getAttribute("user")!=null)
			return "static/hello.html";
		else
			return "redirect:login";
	}
	
	
	@RequestMapping(value="/viewAllCases", method=RequestMethod.GET)
	public String viewAllCases(HttpSession s) {
			return "static/viewAllCases.html";
	}
	
	@RequestMapping(value="/logout", method=RequestMethod.POST)
	public String logout(HttpSession s) {
		s.invalidate();
		return "redirect:login";
		
	}
}
