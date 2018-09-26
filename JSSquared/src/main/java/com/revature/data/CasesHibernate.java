package com.revature.data;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Cases;
import com.revature.beans.SocialWorker;
import com.revature.utils.HibernateUtil;

@Component
public class CasesHibernate implements CasesDao {

		@Autowired
		private HibernateUtil hu;
		
		@Override
		public Cases getById(int id) {
			Session se = hu.getSession();
			Cases c = se.get(Cases.class, id);
			se.close();
			return c;
		}

		@Override
		public List<Cases> getBySocialWorkerId(int socialworkerid) {
			Session s = hu.getSession();
			List<Cases> c = s.createQuery("From com.revature.beans.Cases where socialworkerid= :socialworkerid", Cases.class).setParameter("socialworkerid", socialworkerid).list();
			s.close();
			return c;
		}
		
		
		@Override
		public List<Cases> getAll() {
			Session s = hu.getSession();
			List<Cases> c = s.createQuery("From com.revature.beans.Cases", Cases.class).list();
			s.close();
			return c;
		}

		@Override
		public Cases save(Cases c) {
			Session se = hu.getSession();
			Transaction t = se.beginTransaction();
			se.save(c);
			t.commit();
			se.close();
			return c;
		}

		@Override
		public Cases update(Cases c) {
			Session se = hu.getSession();
			Transaction t = se.beginTransaction();
			se.update(c);
			t.commit();
			se.close();
			return c;
		}

		@Override
		public void delete(Cases c) {
			Session se = hu.getSession();
			Transaction t = se.beginTransaction();
			se.delete(c);
			t.commit();
			se.close();
		}

}
