import React from 'react';
import styles from '../Contact.module.css';
import SectionSubheader from '@/app/components/SectionSubheader';

const ContactForm = () => (
  <div className={styles.contactForms}>
    <div className={styles.contactFormHeader}>
      <SectionSubheader className={styles.contactsubTitle}>// SCHEDULE A CALL</SectionSubheader>
      <h3 className={styles.contactFormHeading}>Request Proposal</h3>
    </div>

    <form className={styles.formContainer}>
      <FormField 
        id="fullName" 
        label="Full Name" 
        type="text" 
        required 
      />
      
      <FormField 
        id="company" 
        label="Company" 
        type="text" 
        required 
      />
      
      <FormField 
        id="emailAddress" 
        label="Email Address" 
        type="email" 
        required 
      />
      
      <FormField 
        id="phoneNumber" 
        label="Phone Number" 
        type="tel" 
        required 
      />
      
      <div className={styles.formField}>
        <label htmlFor="yourMessage">Your Message <span style={{ color: 'red' }}>*</span></label>
        <textarea className={styles.formInput} id="yourMessage" required />
      </div>

      <button type="submit" className={styles.formButton}>Send</button>
    </form>
  </div>
);

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  required?: boolean;
}

const FormField = ({ id, label, type, required = false }: FormFieldProps) => (
  <div className={styles.formField}>
    <label htmlFor={id}>
      {label} {required && <span style={{ color: 'red' }}>*</span>}
    </label>
    <input 
      className={styles.formInput} 
      type={type} 
      id={id} 
      name={id} 
      required={required} 
    />
  </div>
);

export default ContactForm;
