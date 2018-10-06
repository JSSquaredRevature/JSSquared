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
import com.revature.beans.CourtDate;
import com.revature.data.CourtDateHibernate;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/courtdate")
public class CourtDateController {

	@Autowired
	private CourtDateHibernate cdh;

	private ObjectMapper om;

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<CourtDate> processViewAllCasesRequest(HttpSession s) {
		List<CourtDate> courtDateList = new ArrayList<>();
		courtDateList = cdh.getAll();
		return courtDateList;
	}

	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public @ResponseBody List<CourtDate> processViewSWCasesRequest(@PathVariable("id") int id) {
		List<CourtDate> courtDateList = new ArrayList<>();
		courtDateList = cdh.getBySwId(id);
		return courtDateList;
	}
	
	@RequestMapping(value = "/socialworker/id", method = RequestMethod.GET)
	public List<CourtDate> getCourtDatesBySocialWorkerId(@RequestParam("id") int socialWorkerId) {
		return cdh.getBySwId(socialWorkerId);
	}
	
	@RequestMapping(value = "/id", method = RequestMethod.GET)
	public CourtDate getCourtDateById(@RequestParam("id") int id) {
		return cdh.getById(id);
	}

	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody List<CourtDate> addCourtDate(@RequestBody CourtDate cd) {
		cdh.save(cd);
		return cdh.getAll();
	}

	@RequestMapping(method = RequestMethod.PUT)
	public CourtDate updateCourtDate(@RequestBody CourtDate updatedCourtDate) {
		return cdh.update(updatedCourtDate);
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public @ResponseBody List<CourtDate> deleteCourtDate(@PathVariable("id") int id) {
		cdh.delete(cdh.getById(id));
		return cdh.getAll();
	}

}
