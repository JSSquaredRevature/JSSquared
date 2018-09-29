package com.revature.controllers;

import java.sql.Date;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.beans.Cases;
import com.revature.data.CasesHibernate;
@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(value="/createcase")
public class CreateCaseController {

	@Autowired
	private CasesHibernate ch;
	private ObjectMapper om = new ObjectMapper();
	
	@RequestMapping(method = RequestMethod.POST)
	public Cases createNewCaseRequest(String firstname, String lastname, Date birthdate, int rating,
			int socialId, int placementId, HttpSession s) {
		Cases c = new Cases(0, firstname, lastname, birthdate, rating, socialId, placementId);
		return ch.save(c);
	}
}
