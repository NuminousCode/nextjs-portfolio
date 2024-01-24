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

    const [emailError, setEmailError] = useState('');
    const [formErrors, setFormErrors] = useState('');

    const emailRegex = /\S+@\S+\.\S+/;

    // Updates formData state with new values when input field is changed.
    const handleChange = (e) => {
        const { name, value } = e.target;
            if (name === 'email') setEmailError('');
        setFormErrors('');
            if (name === 'email' && !emailRegex.test(value)) {
            setEmailError('Please enter a valid email address.');
        }
        setFormData({ ...formData, [name]: value });
    };

    // Validate required fields
    const validateForm = () => {
        const { firstName, lastName, email, phone, city, state, message } = formData;
        let errors = [];
        if (!firstName) errors.push('First Name');
        if (!lastName) errors.push('Last Name');
        if (!email || emailError) errors.push('Email');
        if (!phone) errors.push('Phone');
        if (!city) errors.push('City');
        if (!state) errors.push('State');
        if (message.length < 50) errors.push('Message (min 50 characters)');

        if (errors.length > 0) {
            setFormErrors(`Please fill the following fields: ${errors.join(', ')}.`);
            return false;
        }
        return true;
    };

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
        }
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
                    maxLength="20"
                    className={styles.inputField} 
                />
                <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name" 
                    value={formData.lastName} 
                    onChange={handleChange} 
                    maxLength="20"
                    className={styles.inputField} 
                />
                <input 
                    type="text" 
                    name="Company" 
                    placeholder="Company" 
                    value={formData.company} 
                    onChange={handleChange} 
                    maxLength="20"
                    className={styles.inputField} 
                />
                <div className = {styles.containerContact}>
                <input 
                    type="text" 
                    name="City" 
                    placeholder="City" 
                    value={formData.city} 
                    onChange={handleChange} 
                    maxLength="20"
                    className={styles.inputField} 
                />
                <input 
                    type="text" 
                    name="State" 
                    placeholder="State" 
                    value={formData.state} 
                    onChange={handleChange} 
                    maxLength="20"
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
                    maxLength="20"
                    className={styles.inputField} 
                />
                <input 
                    type="text" 
                    name="Email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    maxLength="20"
                    className={styles.inputField} 
                />
                </div>
                <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    maxLength="500"
                    className={`${styles.inputField} ${styles.message}`} 
                />
                <div className = {styles.containerBtn}>
                <button type="submit" className={styles.submitButton}>
                    Submit
                </button>
                {formErrors && <div className={styles.error}>{formErrors}</div>}
                </div>
            </form>
        </div>
    );
};

export default FormComponent;
