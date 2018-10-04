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
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.beans.CourtDate;
import com.revature.data.CourtDateHibernate;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(value = "/courtdate")
public class CourtDateController {

	@Autowired
	private CourtDateHibernate ch;
	
	private ObjectMapper om;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<CourtDate> processViewAllCasesRequest(HttpSession s) {
		List<CourtDate> courtDateList = new ArrayList<>();
		courtDateList = ch.getAll();
	    return courtDateList;
	    }
	
	@RequestMapping(value="{id}",method = RequestMethod.GET)
	public @ResponseBody List<CourtDate> processViewSWCasesRequest(@PathVariable("id") int id) {
		List<CourtDate> courtDateList = new ArrayList<>();
		courtDateList = ch.getBySwId(id);
	    return courtDateList;
	    }
	
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody List<CourtDate> addCourtDate(@RequestBody CourtDate cd) {
		System.out.println("What" + cd);
		ch.save(cd);
		return ch.getAll();
	    }
	
	@RequestMapping(method = RequestMethod.PUT)
	public @ResponseBody List<CourtDate> updateCourtDate(@RequestBody CourtDate cd) {
		System.out.println("\nHello" + cd.getTime());
		System.out.println("\nWorld" + cd);
		ch.update(cd);
		return ch.getAll();
	    }
	
	@RequestMapping(value="/json", method = RequestMethod.GET)
	public String getCourtDatesAsJSON(){
		List<CourtDate> courtDateList = new ArrayList<>();
		courtDateList = ch.getAll();
		om = new ObjectMapper();
		String result = "";
		try {
			result = om.writeValueAsString(courtDateList);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		
		System.out.println("\n\n" + result + "\n\n");
		return result;
	}
}
