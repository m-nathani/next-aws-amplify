import { headers } from "next/headers";
import React from "react";

export default function Page() {
  const header = headers();

  return <div>Page {header.get("host")}</div>;
}
