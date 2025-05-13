import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#1A1A2E] text-white p-4">
      <div className="mb-8">
        <Image
          src="/your-illustration.svg" // Replace with your image path e.g., /illustration.png
          alt="Swipeverse Illustration"
          width={300} // Adjust as needed
          height={200} // Adjust as needed
          priority
        />
      </div>

      <h1 className="text-6xl font-bold tracking-[0.2em] mb-2 text-center">
        SWIPEVERSE
      </h1>
      <p className="text-lg tracking-[0.3em] mb-10 text-gray-300 text-center">
        UNBIASED DATING APP
      </p>

      <Link href="/home" legacyBehavior>
        <a className="bg-white text-[#1A1A2E] font-semibold py-3 px-8 rounded-md hover:bg-gray-200 transition-colors">
          LET'S START
        </a>
      </Link>
    </div>
  );
}
