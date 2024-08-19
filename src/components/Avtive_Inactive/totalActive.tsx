import React, { useState, useEffect } from "react";
import baseUrl from "../common/common_url";

const TotalActive = () => {
  // State to store the fetched data
  const [totalActive, setTotalActive] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}/device/total-device-count`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setTotalActive(result.totalActive);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setLoading(false);
    }
  };

  // useEffect to fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <div className="mt-5 mb-4">
      <div className="card w-auto bg-[#4DCBA8]  text-white shadow-lg">
        <div className="items-center text-center">
          <div className="flex flex-col justify-center items-center py-10">
            <div className="card-title text-6xl font-bold mb-2">{totalActive}</div>
            <div className="card-title">Active</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalActive;