package com.revature.data;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Case;
import com.revature.utils.HibernateUtil;

@Component
public class CaseHibernate implements CaseDao {

	@Autowired
	private HibernateUtil hu = new HibernateUtil();

	@Override
	public Case getById(int id) {
		Session se = hu.getSession();
		Case c = se.get(Case.class, id);
		se.close();
		return c;
	}

	@Override
	public List<Case> getBySocialWorkerId(int socialworkerid) {
		Session s = hu.getSession();
		List<Case> c = s
				.createQuery("From com.revature.beans.Case where socialworkerid= :socialworkerid", Case.class)
				.setParameter("socialworkerid", socialworkerid).list();
		s.close();
		return c;
	}

	@Override
	public List<Case> getByName(String name) {
		Session s = hu.getSession();
		List<Case> c = s
				.createQuery("From com.revature.beans.Case where upper(CONCAT(firstname, ' ', lastname)) LIKE :name",
						Case.class)
				.setParameter("name", '%' + name.toUpperCase() + '%').list();

		System.out.println(name.toUpperCase());
		s.close();
		return c;
	}

	@Override
	public List<Case> getByNameAndSW(String name, int socialworkerid) {
		Session s = hu.getSession();
		List<Case> c = s.createQuery(
				"From com.revature.beans.Case where upper(CONCAT(firstname, ' ', lastname)) LIKE :name AND socialworkerid= :socialworkerid",
				Case.class).setParameter("name", '%' + name.toUpperCase() + '%')
				.setParameter("socialworkerid", socialworkerid).list();
		System.out.println(name.toUpperCase());
		s.close();
		return c;
	}

	@Override
	public List<Case> getAll() {
		Session s = hu.getSession();
		List<Case> c = s.createQuery("From com.revature.beans.Case", Case.class).list();
		s.close();
		return c;
	}

	@Override
	public Case save(Case c) {
		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.save(c);
		t.commit();
		se.close();
		return c;
	}

	@Override
	public Case update(Case c) {
		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.update(c);
		t.commit();
		se.close();
		return c;
	}

	@Override
	public void delete(Case c) {
		Session se = hu.getSession();
		Transaction t = se.beginTransaction();
		se.delete(c);
		t.commit();
		se.close();
	}

}
