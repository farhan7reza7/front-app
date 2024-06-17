import React, { useState, useEffect } from "react";
import axios from "axios";

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/users");
        setData({ message: "data loaded: " + response.data.title });
      } catch (error) {
        setData({ message: "error message: " + error.message });
      }
    };
    fetchData();
  }, []);

  return <div>{data && <p>{data.message}</p>}</div>;
};

export default MyComponent;
