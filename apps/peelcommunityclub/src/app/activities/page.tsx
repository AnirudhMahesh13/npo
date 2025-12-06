"use client";

import { useState } from 'react';
import { Button } from '../../components/Button';
import { Input, TextArea } from '../../components/Input';
import Link from 'next/link';

// Removed metadata export, now handled by layout.tsx

export default function ActivitiesPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    waiver: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // Placeholder for API submission
    const response = await fetch('/api/submit-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    console.log(result);
    alert('Thank you for signing up!');
  };

  return (
    <div className="container mx-auto p-4">
      <section className="text-center my-12">
        <h1 className="text-5xl font-extrabold text-primary mb-6">Volunteer with PeelCommunityClub</h1>
        <p className="text-xl text-text leading-relaxed max-w-3xl mx-auto">
          Join our dedicated team of volunteers and make a tangible difference in the lives of our community members.
        </p>
      </section>

      <section className="my-16 p-8 bg-white rounded-2xl shadow-xl max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-primary mb-10 text-center">Snow Shoveling Volunteer Sign-Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Full Name:"
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <Input
            label="Email:"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Phone:"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <TextArea
            label="Brampton Address:"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            rows={4}
            required
          />
          <div className="flex items-center">
            <input
              type="checkbox"
              id="waiver"
              name="waiver"
              checked={formData.waiver}
              onChange={handleChange}
              className="mr-3 h-5 w-5 text-primary focus:ring-primary border-gray-300 rounded"
              required
            />
            <label htmlFor="waiver" className="text-base text-text cursor-pointer">
              I agree to the volunteer waiver and terms of service.
            </label>
          </div>
          <Button type="submit" variant="primary" className="w-full">
            Sign Up Now
          </Button>
        </form>
      </section>

      <section className="my-16 p-8 bg-background rounded-2xl shadow-xl text-center">
        <h2 className="text-4xl font-bold text-primary mb-6">Other Ways to Help</h2>
        <p className="text-xl text-text mb-8 max-w-2xl mx-auto">
          Explore more opportunities to contribute to our community.
        </p>
        <Button variant="outline" size="lg" asChild>
          <Link href="/contact">
            Contact Us
          </Link>
        </Button>
      </section>
    </div>
  );
}
