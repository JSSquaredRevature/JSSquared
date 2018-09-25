package com.revature.beans;

public class Placement {

	private int id;
	private String type;
	private int maxcapacity;
	private int agemin;
	private int agemax;
	public Placement() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Placement(int id, String type, int maxcapacity, int agemin, int agemax) {
		super();
		this.id = id;
		this.type = type;
		this.maxcapacity = maxcapacity;
		this.agemin = agemin;
		this.agemax = agemax;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public int getMaxcapacity() {
		return maxcapacity;
	}
	public void setMaxcapacity(int maxcapacity) {
		this.maxcapacity = maxcapacity;
	}
	public int getAgemin() {
		return agemin;
	}
	public void setAgemin(int agemin) {
		this.agemin = agemin;
	}
	public int getAgemax() {
		return agemax;
	}
	public void setAgemax(int agemax) {
		this.agemax = agemax;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + agemax;
		result = prime * result + agemin;
		result = prime * result + id;
		result = prime * result + maxcapacity;
		result = prime * result + ((type == null) ? 0 : type.hashCode());
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
		Placement other = (Placement) obj;
		if (agemax != other.agemax)
			return false;
		if (agemin != other.agemin)
			return false;
		if (id != other.id)
			return false;
		if (maxcapacity != other.maxcapacity)
			return false;
		if (type == null) {
			if (other.type != null)
				return false;
		} else if (!type.equals(other.type))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Placement [id=" + id + ", type=" + type + ", maxcapacity=" + maxcapacity + ", agemin=" + agemin
				+ ", agemax=" + agemax + "]";
	}
	
	
}
