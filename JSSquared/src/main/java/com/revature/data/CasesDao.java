package com.revature.data;

import java.util.List;

import com.revature.beans.Cases;

public interface CasesDao {

	 Cases getById(int id);
	 List<Cases> getBySocialWorkerId(int socialWorkerId);
	 List<Cases> getByName(String name);
	 List<Cases> getByNameAndSW(String name, int socialworkerid);
	 List<Cases> getAll();
	 Cases save(Cases s);
	 Cases update(Cases s);
	 void delete(Cases s);
	 
}
