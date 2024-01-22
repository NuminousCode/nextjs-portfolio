import React, { useState } from 'react';
import styles from '../styles/Form.module.css';

const FormComponent = () => {

    // Form data state variable declaration
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        city: '',
        state: '',
        message: ''
    });

    // Updates formData state with new values when input field is changed.
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className = {styles.form}>
                <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name" 
                    value={formData.firstName} 
                    onChange={handleChange} 
                    className={styles.inputField} 
                />
                <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                    className={styles.inputField} 
                />
                <input 
                    type="text" 
                    name="Company" 
                    placeholder="Company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    className={styles.inputField} 
                />
                <div className = {styles.containerContact}>
                <input 
                    type="text" 
                    name="City" 
                    placeholder="City" 
                    value={formData.city} 
                    onChange={handleChange} 
                    className={styles.inputField} 
                />
                <input 
                    type="text" 
                    name="State" 
                    placeholder="State" 
                    value={formData.state} 
                    onChange={handleChange} 
                    className={styles.inputField} 
                />
                </div>
                <div className ={styles.containerContact}>
                <input 
                    type="text" 
                    name="Phone" 
                    placeholder="Phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className={styles.inputField} 
                />
                <input 
                    type="text" 
                    name="Email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    className={styles.inputField} 
                />
                </div>
                <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    className={`${styles.inputField} ${styles.message}`} 
                />
                <button type="submit" className={styles.submitButton}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormComponent;
