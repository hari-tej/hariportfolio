import React from 'react'
import './styling/footer.css'
import {FaPhone,FaMapPin} from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="top">
          <footer className="py-5  text-center text-light">
          <h5 className="text-end">Aizawl,Mizoram <FaMapPin/></h5>
          <h5 className="text-end">+91-7005039663 <FaPhone/></h5><br></br>
            <h4>copyright@ CHEGONDI HARI TEJA</h4>
          </footer>
    </div>
  )
}

