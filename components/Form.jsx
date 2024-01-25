import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../styles/Form.module.css';

const FormComponent = () => {
    const form = useRef()
    const [submissionMessage, setSubmissionMessage] = useState('');
    // Form data state variable declaration
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company:'',
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
        if (!message) errors.push('Message');

        if (errors.length > 0) {
            setFormErrors(`Please fill the following fields: ${errors.join(', ')}.`);
            return false;
        }
        return true;
    };

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            emailjs.sendForm(serviceId, templateId, form.current, publicKey).then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

            console.log('Form submitted:', formData);
            setFormData({
                firstName: '',
                lastName: '',
                company: '',
                email: '',
                phone: '',
                city: '',
                state: '',
                message: ''
            });
        setSubmissionMessage('Your form has been submitted successfully!');

        setTimeout(() => {
            setSubmissionMessage('');
        }, 5000);

        } (error) => {
            console.log('Form submission error:', error.text);
        
            setSubmissionMessage('Failed to send the message. Please try again.');
        };
    };

    return (
        <div className={styles.formContainer}>
            <form ref={form} onSubmit={handleSubmit} className = {styles.form}>
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
                    name="email" 
                    placeholder="Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    maxLength="20"
                    className={styles.inputField} 
                />
                <div className = {styles.containerContact}>
                <input 
                    type="text" 
                    name="city" 
                    placeholder="City" 
                    value={formData.city} 
                    onChange={handleChange} 
                    maxLength="20"
                    className={styles.inputField} 
                />
                <input 
                    type="text" 
                    name="state" 
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
                    name="phone" 
                    placeholder="Phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    maxLength="20"
                    className={styles.inputField} 
                />
                <input 
                    type="text" 
                    name="company" 
                    placeholder="Company" 
                    value={formData.company} 
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
                {submissionMessage && <div className={styles.confirmationMessage}>{submissionMessage}</div>}
                </div>
            </form>
        </div>
    );
};

export default FormComponent;
