package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Transportation;
import com.revature.data.TransportationHibernate;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(value = "/transportation")
public class TransportationController {

	@Autowired
	private TransportationHibernate ch;
	
	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Transportation> processViewAllCasesRequest(HttpSession s) {
		List<Transportation> transportationList = new ArrayList<>();
		transportationList = ch.getAll();
		System.out.println(transportationList);
	    return transportationList;
	    }
	
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody List<Transportation> addTransportation(@RequestBody Transportation cd) {
		System.out.println(cd);
		ch.save(cd);
		return ch.getAll();
	    }
	
	@RequestMapping(method = RequestMethod.PUT)
	public @ResponseBody List<Transportation> updateTransportation(@RequestBody Transportation cd) {
		ch.update(cd);
		return ch.getAll();
	    }
}
