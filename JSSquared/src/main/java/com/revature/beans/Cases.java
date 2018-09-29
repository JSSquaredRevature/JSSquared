package com.revature.beans;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="CASES")
public class Cases {
	
	@Id
	@Column(name="caseid")
	@SequenceGenerator(name="CID_SEQ", sequenceName="CID_SEQ")
	@GeneratedValue(generator="CID_SEQ", strategy=GenerationType.AUTO)	
	private int caseid;
	private String firstname;
	private String lastname;
	private Date birthdate;
	private int rating;
	// Need to add annotations to denote relationships with SocialWorker and Placement entities
	@ManyToOne(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinColumn(name="socialworkerid")
	private SocialWorker sw;
	
	@ManyToOne(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinColumn(name="placementid")
	private Placement placement;

	


	
	
	public Cases() {
		super();
	}

	public Cases(int caseid, String firstname, String lastname, Date birthdate, int rating) {
		super();
		this.caseid = caseid;
		this.firstname = firstname;
		this.lastname = lastname;
		this.birthdate = birthdate;
		this.rating = rating;
	
	}

	public Placement getPlacement() {
		return placement;
	}

	public void setPlacement(Placement placement) {
		this.placement = placement;
	}

	public SocialWorker getSw() {
		return sw;
	}

	public void setSw(SocialWorker sw) {
		this.sw = sw;
	}
	public int getCaseid() {
		return caseid;
	}

	public void setCaseid(int caseid) {
		this.caseid = caseid;
	}

	public String getFirstname() {
		return firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((birthdate == null) ? 0 : birthdate.hashCode());
		result = prime * result + caseid;
		result = prime * result + ((firstname == null) ? 0 : firstname.hashCode());
		result = prime * result + ((lastname == null) ? 0 : lastname.hashCode());
		result = prime * result + rating;
		
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
		Cases other = (Cases) obj;
		if (birthdate == null) {
			if (other.birthdate != null)
				return false;
		} else if (!birthdate.equals(other.birthdate))
			return false;
		if (caseid != other.caseid)
			return false;
		if (firstname == null) {
			if (other.firstname != null)
				return false;
		} else if (!firstname.equals(other.firstname))
			return false;
		if (lastname == null) {
			if (other.lastname != null)
				return false;
		} else if (!lastname.equals(other.lastname))
			return false;
		
		if (rating != other.rating)
			return false;
		
		return true;
	}

	@Override
	public String toString() {
		return "Cases [caseid=" + caseid + ", firstname=" + firstname + ", lastname=" + lastname + ", birthdate="
				+ birthdate + ", rating=" + rating  + "]";
	}
	
}
