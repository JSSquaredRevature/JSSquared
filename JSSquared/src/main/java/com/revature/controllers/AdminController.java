package com.revature.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
<<<<<<< HEAD
import org.springframework.stereotype.Controller;
=======
>>>>>>> staging
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.Cases;
import com.revature.beans.SocialWorker;
import com.revature.data.CasesHibernate;
<<<<<<< HEAD
@CrossOrigin(origins="http://localhost:4200")
@Controller
=======

@CrossOrigin(origins="http://localhost:4200")
@RestController
>>>>>>> staging
public class AdminController {
	
	@Autowired
	private CasesHibernate ch;
	
	@RequestMapping(value = "/admin", method = RequestMethod.GET)
	public @ResponseBody List<Cases> processViewAllCasesRequest(HttpSession s) {

		SocialWorker sw = (SocialWorker) s.getAttribute("user");
		List<Cases> casesList = new ArrayList<>();
		if (sw.getIsadmin() == 1)
			casesList = ch.getAll();
		else if (sw.getIsadmin() == 0)
			casesList = ch.getBySocialWorkerId(sw.getId());

	    return casesList;
	    }
}
