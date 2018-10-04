package com.revature.test;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import java.util.List;

import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.springframework.context.annotation.ComponentScan;

import com.revature.beans.Cases;
import com.revature.beans.CourtDate;
import com.revature.beans.PhoneLog;
import com.revature.beans.Placement;
import com.revature.beans.SocialWorker;
import com.revature.beans.Transportation;
import com.revature.beans.Visitation;
import com.revature.data.CasesHibernate;
import com.revature.data.CourtDateHibernate;
import com.revature.data.PhoneLogHibernate;
import com.revature.data.PlacementHibernate;
import com.revature.data.SocialWorkerHibernate;
import com.revature.data.TransportationHibernate;
import com.revature.data.VisitationHibernate;

@ComponentScan(basePackages = "com.revature.beans")
public class HibernateTest {
	
	private static final CasesHibernate ch = new CasesHibernate();
	private static final CourtDateHibernate cdh = new CourtDateHibernate();
	private static final PhoneLogHibernate plh = new PhoneLogHibernate();
	private static final PlacementHibernate ph = new PlacementHibernate();
	private static final SocialWorkerHibernate swh = new SocialWorkerHibernate();
	private static final TransportationHibernate th = new TransportationHibernate();
	private static final VisitationHibernate vh = new VisitationHibernate();
		
	@Rule
	public ExpectedException ee = ExpectedException.none();
	
	/*******************************************************************
	 * Case Hibernate Tests
	 ******************************************************************/
	@Test
	public void testNullCase() {
		Cases c = ch.getById(0);
		assertNull(c);
	}
	
	@Test
	public void testFindCase() {
		Cases c = ch.getById(1);
		assertNotNull(c);
	}
	
	@Test
	public void testGetCasesBySW() {
		List<Cases> c = ch.getBySocialWorkerId(1);
		assertNotNull(c);
	}
	
	@Test
	public void testGetAllCases() {
		List<Cases> c = ch.getAll();
		assertNotNull(c);
	}
	/*******************************************************************
	 * Court Date Hibernate Tests
	 ******************************************************************/
	@Test
	public void testNullCourtDate() {
		CourtDate cd = cdh.getById(0);
		assertNull(cd);
	}
	
	@Test
	public void testFindCourtDate() {
		CourtDate cd = cdh.getById(1);
		assertNotNull(cd);
	}
	
	@Test
	public void testGetAll() {
		List<CourtDate> cdlist = cdh.getAll();
		assertNotNull(cdlist);
	}
	
	@Test
	public void testGetBySW() {
		List<CourtDate> cdlist = cdh.getBySwId(1);
		assertNotNull(cdlist);
	}
	
	@Test
	public void testGetByCaseId() {
		List<CourtDate> cdlist = cdh.getByCaseId(1);
		assertNotNull(cdlist);
	}
	/*******************************************************************
	 * Phone Log Hibernate Tests
	 ******************************************************************/
	@Test 
	public void testNullPhoneLog() {
		PhoneLog pl = plh.getById(0);
		assertNull(pl);
	}
	
	@Test
	public void testFindPhoneLog() {
		PhoneLog pl = plh.getById(1);
		assertNotNull(pl);
	}
	
	@Test
	public void testLogsForCases() {
		List<PhoneLog> pllist = plh.getByCaseId(1);
		assertNotNull(pllist);
	}
	/*******************************************************************
	 * Placement Hibernate Tests
	 ******************************************************************/
	@Test
	public void testNullPlacement() {
		Placement p = ph.getById(0);
		assertNull(p);
	}
	
	@Test
	public void testGetPlacement() {
		Placement p = ph.getById(1);
		assertNotNull(p);
	}
	
	@Test
	public void testGetAllPlacements() {
		List<Placement> plist = ph.getAll();
		assertNotNull(plist);
	}
	/*******************************************************************
	 * Social Worker Hibernate Tests
	 ******************************************************************/
	@Test
	public void testNullSW() {
		SocialWorker sw = swh.getById(0);
		assertNull(sw);
	}
	
	@Test
	public void testGetSW() {
		SocialWorker sw = swh.getById(1);
		assertNotNull(sw);
	}
	
	@Test
	public void testGetAllSW() {
		List<SocialWorker> swlist = swh.getAll();
		assertNotNull(swlist);
	}
	
	@Test
	public void testSWLogin() {
		SocialWorker sw = swh.getByLogin("user", "pass");
		assertNotNull(sw);
	}
	/*******************************************************************
	 * Transportation Hibernate Tests
	 ******************************************************************/
	@Test
	public void testGetAllTransportation() {
		List<Transportation> tlist = th.getAll();
		assertNotNull(tlist);
	}
	
	@Test
	public void testGetTranBySW() {
		List<Transportation> tlist = th.getBySocialWorkerId(1);
		assertNotNull(tlist);
	}
	
	@Test
	public void testGetTranByCaseId() {
		List<Transportation> tlist = th.getByCasesId(1);
		assertNotNull(tlist);
	}
	
	@Test
	public void testTransportation() {
		Transportation t = th.getById(1);
		assertNotNull(t);
	}
	
	@Test
	public void testNullTransportation() {
		Transportation t = th.getById(0);
		assertNull(t);
	}
	/*******************************************************************
	 * Visitation Hibernate Tests
	 ******************************************************************/
	@Test
	public void testNullVisit() {
		Visitation v = vh.getById(0);
		assertNull(v);
	}
	
	@Test
	public void testGetVisit() {
		Visitation v = vh.getById(1);
		assertNotNull(v);
	}
	
	@Test
	public void testAllVisits() {
		List<Visitation> vlist = vh.getAll();
		assertNotNull(vlist);
	}
	
	@Test
	public void testGetVisitsByCase() {
		List<Visitation> vlist = vh.getByCaseId(1);
		assertNotNull(vlist);
	}
	
	@Test
	public void testGetVisitBySW() {
		List<Visitation> vlist = vh.getBySW(1);
		assertNotNull(vlist);
	}
}
