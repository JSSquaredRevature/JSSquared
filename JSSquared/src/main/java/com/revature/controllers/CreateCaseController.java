package com.revature.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.beans.Cases;
import com.revature.beans.SocialWorker;
import com.revature.data.CasesHibernate;

@RestController
public class CreateCaseController {

	@Autowired
	private CasesHibernate ch;
	private ObjectMapper om = new ObjectMapper();
	
	@RequestMapping(value = "/createcase", method = RequestMethod.GET)
	public @ResponseBody Cases createNewCaseRequest(HttpSession s) {
		
		return null;
	}
}
