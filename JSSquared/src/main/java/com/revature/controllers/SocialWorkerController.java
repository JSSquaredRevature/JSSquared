package com.revature.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import org.springframework.web.bind.annotation.RestController;

import com.revature.beans.SocialWorker;
import com.revature.data.SocialWorkerHibernate;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(value = "/sw")

public class SocialWorkerController {
	@Autowired
	private SocialWorkerHibernate sh;

	@RequestMapping(method = RequestMethod.GET)
	public @ResponseBody List<SocialWorker> getAllSocialWorkers(HttpSession s) {

		List<SocialWorker> swList = sh.getAll();
		return swList;
	}

	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public @ResponseBody SocialWorker getSocialWorker(@PathVariable("id") int id) {

		SocialWorker sw = sh.getById(id);
		return sw;

	}
}
