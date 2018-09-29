package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Cases;
import com.revature.beans.SocialWorker;
import com.revature.data.CasesHibernate;
import com.revature.data.SocialWorkerHibernate;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(value="/login")
public class LoginController {
	
	@Autowired
	private SocialWorkerHibernate swh;
	@Autowired
	private CasesHibernate ch;
/*	@RequestMapping(method=RequestMethod.GET)
	public String goLogin(HttpSession session) {
		if(session.getAttribute("user")!=null)
			return "redirect:home";
		return "static/login.html";
	}*/
	@RequestMapping( method = RequestMethod.GET)
	public @ResponseBody List<Cases> processViewAllCasesRequest(HttpSession s) {
		

		SocialWorker sw = (SocialWorker) s.getAttribute("user");
		List<Cases> casesList = new ArrayList<>();
		if (sw.getIsadmin() == 1)
			casesList = ch.getAll();
		else if (sw.getIsadmin() == 0)
			casesList = ch.getBySocialWorkerId(sw.getId());

	    return casesList;
	}

	@RequestMapping(method=RequestMethod.POST)
	public SocialWorker login(String username, String password, HttpSession session) {
		System.out.println(session.getAttribute("user"));
		SocialWorker u = swh.getByLogin(username,  password);
		if(u!=null)session.setAttribute("user", u);
		System.out.println(session.getAttribute("user"));
		return u;
	}
	
	@RequestMapping(value="/hello", method=RequestMethod.GET)
	public String byPassLogin() {
		return "/static/hello.html";
	}
}
