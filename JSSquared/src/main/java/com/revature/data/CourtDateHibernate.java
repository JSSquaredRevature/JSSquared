package com.revature.data;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.CourtDate;
import com.revature.utils.HibernateUtil;

@Component
public class CourtDateHibernate implements CourtDateDao {

	@Autowired
	private HibernateUtil hu = new HibernateUtil();
	
	@Override
	public CourtDate getById(int id) {
		Session se = hu.getSession();
		CourtDate cd = se.get(CourtDate.class, id);
		se.close();
		return cd;
	}

	@Override
	public List<CourtDate> getAll() {
		Session s = hu.getSession();
		List<CourtDate> cd = s.createQuery("From com.revature.beans.CourtDate", CourtDate.class).list();
		s.close();
		return cd;
	}
	@Override
	public List<CourtDate> getBySwId(int swId){
		Session s = hu.getSession();
		List<CourtDate> cd = s.createQuery("From com.revature.beans.CourtDate where caseid in (From com.revature.beans.Cases where socialworkerid=:swid)", CourtDate.class).setParameter("swid", swId).list();
		s.close();
		return cd;
	}

	@Override
	public List<CourtDate> getByCaseId(int caseId) {
		Session s = hu.getSession();
		List<CourtDate> cd = s.createQuery("From com.revature.beans.CourtDate where caseid=:cid", CourtDate.class).setParameter("cid", caseId).list();
		s.close();
		return cd;
	}

	@Override
	public CourtDate update(CourtDate cd) {
		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.update(cd);
		t.commit();
		se.close();
		return cd;
	}

	@Override
	public CourtDate save(CourtDate cd) {
		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.save(cd);
		t.commit();
		se.close();
		return cd;
	}

	@Override
	public void delete(CourtDate cd) {

		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.save(cd);
		t.commit();
		se.close();
		
	}

}
