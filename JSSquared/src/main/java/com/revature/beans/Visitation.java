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
@Table(name = "visitation")
public class Visitation {
	@Id
	@Column(name = "id")
	@SequenceGenerator(name = "VISIT_SEQ", sequenceName = "VISIT_SEQ", allocationSize = 1)
	@GeneratedValue(generator = "VISIT_SEQ", strategy = GenerationType.AUTO)
	private int id;
	private Timestamp time;
	private String location;
	private int transportationid;
	private int socialworkerid;
	private int caseid;

	public Visitation() {
		super();
	}

	public Visitation(int id, int socialworkerid, int caseid, Timestamp time, String location, int transportationid) {
		super();
		this.id = id;
		this.socialworkerid = socialworkerid;
		this.caseid = caseid;
		this.time = time;
		this.location = location;
		this.transportationid = transportationid;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
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

	public int getTransportationid() {
		return transportationid;
	}

	public void setTransportationid(int transportationid) {
		this.transportationid = transportationid;
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

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + caseid;
		result = prime * result + id;
		result = prime * result + ((location == null) ? 0 : location.hashCode());
		result = prime * result + socialworkerid;
		result = prime * result + ((time == null) ? 0 : time.hashCode());
		result = prime * result + transportationid;
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
		Visitation other = (Visitation) obj;
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
		if (transportationid != other.transportationid)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Visitation [id=" + id + ", time=" + time + ", location=" + location + ", transportationid="
				+ transportationid + ", socialworkerid=" + socialworkerid + ", caseid=" + caseid + "]";
	}

}
