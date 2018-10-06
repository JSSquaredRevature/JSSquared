package com.revature.data;

import java.util.List;

import com.revature.beans.SocialWorker;

public interface SocialWorkerDao {

	SocialWorker getById(int id);

	SocialWorker getByLogin(String username, String pass);

	SocialWorker save(SocialWorker s);

	SocialWorker update(SocialWorker s);

	void delete(SocialWorker s);

	List<SocialWorker> getAll();

}
