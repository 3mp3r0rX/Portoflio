'use client'

import { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Spinner from '@/components/Spinner'; 

export default function Home() {
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main>
        {loading ? (
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-50">
            <Spinner />
          </div>
        ) : (
          <Hero />
        )}
      </main>
    </div>
  );
}
