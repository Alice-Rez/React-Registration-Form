import React, { useContext } from "react";
import { loggContext } from "./context";

export default function ProfileInfo() {
  const context = useContext(loggContext);
  return (
    <div className="alert-success">
      {context.user}, here are your profile information
    </div>
  );
}
