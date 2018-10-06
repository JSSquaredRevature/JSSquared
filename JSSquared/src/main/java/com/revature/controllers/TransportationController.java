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
import com.revature.beans.Transportation;
import com.revature.data.TransportationHibernate;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/transportation")
public class TransportationController {

	@Autowired
	private TransportationHibernate th;
	private ObjectMapper om;

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Transportation> processViewAllCasesRequest(HttpSession s) {
		List<Transportation> transportationList = new ArrayList<>();
		transportationList = th.getAll();
		System.out.println(transportationList);
		return transportationList;
	}
	
	@RequestMapping(value = "/socialworker/id", method = RequestMethod.GET)
	public List<Transportation> getTransportationBySocialWorkerId(@RequestParam("id") int socialWorkerId) {
		return th.getBySocialWorkerId(socialWorkerId);
	}

	@RequestMapping(value = "/id", method = RequestMethod.GET)
	public Transportation getTransportationById(@RequestParam("id") int id) {
		return th.getById(id);
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody List<Transportation> addTransportation(@RequestBody Transportation cd) {
		System.out.println(cd);
		th.save(cd);
		return th.getAll();
	}

	@RequestMapping(method = RequestMethod.PUT)
	public Transportation updateTransportation(@RequestBody Transportation updatedTransportation) {
		return th.update(updatedTransportation);
	}

	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public List<Transportation> viewSWTransportation(@PathVariable("id") int id) {
		List<Transportation> transportationList = new ArrayList<>();
		System.out.println("In id method.");
		transportationList = th.getBySocialWorkerId(id);
		return transportationList;
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public @ResponseBody List<Transportation> deleteTransportation(@PathVariable("id") int id) {
		th.delete(th.getById(id));
		return th.getAll();
	}

}
