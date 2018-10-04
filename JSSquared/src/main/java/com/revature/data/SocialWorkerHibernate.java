package com.revature.data;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.SocialWorker;
import com.revature.utils.HibernateUtil;

@Component
public class SocialWorkerHibernate implements SocialWorkerDao{
	@Autowired
	private HibernateUtil hu = new HibernateUtil();
	@Override
	public SocialWorker getById(int id) {
		Session se = hu.getSession();
		SocialWorker sw = se.get(SocialWorker.class, id);
		se.close();
		return sw;
	}

	@Override
	public List<SocialWorker> getAll() {
		Session se = hu.getSession();
		List<SocialWorker> s = se.createQuery("From com.revature.beans.SocialWorker", SocialWorker.class).list();
		
		se.close();
		return s;
	}
	@Override
	public SocialWorker getByLogin(String username, String pass) {
		Session se = hu.getSession();
		SocialWorker s = se.createQuery("From com.revature.beans.SocialWorker where username= :username and pass= :pass", SocialWorker.class).setParameter("username", username).setParameter("pass", pass).uniqueResult();
		
		se.close();
		return s;
	}

	@Override
	public SocialWorker save(SocialWorker s) {
		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.save(s);
		t.commit();
		se.close();
		return s;
	}

	@Override
	public SocialWorker update(SocialWorker s) {
		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.update(s);
		t.commit();
		se.close();
		return s;
	}

	@Override
	public void delete(SocialWorker s) {
		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.delete(s);
		t.commit();
		se.close();
		
	}

	

}
