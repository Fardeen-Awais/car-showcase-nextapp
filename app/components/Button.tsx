'use client'
import { ButtonProps } from "@/types";
import Image from "next/image";

function Button({ title, containerStyles}: ButtonProps) {
  const handleScroll = () =>{

  }
  return (
    <button disabled={false} type="button" className={`custom-btn ${containerStyles}`} onClick={handleScroll}>
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  );
}

export default Button;
