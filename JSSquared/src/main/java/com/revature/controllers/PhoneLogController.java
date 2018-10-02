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

import com.revature.beans.PhoneLog;
import com.revature.data.PhoneLogHibernate;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping(value = "/phonelog")
public class PhoneLogController {
	@Autowired PhoneLogHibernate plh;
	
	@RequestMapping(value= "{caseid}",method = RequestMethod.GET)
	public @ResponseBody List<PhoneLog> processViewPhoneLogsRequest(@PathVariable("caseid") int caseid,HttpSession s) {
		List<PhoneLog> phoneLogList = new ArrayList<>();
		phoneLogList = plh.getByCaseId(caseid);
	    return phoneLogList;
	    }
	
	@RequestMapping(method = RequestMethod.POST)
	public @ResponseBody List<PhoneLog> addPhoneLog(@RequestBody PhoneLog pl) {
		plh.save(pl);
		return plh.getByCaseId(pl.getCaseid());
	    }
	
	@RequestMapping(method = RequestMethod.PUT)
	public @ResponseBody List<PhoneLog> updatePhoneLog(@RequestBody PhoneLog pl) {
		plh.update(pl);
		return plh.getByCaseId(pl.getCaseid());
	    }
	
}
