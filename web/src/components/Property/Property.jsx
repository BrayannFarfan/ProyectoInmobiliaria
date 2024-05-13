import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Property() {
  const [propInfo, setPropinfo] = useState();
  const { property_id } = useParams();

  useEffect(() => {
    try {
      const info = axios.get(`http://localhost:3000/properties/${property_id}`);
      setPropinfo(info.data);
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div>
      <p>Holi</p>
    </div>
  );
}
