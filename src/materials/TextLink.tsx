import Link from "next/link";
import React from "react";
type GreetingProps = {
  label?: string;
  link: string;
  word?: string;
};

function TextLink({ label, link, word }: GreetingProps) {
  return (
    <div>
      {label} {""}
      <Link href={link} className="text-blue-600 hover:underline">
        {word}
      </Link>
    </div>
  );
}

export default TextLink;
