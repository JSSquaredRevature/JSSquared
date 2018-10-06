package com.revature.data;

import java.util.List;

import com.revature.beans.Placement;

public interface PlacementDao {

	List<Placement> getAll();

	Placement getById(int id);

	Placement save(Placement p);

	void delete(Placement p);

	Placement update(Placement p);

}
