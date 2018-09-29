package com.revature.beans;

import java.sql.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="court_date")
public class CourtDate {
	@Id
	@Column(name="id")
	@SequenceGenerator(name="COURT_SEQ", sequenceName="COURT_SEQ")
	@GeneratedValue(generator="COURT_SEQ", strategy=GenerationType.AUTO)
	private int id;
	private int caseid;
	private Date time;
	private String location;
	private int transportationid;
	public CourtDate() {
		super();
	}
	public CourtDate(int id, int caseid, Date time, String location, int transportationid) {
		super();
		this.id = id;
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
	public int getCaseid() {
		return caseid;
	}
	public void setCaseid(int caseid) {
		this.caseid = caseid;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
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
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + caseid;
		result = prime * result + id;
		result = prime * result + ((location == null) ? 0 : location.hashCode());
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
		CourtDate other = (CourtDate) obj;
		if (caseid != other.caseid)
			return false;
		if (id != other.id)
			return false;
		if (location == null) {
			if (other.location != null)
				return false;
		} else if (!location.equals(other.location))
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
		return "Court_Date [id=" + id + ", caseid=" + caseid + ", time=" + time + ", location=" + location
				+ ", transportationid=" + transportationid + "]";
	}
	
}
