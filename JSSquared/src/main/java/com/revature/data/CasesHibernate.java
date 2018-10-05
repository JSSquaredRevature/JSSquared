package com.revature.data;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.revature.beans.Cases;
import com.revature.utils.HibernateUtil;

@Component
public class CasesHibernate implements CasesDao {

		@Autowired
		private HibernateUtil hu = new HibernateUtil();
		
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
		public List<Cases> getByName(String name) {
			Session s = hu.getSession();
			List<Cases> c = s.createQuery("From com.revature.beans.Cases where upper(CONCAT(firstname, ' ', lastname)) LIKE :name", Cases.class)
					.setParameter("name", '%' + name.toUpperCase() + '%').list();
			
			
			System.out.println(name.toUpperCase());
			s.close();
			return c;
		}
		
		@Override
		public List<Cases> getByNameAndSW(String name, int socialworkerid) {
			Session s = hu.getSession();
			List<Cases> c = s.createQuery("From com.revature.beans.Cases where upper(CONCAT(firstname, ' ', lastname)) LIKE :name AND socialworkerid= :socialworkerid", Cases.class)
					.setParameter("name", '%' + name.toUpperCase() + '%').setParameter("socialworkerid", socialworkerid).list();
			System.out.println(name.toUpperCase());
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
