package com.revature.data;

import java.util.List;

import com.revature.beans.CourtDate;

public interface CourtDateDao {

	CourtDate getById(int id);
	List<CourtDate> getAll();
	List<CourtDate> getByCaseId(int caseId);
	CourtDate update(CourtDate cd);
	CourtDate save(CourtDate cd);
	void delete(CourtDate cd);
	List<CourtDate> getBySwId(int swId);
	
}
