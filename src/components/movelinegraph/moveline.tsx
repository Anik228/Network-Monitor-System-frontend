// pages/index.js
"use client";
import { useState, useEffect } from 'react';
import LineGraph from '@/components/movelinegraph/movelinedata';

const generateRandomData = () => {
  const data = [];
  for (let i = 0; i < 20; i++) {
    data.push({ name: i, value: Math.random() * 100 });
  }
  return data;
};

const Home = () => {
  const [data, setData] = useState(generateRandomData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateRandomData());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div >
     
      <LineGraph data={data} />

    </div>
  );
};

export default Home;
