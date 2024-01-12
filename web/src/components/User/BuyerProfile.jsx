import { useState, useEffect } from "react";
import LoaderBuyer from "../User/LoaderBuyer";
const UserBuyer = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        <LoaderBuyer />
      ) : (
        <div>
          <h1 className="font-pop text-lg lg:m-10">Check our properties</h1>
        </div>
      )}
    </>
  );
};

export default UserBuyer;
