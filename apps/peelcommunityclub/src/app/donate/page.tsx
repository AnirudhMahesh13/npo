"use client";

import { useState } from 'react';

// Removed metadata export, now handled by layout.tsx

export default function DonatePage() {
  const [donationAmount, setDonationAmount] = useState<number | string>('');
  const [isRecurring, setIsRecurring] = useState(false);

  const handleAmountClick = (amount: number) => {
    setDonationAmount(amount);
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount(e.target.value);
  };

  const handleRecurringToggle = () => {
    setIsRecurring(!isRecurring);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Donation Submitted:', { donationAmount, isRecurring });
    alert(`Thank you for your ${isRecurring ? 'monthly ' : ''}donation of $${donationAmount}!`);
    // In a real application, this would integrate with a payment gateway
  };

  return (
    <div className="container mx-auto p-4">
      <section className="text-center my-8">
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Support Our Cause</h1>
        <p className="text-lg text-gray-700">Your generosity fuels our community initiatives.</p>
      </section>

      <section className="my-12 p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Make a Donation</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Choose an Amount:</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                type="button"
                onClick={() => handleAmountClick(25)}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ${donationAmount === 25 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-blue-800 hover:bg-blue-100'}`}
              >
                $25
              </button>
              <button
                type="button"
                onClick={() => handleAmountClick(50)}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ${donationAmount === 50 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-blue-800 hover:bg-blue-100'}`}
              >
                $50
              </button>
              <button
                type="button"
                onClick={() => handleAmountClick(100)}
                className={`px-6 py-3 rounded-full text-lg font-semibold transition duration-300 ${donationAmount === 100 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-blue-800 hover:bg-blue-100'}`}
              >
                $100
              </button>
            </div>
            <p className="text-center text-gray-600 my-4">Or enter a custom amount:</p>
            <input
              type="number"
              value={donationAmount}
              onChange={handleCustomAmountChange}
              placeholder="Custom Amount"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
              min="1"
            />
          </div>

          <div className="flex items-center justify-center space-x-3">
            <label htmlFor="recurring-donation" className="text-lg text-gray-700 cursor-pointer">
              Make this a monthly donation
            </label>
            <input
              type="checkbox"
              id="recurring-donation"
              checked={isRecurring}
              onChange={handleRecurringToggle}
              className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg text-xl focus:outline-none focus:shadow-outline"
            disabled={!donationAmount}
          >
            Donate Now
          </button>
        </form>
      </section>

      <section className="my-12 p-6 bg-blue-50 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Why Your Donation Matters</h2>
        <p className="text-lg text-gray-700">
          Every dollar you contribute directly supports our programs, helps us reach more community members,
          and strengthens the fabric of Peel. Learn more about where your money goes on our <a href="/impact" className="text-blue-600 hover:underline">Impact Page</a>.
        </p>
      </section>
    </div>
  );
}
