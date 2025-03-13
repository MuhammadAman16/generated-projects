import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Use EmailJS to send the form
      emailjs.sendForm(
        'service_id', // Replace with your EmailJS service ID
        'template_id', // Replace with your EmailJS template ID
        formRef.current,
        'user_id' // Replace with your EmailJS user ID
      )
        .then((result) => {
          setIsSubmitting(false);
          toast.success('Message sent successfully!');
          // Reset form
          setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        }, (error) => {
          setIsSubmitting(false);
          toast.error('Failed to send message. Please try again.');
          console.error(error);
        });
    }
  };

  return (
    <section id="contact" className="contact">
      <motion.h2 
        className="section-title contact-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>
      
      <motion.p 
        className="contact-subtitle"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </motion.p>
      
      <motion.form 
        ref={formRef}
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" name="name" className="form-input" value={formData.name} onChange={handleChange} />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" name="email" className="form-input" value={formData.email} onChange={handleChange} />
          {errors.email && <span className="form-error">{errors.email}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="subject" className="form-label">Subject</label>
          <input type="text" id="subject" name="subject" className="form-input" value={formData.subject} onChange={handleChange} />
          {errors.subject && <span className="form-error">{errors.subject}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" name="message" className="form-textarea" value={formData.message} onChange={handleChange}></textarea>
          {errors.message && <span className="form-error">{errors.message}</span>}
        </div>
        
        <button type="submit" className="btn submit-btn" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>
      
      <motion.div 
        className="contact-alternatives"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <p className="contact-alternatives-text">Or reach me directly at:</p>
        <a href="mailto:john.doe@example.com" className="contact-email">john.doe@example.com</a>
        
        <div className="social-links">
          <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://twitter.com/johndoe" target="_blank" rel="noopener noreferrer" className="social-link">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;