package com.revature.data;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Cases;
import com.revature.beans.Visitation;
import com.revature.utils.HibernateUtil;

@Component
public class VisitationHibernate implements VisitationDao{

	@Autowired
	private HibernateUtil hu;
	
	@Override
	public Visitation getById(int id) {
		Session se = hu.getSession();
		Visitation v = se.get(Visitation.class,  id);
		se.close();
		return v;
	}

	@Override
	public List<Visitation> getAll() {
		Session s = hu.getSession();
		List<Visitation> v = s.createQuery("From com.revature.beans.Visitation", Visitation.class).list();
		s.close();
		return v;
	}

	@Override
	public List<Visitation> getByCaseId(int caseId) {
		Session s = hu.getSession();
		List<Visitation> v = s.createQuery("From com.revature.beans.Visitation where caseid=:cid", Visitation.class).setParameter("cid", caseId).list();
		s.close();
		return v;
	}

	@Override
	public Visitation update(Visitation v) {
		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.update(v);
		t.commit();
		se.close();
		return v;
	}

	@Override
	public Visitation save(Visitation v) {
		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.save(v);
		t.commit();
		se.close();
		return v;
	}

	@Override
	public void delete(Visitation v) {

		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.save(v);
		t.commit();
		se.close();
		
	}

	@Override
	public List<Visitation> getBySW(int swid) {
		Session s = hu.getSession();
		List<Visitation> v = s.createQuery("From com.revature.beans.Visitation where socialworkerid= :socialworkerid", Visitation.class).setParameter("socialworkerid", swid).list();
		s.close();
		return v;
	}
}
