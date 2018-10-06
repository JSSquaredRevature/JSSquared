package com.revature.data;

import java.util.List;

import com.revature.beans.Case;

public interface CaseDao {

	Case getById(int id);

	List<Case> getBySocialWorkerId(int socialWorkerId);

	List<Case> getByName(String name);

	List<Case> getByNameAndSW(String name, int socialworkerid);

	List<Case> getAll();

	Case save(Case s);

	Case update(Case s);

	void delete(Case s);

}
