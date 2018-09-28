package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< HEAD
import org.springframework.stereotype.Controller;
=======
>>>>>>> staging
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.SocialWorker;
import com.revature.data.SocialWorkerHibernate;
<<<<<<< HEAD
@CrossOrigin(origins="http://localhost:4200")
@Controller
=======

@CrossOrigin(origins="http://localhost:4200")
@RestController
>>>>>>> staging
@RequestMapping(value="/login")
public class LoginController {
	
	@Autowired
	private SocialWorkerHibernate swh;
	
/*	@RequestMapping(method=RequestMethod.GET)
	public String goLogin(HttpSession session) {
		if(session.getAttribute("user")!=null)
			return "redirect:home";
		return "static/login.html";
	}*/

	@RequestMapping(method=RequestMethod.POST)
	public SocialWorker login(String username, String password, HttpSession session) {
		SocialWorker u = swh.getByLogin(username,  password);
		return u;
	}
	
	@RequestMapping(value="/hello", method=RequestMethod.GET)
	public String byPassLogin() {
		return "/static/hello.html";
	}
}
