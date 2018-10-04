package com.revature.test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;	
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.hibernate.Session;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.junit.Assert.*;

import com.revature.beans.SocialWorker;
import com.revature.controllers.AdminController;
import com.revature.controllers.CourtDateController;
import com.revature.controllers.CreateCaseController;
import com.revature.controllers.HomeController;
import com.revature.controllers.LoginController;
import com.revature.controllers.PhoneLogController;
import com.revature.controllers.PlacementController;
import com.revature.controllers.SocialWorkerController;
import com.revature.controllers.TransportationController;
import com.revature.controllers.VisitationController;

public class ControllerTest {
	
	private static final AdminController ac = new AdminController();
	private static final CourtDateController cdc = new CourtDateController();
	private static final CreateCaseController ccc = new CreateCaseController();
	private static final HomeController hc = new HomeController();
	private static final LoginController lc = new LoginController();
	private static final PhoneLogController plc = new PhoneLogController();
	private static final PlacementController pc = new PlacementController();
	private static final SocialWorkerController swc = new SocialWorkerController();
	private static final TransportationController tc = new TransportationController();
	private static final VisitationController vc = new VisitationController();
	
	@Autowired
	private HttpSession s;
	
	@Rule
	public ExpectedException ee = ExpectedException.none();
	
	/*******************************************************************
	 * Admin Controller Tests
	 ******************************************************************/
	
	/*******************************************************************
	 * Court Date Controller Tests
	 ******************************************************************/
	
	/*******************************************************************
	 * Home Controller Tests
	 ******************************************************************/
	
	/*******************************************************************
	 * Login Controller Tests
	 ******************************************************************/
	
	/*******************************************************************
	 * Phone Log Controller Tests
	 ******************************************************************/
	
	/*******************************************************************
	 * Placement Controller Tests
	 ******************************************************************/
	
	/*******************************************************************
	 * Create Case Controller Tests
	 ******************************************************************/
	
	/*******************************************************************
	 * Social Worker Controller Tests
	 ******************************************************************/
	
	/*******************************************************************
	 * Transportation Controller Tests
	 ******************************************************************/
	
	/*******************************************************************
	 * Visitation Controller Tests
	 ******************************************************************/

}
