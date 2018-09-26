package com.revature.controllers;

import java.util.List;

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

@Controller
public class AdminController {
	
	@Autowired
	private CasesHibernate ch;
	
	private ObjectMapper om = new ObjectMapper();
	
	@RequestMapping(value = "/admin", method = RequestMethod.GET)
	public @ResponseBody String processViewAllCasesRequest(HttpSession s) {

		// SocialWorker sw = (SocialWorker) s.getAttribute("user");
		List<Cases> casesList;
		casesList = ch.getAll();

		// Eventually, this response needs to be written as object instead of string
		String response = "";
		try {
			response = om.writeValueAsString(casesList);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		
	    return response;
	    }
}
