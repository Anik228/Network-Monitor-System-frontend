import React, { useState, useEffect } from "react";
import baseUrl from "../common/common_url";

const TotalInActive = () => {
  const [totalInactive, setTotalInActive] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch(`${baseUrl}/device/total-device-count`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setTotalInActive(result.totalInactive);
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
      <div className="card w-auto bg-[#D24940] text-white shadow-lg">
        <div className="items-center text-center">
          <div className="flex flex-col justify-center items-center py-10">
            <div className="card-title text-6xl font-bold mb-2">{totalInactive}</div>
            <div className="card-title">Inactive</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalInActive;