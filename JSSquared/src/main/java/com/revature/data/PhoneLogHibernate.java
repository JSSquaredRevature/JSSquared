package com.revature.data;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.PhoneLog;
import com.revature.utils.HibernateUtil;

@Component
public class PhoneLogHibernate implements PhoneLogDao {

	@Autowired
	private HibernateUtil hu;
	
	@Override
	public PhoneLog getById(int id) {
		Session se = hu.getSession();
		PhoneLog p = se.get(PhoneLog.class, id);
		se.close();
		return p;
	}

	@Override
	public List<PhoneLog> getByCaseId(int caseid) {
		Session s = hu.getSession();
		List<PhoneLog> p = s.createQuery("From com.revature.beans.PhoneLog where caseid=:cid", PhoneLog.class).setParameter("cid", caseid).list();
		s.close();
		return p;
	}

	@Override
	public PhoneLog save(PhoneLog pl) {
		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.save(pl);
		t.commit();
		se.close();
		return pl;
	}

	@Override
	public PhoneLog update(PhoneLog pl) {
		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.update(pl);
		t.commit();
		se.close();
		return pl;
	}

	@Override
	public void delete(PhoneLog pl) {
		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.delete(pl);
		t.commit();
		se.close();
	}

}
