package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Placement;
import com.revature.data.PlacementHibernate;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class PlacementController {
	@Autowired
	private PlacementHibernate ph;
	@RequestMapping(value = "/placement", method = RequestMethod.GET)
	public @ResponseBody List<Placement> getAllPlacements(HttpSession s) {
		List<Placement> swList = new ArrayList<>();
		swList = ph.getAll();
		return swList;
	}
}
