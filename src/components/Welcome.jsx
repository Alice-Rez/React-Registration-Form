import React, { useContext } from "react";
import { loggContext } from "./context";

export default function Welcome() {
  const context = useContext(loggContext);
  return (
    <div className="alert-success text-center w-50 h-50">
      Welcome {context.user}
    </div>
  );
}
