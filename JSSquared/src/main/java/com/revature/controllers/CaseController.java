package com.revature.controllers;

import java.sql.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Case;
import com.revature.beans.Placement;
import com.revature.beans.SocialWorker;
import com.revature.data.CaseHibernate;
import com.revature.data.PlacementHibernate;
import com.revature.data.SocialWorkerHibernate;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/createcase")
public class CaseController {

	@Autowired
	private CaseHibernate ch;
	@Autowired
	private PlacementHibernate ph;
	@Autowired
	private SocialWorkerHibernate swh;

	@RequestMapping(method = RequestMethod.GET)
	public List<Case> getCases() {
		return ch.getAll();
	}

	@RequestMapping(value = "/socialworker/id", method = RequestMethod.GET)
	public List<Case> getCasesBySocialWorkerId(@RequestParam("id") int socialWorkerId) {
		return ch.getBySocialWorkerId(socialWorkerId);
	}
	
	@RequestMapping(value = "/id", method = RequestMethod.GET)
	public Case getCaseById(@RequestParam("id") int id) {
		return ch.getById(id);
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public Case createNewCaseRequest(String firstname, String lastname, Date birthdate, int rating, int socialId,
			int placementId, HttpSession s) {
		Case c = new Case(0, firstname, lastname, birthdate, rating);
		Placement p = ph.getById(placementId);
		SocialWorker sw = swh.getById(socialId);
		c.setPlacement(p);
		c.setSw(sw);
		return ch.save(c);
	}

	@RequestMapping(method = RequestMethod.PUT)
	public Case updateCase(@RequestBody Case updatedCase) {
		return ch.update(updatedCase);
	}

}
