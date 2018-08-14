import React, { Component } from 'react'


import doctor from '../assets/craig.jpg'
import practice from '../assets/building.jpg'
import '../styles/content.css'



class IndexPage extends Component {
  componentDidMount() {

  }
  
  
    
  render(){
    return (
      <div className="content-2">
        <div className="column-1">
          <h1>About</h1>
          <p>Family Practice was established in 2004 by Dr. Craig Matheson. He and the Staff of Third Coast Family Practice are committed to caring for whole families at every stage of life. Building relationships with our patients allows us to understand their health histories, goals, and challenges. As your Primary Care Provider, we are the hub that connects all your health care interactions to coordinate and help you make choices about your health maintenance or disease management.</p>
          <img className="practice" src={practice} alt="Third Coast Family Practice building" />
          <div id="map"></div>
        </div>
        <div className="column-2">
          <h1>Doctor Matheson</h1>
          <img className="doc" src={doctor} alt="Doctor Craig Matheson" ></img>
          <p className="doc-text">Dr. Craig Matheson has been practicing medicine since graduating from the Chicago College of Osteopathic Medicine in 1987. His entire career has been devoted to providing personalized care in family private practices. Since his residency at Christ Hospital of Chicago in 1988, to earning a certification at the American Academy of Family Practice in 1991, through today, Dr. Matheson has cared for his patients as their own trusted private care physician. Proving his commitment to caring for people in every stage of life, Dr. Matheson is an AMA certified EPEC Trainer (Education of Physicians on End-of-Life Care) as well as a member of CHADD (Children with Hyperactivity Attention Deficit Disorder), the national resource on ADHD. He also sits on the Board of Directors for the Physician Organization of West Michigan and is a Certified Medical Examiner for the Federal Motor Carrier Safety Administration. </p>
        </div>
        
      </div>
    )
  }
} 

export default IndexPage
