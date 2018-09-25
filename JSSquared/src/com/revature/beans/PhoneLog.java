package com.revature.beans;

import java.sql.Date;

public class PhoneLog {

	private int id;
	private int caseid;
	private String caller;
	private Date time;
	private String duration;
	public PhoneLog() {
		super();
		// TODO Auto-generated constructor stub
	}
	public PhoneLog(int id, int caseid, String caller, Date time, String duration) {
		super();
		this.id = id;
		this.caseid = caseid;
		this.caller = caller;
		this.time = time;
		this.duration = duration;
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
	public String getCaller() {
		return caller;
	}
	public void setCaller(String caller) {
		this.caller = caller;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public String getDuration() {
		return duration;
	}
	public void setDuration(String duration) {
		this.duration = duration;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((caller == null) ? 0 : caller.hashCode());
		result = prime * result + caseid;
		result = prime * result + ((duration == null) ? 0 : duration.hashCode());
		result = prime * result + id;
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
		PhoneLog other = (PhoneLog) obj;
		if (caller == null) {
			if (other.caller != null)
				return false;
		} else if (!caller.equals(other.caller))
			return false;
		if (caseid != other.caseid)
			return false;
		if (duration == null) {
			if (other.duration != null)
				return false;
		} else if (!duration.equals(other.duration))
			return false;
		if (id != other.id)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "PhoneLog [id=" + id + ", caseid=" + caseid + ", caller=" + caller + ", duration=" + duration + "]";
	}
	
	
}
