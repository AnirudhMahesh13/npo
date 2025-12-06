"use client";

import { useState } from 'react';
import { Button } from '../../components/Button';
import { Input, TextArea } from '../../components/Input';

// Removed metadata export, now handled by layout.tsx

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact Form Data Submitted:', formData);
    // Placeholder for API submission (reusing the existing submit-form API route)
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    console.log(result);
    alert('Thank you for your message! We will get back to you shortly.');
  };

  return (
    <div className="container mx-auto p-4">
      <section className="text-center my-12">
        <h1 className="text-5xl font-extrabold text-primary mb-6">Get in Touch with Us</h1>
        <p className="text-xl text-text leading-relaxed max-w-3xl mx-auto">
          Have questions, suggestions, or just want to say hello? Reach out to us through the form below.
        </p>
      </section>

      <section className="my-16 p-8 bg-white rounded-2xl shadow-xl max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-10 text-center">Send Us a Message</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Your Name:"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            label="Your Email:"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Subject:"
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <TextArea
            label="Message:"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            required
          />
          <Button type="submit" variant="primary" className="w-full">
            Send Message
          </Button>
        </form>
      </section>

      <section className="my-16 p-8 bg-background rounded-2xl shadow-xl">
        <h2 className="text-4xl font-bold text-primary mb-10 text-center">Our Location</h2>
        <div className="aspect-video w-full rounded-lg overflow-hidden mb-6 shadow-md">
          {/* Placeholder for an embedded map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.67890!2d-79.7616!3d43.6815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDQwJzMzLjQiTiA3OcKwNDUnMDkuOCJX!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="PeelCommunityClub Location"
            aria-label="Location of PeelCommunityClub on Google Maps"
          ></iframe>
        </div>
        <p className="text-center text-lg text-text mt-4">123 Community Lane, Brampton, ON L6X 0A1</p>
      </section>
    </div>
  );
}
