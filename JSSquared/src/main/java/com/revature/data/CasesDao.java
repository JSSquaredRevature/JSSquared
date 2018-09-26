package com.revature.data;

import java.util.List;

import com.revature.beans.Cases;

public interface CasesDao {

	 Cases getById(int id);
	 List<Cases> getAll();
	 Cases save(Cases s);
	 Cases update(Cases s);
	 void delete(Cases s);
	 
}
