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
import com.revature.beans.Visitation;
import com.revature.data.VisitationHibernate;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(value = "/visit")

public class VisitationController {

	@Autowired
	private VisitationHibernate vh;
	
	private ObjectMapper om;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Visitation> processViewAllCasesRequest(HttpSession s) {
		List<Visitation> visitList = new ArrayList<>();
		visitList = vh.getAll();
		System.out.println(visitList);
	    return visitList;
	    }
	
	@RequestMapping(value="{id}", method = RequestMethod.GET)
	public List<Visitation> viewSWVisits(@PathVariable("id") int id){
		List<Visitation> vList = new ArrayList<>();
		vList = vh.getBySW(id);
		return vList;
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody List<Visitation> addVisit(@RequestBody Visitation v) {
		System.out.println(v);
		vh.save(v);
		return vh.getAll();
	    }
	
	@RequestMapping(method = RequestMethod.PUT)
	public @ResponseBody List<Visitation> updateVisit(@RequestBody Visitation v) {
		vh.update(v);
		return vh.getAll();
	    }
	
	@RequestMapping(value="{id}",method = RequestMethod.DELETE)
	public @ResponseBody List<Visitation> deleteVisit(@PathVariable("id") int id) {
		vh.delete(vh.getById(id));
	    return vh.getAll();
	    }
	
	@RequestMapping(value="/json", method = RequestMethod.GET)
	public String getVisitationsAsJSON(){
		List<Visitation> visitationList = new ArrayList<>();
		visitationList = vh.getAll();
		om = new ObjectMapper();
		String result = "";
		try {
			result = om.writeValueAsString(visitationList);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		
		System.out.println("\n\n" + result + "\n\n");
		return result;
	}
}
