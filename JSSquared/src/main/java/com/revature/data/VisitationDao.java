package com.revature.data;

import java.util.List;
import com.revature.beans.Visitation;

public interface VisitationDao {

	Visitation getById(int id);
	List<Visitation> getAll();
	List<Visitation> getByCaseId(int caseId);
	Visitation update(Visitation v);
	Visitation save(Visitation v);
	void delete(Visitation v);
}
