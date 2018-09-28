package com.revature.data;

import java.util.List;

import com.revature.beans.PhoneLog;

public interface PhoneLogDao {

	PhoneLog getById(int id);
	List<PhoneLog> getByCaseId(int caseid);
	PhoneLog save(PhoneLog pl);
	PhoneLog update(PhoneLog pl);
	void delete(PhoneLog pl);
}
