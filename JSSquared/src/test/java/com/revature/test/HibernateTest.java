package com.revature.test;

import static org.hamcrest.CoreMatchers.is;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;	
import java.util.Map;

import org.hibernate.Session;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import com.revature.beans.Cases;
import com.revature.data.CasesHibernate;
import com.revature.utils.HibernateUtil;

@ComponentScan(basePackages = "com.revature.beans")
public class HibernateTest {
	
	private static final CasesHibernate ch = new CasesHibernate();
	private static HibernateUtil hu;
	
	@Rule
	public ExpectedException ee = ExpectedException.none();
	
	@Test
	public void testNullCase() {
		int id=0;
		ee.expect(NullPointerException.class);
		Cases c = ch.getById(id);
	}
	
	@Test
	public void testFindCase() {
		int id=1;
		Cases c = ch.getById(id);
		assertNotNull(c);
	}

}
