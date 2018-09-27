package com.revature.data;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;

import com.revature.beans.Cases;
import com.revature.utils.HibernateUtil;

public class CaseHibernate implements CaseDao{
	
	@Autowired
	private HibernateUtil hu;

	
	@Override
	public void createNewCase(Cases c) {
		Session se = hu.getSession();
		se.save(c);
		se.close();
	}

	
}
