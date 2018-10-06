package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.beans.Case;
import com.revature.data.CaseHibernate;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/admin")
public class AdminController {

	@Autowired
	private CaseHibernate ch;
	private ObjectMapper om;

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Case> processViewAllCasesRequest(HttpSession s) {
		List<Case> casesList = new ArrayList<>();
		casesList = ch.getAll();
		return casesList;
	}

	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public List<Case> viewSWCases(@PathVariable("id") int id) {
		List<Case> casesList = new ArrayList<>();
		casesList = ch.getBySocialWorkerId(id);
		return casesList;
	}

	@RequestMapping(value = "/name", method = RequestMethod.GET)
	public List<Case> search(@RequestParam("name") String name) {
		List<Case> matchingCases = new ArrayList<Case>();
		matchingCases = ch.getByName(name);
		return matchingCases;
	}

	@RequestMapping(value = "/swname", method = RequestMethod.GET)
	public List<Case> search(@RequestParam("name") String name, @RequestParam("id") int id) {
		List<Case> matchingCases = new ArrayList<Case>();
		matchingCases = ch.getByNameAndSW(name, id);
		return matchingCases;
	}

	@RequestMapping(value = "/update", method = RequestMethod.POST)
	public @ResponseBody List<Case> addCase(@RequestBody Case c) {
		ch.save(c);
		return ch.getAll();
	}

	@RequestMapping(method = RequestMethod.PUT)
	public @ResponseBody List<Case> updateCase(@RequestBody Case c) {
		ch.update(c);
		return ch.getAll();
	}
}
