package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.beans.Cases;
import com.revature.data.CasesHibernate;
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class CreateCaseController {

	@Autowired
	private CasesHibernate ch;
	private ObjectMapper om = new ObjectMapper();
	
	@RequestMapping(value = "/createcase", method = RequestMethod.GET)
	public @ResponseBody Cases createNewCaseRequest(HttpSession s) {
		Cases c = new Cases();
		return ch.save(c);
	}
}
