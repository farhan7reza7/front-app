import React, { useState, useEffect } from "react";
import axios from "axios";

const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/users");
        setData({ message: response.data });
        console.log("status: " + response.status, " data: " + response.data);
      } catch (error) {
        setData({ message: "error message: " + error.message });
      }
    };
    fetchData();
  }, []);

  return <div>{data && <p>{data}</p>}</div>;
};

export default MyComponent;
