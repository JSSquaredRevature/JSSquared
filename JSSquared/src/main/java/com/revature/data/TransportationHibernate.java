package com.revature.data;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Transportation;
import com.revature.utils.HibernateUtil;

@Component
public class TransportationHibernate implements TransportationDao {
	@Autowired
	private HibernateUtil hu = new HibernateUtil();

	@Override
	public List<Transportation> getAll() {
		Session s = hu.getSession();
		List<Transportation> t = s.createQuery("From com.revature.beans.Transportation", Transportation.class).list();
		s.close();
		return t;
	}

	@Override
	public List<Transportation> getBySocialWorkerId(int socialWorkerId) {
		Session s = hu.getSession();
		List<Transportation> t = s
				.createQuery("From com.revature.beans.Transportation where socialworkerid=:swid", Transportation.class)
				.setParameter("swid", socialWorkerId).list();
		s.close();
		return t;
	}

	@Override
	public List<Transportation> getByCasesId(int casesId) {
		Session s = hu.getSession();
		List<Transportation> t = s
				.createQuery("From com.revature.beans.Transportation where caseid=:cid", Transportation.class)
				.setParameter("cid", casesId).list();
		s.close();
		return t;
	}

	@Override
	public Transportation getById(int id) {
		Session s = hu.getSession();
		Transportation t = s.get(Transportation.class, id);
		s.close();
		return t;
	}

	@Override
	public Transportation save(Transportation t) {
		Session s = hu.getSession();
		Transaction tx = s.beginTransaction();
		s.save(t);
		tx.commit();
		s.close();
		return t;
	}

	@Override
	public Transportation update(Transportation t) {
		Session s = hu.getSession();
		Transaction tx = s.beginTransaction();
		s.update(t);
		tx.commit();
		s.close();
		return t;
	}

	@Override
	public void delete(Transportation t) {
		Session s = hu.getSession();
		Transaction tx = s.beginTransaction();
		s.delete(t);
		tx.commit();
		s.close();
	}

}
