package com.revature.beans;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name = "transportation")
public class Transportation {
	@Id
	@Column(name = "id")
	@SequenceGenerator(name = "TRAN_SEQ", sequenceName = "TRAN_SEQ", allocationSize = 1)
	@GeneratedValue(generator = "TRAN_SEQ", strategy = GenerationType.AUTO)
	private int id;
	private int socialworkerid;
	private int caseid;
	private Timestamp time;
	private String location;

	public Transportation() {
		super();
	}

	public Transportation(int id, int socialworkerid, int caseid, Timestamp time, String location) {
		super();
		this.id = id;
		this.socialworkerid = socialworkerid;
		this.caseid = caseid;
		this.time = time;
		this.location = location;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getSocialworkerid() {
		return socialworkerid;
	}

	public void setSocialworkerid(int socialworkerid) {
		this.socialworkerid = socialworkerid;
	}

	public int getCaseid() {
		return caseid;
	}

	public void setCaseid(int caseid) {
		this.caseid = caseid;
	}

	public Timestamp getTime() {
		return time;
	}

	public void setTime(Timestamp time) {
		this.time = time;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + caseid;
		result = prime * result + id;
		result = prime * result + ((location == null) ? 0 : location.hashCode());
		result = prime * result + socialworkerid;
		result = prime * result + ((time == null) ? 0 : time.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Transportation other = (Transportation) obj;
		if (caseid != other.caseid)
			return false;
		if (id != other.id)
			return false;
		if (location == null) {
			if (other.location != null)
				return false;
		} else if (!location.equals(other.location))
			return false;
		if (socialworkerid != other.socialworkerid)
			return false;
		if (time == null) {
			if (other.time != null)
				return false;
		} else if (!time.equals(other.time))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Transportation [id=" + id + ", socialworkerid=" + socialworkerid + ", caseid=" + caseid + ", time="
				+ time + ", location=" + location + "]";
	}
}
