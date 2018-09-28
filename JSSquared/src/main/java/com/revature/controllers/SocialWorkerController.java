package com.revature.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.SocialWorker;
import com.revature.data.SocialWorkerHibernate;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(value="/sw")

public class SocialWorkerController {

	@Autowired
	private SocialWorkerHibernate swh;
	
	
	@RequestMapping(method=RequestMethod.GET)
	public List<SocialWorker> getAll(HttpSession session) {
		List<SocialWorker> u = swh.getAll();
		return u;
	}
}
