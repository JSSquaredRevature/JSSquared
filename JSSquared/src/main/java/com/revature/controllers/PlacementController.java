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

import com.revature.beans.Placement;
import com.revature.data.PlacementHibernate;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/placement")
public class PlacementController {
	@Autowired
	private PlacementHibernate ph;

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<Placement> getAllPlacements(HttpSession s) {
		List<Placement> swList = new ArrayList<>();
		swList = ph.getAll();
		return swList;
	}

	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody List<Placement> addPlacement(@RequestBody Placement pl) {
		ph.save(pl);
		return ph.getAll();
	}

	@RequestMapping(method = RequestMethod.PUT)
	public @ResponseBody List<Placement> updatePlacement(@RequestBody Placement pl) {
		ph.update(pl);
		return ph.getAll();
	}

	@RequestMapping(value = "{id}", method = RequestMethod.DELETE)
	public @ResponseBody List<Placement> deletePlacement(@PathVariable("id") int id) {
		ph.delete(ph.getById(id));
		return ph.getAll();
	}

}
