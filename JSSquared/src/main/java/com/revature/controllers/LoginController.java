package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Cases;
import com.revature.beans.SocialWorker;
import com.revature.data.CasesHibernate;
import com.revature.data.SocialWorkerHibernate;

@CrossOrigin(origins="http://localhost:4200")
@Controller



@RestController

@RequestMapping(value="/login")
public class LoginController {
	@Autowired
	private HttpSession s;
	@Autowired
	private SocialWorkerHibernate swh;
	@Autowired
	private CasesHibernate ch;

	@RequestMapping( method = RequestMethod.GET)
	public List<Cases> processViewAllCasesRequest(HttpSession session) {
		
		SocialWorker sw = (SocialWorker) s.getAttribute("user");
		List<Cases> casesList = new ArrayList<>();
		if(sw!=null) {
		if (sw.getIsadmin() == 1)
			casesList = ch.getAll();
		else if (sw.getIsadmin() == 0)
			casesList = ch.getBySocialWorkerId(sw.getId());
		}
	    return casesList;
	}

	@RequestMapping(method=RequestMethod.POST)
	public Object login(String username, String password, HttpSession session) {
		SocialWorker cur =(SocialWorker) session.getAttribute("user");
		if(cur!=null) {
			if (cur.getIsadmin() !=0)return ch.getAll();
			return ch.getBySocialWorkerId(cur.getId());
		}
		SocialWorker u = swh.getByLogin(username,  password);
		if(u!=null)s.setAttribute("user", u);
		return u;
	}
	
	
}
