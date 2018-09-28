package com.revature.data;

import com.revature.beans.Placement;

public interface PlacementDao {

	Placement getById(int id);
	Placement save(Placement p);
	void delete(Placement p);
	Placement update(Placement p);
	
}
