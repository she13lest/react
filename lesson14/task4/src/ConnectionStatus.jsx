import React, { useEffect, useState } from "react";

const ConnectionStatus = () => {
  const [status, setStatus] = useState("online");

  useEffect(() => {
    const onOnline = () => {
      setStatus("online");
    };

    const onOffline = () => {
      setStatus("offline");
    };

    window.addEventListener("online", onOnline);
    window.addEventListener("offline", onOffline);

    return () => {
      window.removeEventListener("online", onOnline);
      window.removeEventListener("offline", onOffline);
    };
  }, []);

  const { currentStatus } = status;

  return (
    <div className={status === "online" ? "status" : "status status_offline"}>
      {currentStatus}
    </div>
  );
};

export default ConnectionStatus;
