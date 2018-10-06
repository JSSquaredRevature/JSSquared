package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Case;
import com.revature.beans.SocialWorker;
import com.revature.data.CaseHibernate;
import com.revature.data.SocialWorkerHibernate;

@CrossOrigin(origins = "http://localhost:4200")
@RestController

@RequestMapping(value = "/login")
public class LoginController {
	@Autowired
	private HttpSession s;
	@Autowired
	private SocialWorkerHibernate swh;
	@Autowired
	private CaseHibernate ch;

	@RequestMapping(method = RequestMethod.GET)
	public List<Case> processViewAllCasesRequest(HttpSession session) {

		SocialWorker sw = (SocialWorker) s.getAttribute("user");
		List<Case> casesList = new ArrayList<>();
		if (sw != null) {
			if (sw.getIsadmin() == 1)
				casesList = ch.getAll();
			else if (sw.getIsadmin() == 0)
				casesList = ch.getBySocialWorkerId(sw.getId());
		}
		return casesList;
	}

	@RequestMapping(method = RequestMethod.POST)
	public SocialWorker login(String username, String password, HttpSession session) {

		SocialWorker u = swh.getByLogin(username, password);

		return u;
	}

}
