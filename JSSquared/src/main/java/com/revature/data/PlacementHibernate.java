package com.revature.data;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Placement;
import com.revature.utils.HibernateUtil;
@Component
public class PlacementHibernate implements PlacementDao {
	@Autowired
	private HibernateUtil hu;
	@Override
	public Placement getById(int id) {
		Session se = hu.getSession();
		Placement pl = se.get(Placement.class, id);
		se.close();
		return pl;
	}

	@Override
	public Placement save(Placement p) {
		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.save(p);
		t.commit();
		se.close();
		return p;
	}

	@Override
	public void delete(Placement p) {
		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.delete(p);
		t.commit();
		se.close();
		

	}

	@Override
	public Placement update(Placement p) {
		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.update(p);
		t.commit();
		se.close();
		return p;
	}

	@Override
	public List<Placement> getAll() {
		Session se = hu.getSession();
		List<Placement> p = se.createQuery("From com.revature.beans.Placement", Placement.class).list();
		
		se.close();
		return p;
	}

}
