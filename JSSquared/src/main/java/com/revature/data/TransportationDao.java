package com.revature.data;

import java.util.List;

import com.revature.beans.Transportation;

public interface TransportationDao {

	List<Transportation> getAll();

	List<Transportation> getBySocialWorkerId(int socialWorkerId);

	List<Transportation> getByCasesId(int casesId);

	Transportation getById(int id);

	Transportation save(Transportation t);

	Transportation update(Transportation t);

	void delete(Transportation t);

}
