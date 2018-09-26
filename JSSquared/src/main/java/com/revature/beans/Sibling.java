package com.revature.beans;

public class Sibling {
	private int id;
	private int eldercaseid;
	private int youngercaseid;
	public Sibling() {
		super();
	}
	public Sibling(int id, int eldercaseid, int youngercaseid) {
		super();
		this.id = id;
		this.eldercaseid = eldercaseid;
		this.youngercaseid = youngercaseid;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getEldercaseid() {
		return eldercaseid;
	}
	public void setEldercaseid(int eldercaseid) {
		this.eldercaseid = eldercaseid;
	}
	public int getYoungercaseid() {
		return youngercaseid;
	}
	public void setYoungercaseid(int youngercaseid) {
		this.youngercaseid = youngercaseid;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + eldercaseid;
		result = prime * result + id;
		result = prime * result + youngercaseid;
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
		Sibling other = (Sibling) obj;
		if (eldercaseid != other.eldercaseid)
			return false;
		if (id != other.id)
			return false;
		if (youngercaseid != other.youngercaseid)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Sibling [id=" + id + ", eldercaseid=" + eldercaseid + ", youngercaseid=" + youngercaseid + "]";
	}
}
