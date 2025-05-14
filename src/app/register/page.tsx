import React from "react";
import Link from "next/link";

export default function page() {
  return (
    <div>
      <h2>Resiger</h2>
      <Link href="/" className="text-blue-600 hover:underline">
        ← Back to Home
      </Link>
    </div>
  );
}
