import React, { useState, useEffect } from 'react';

const DataPage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    // Fetch data from the API route
    fetch('/api/data')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <h2>Data from API</h2>
      <ul>
        <li>Message: {data.message}</li>
        <li>Timestamp: {data.timestamp}</li>
      </ul>
    </div>
  );
};

export default DataPage;
