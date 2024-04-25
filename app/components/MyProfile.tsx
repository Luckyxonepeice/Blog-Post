import Image from "next/image";

import React from 'react'

export default function MyProfile() {
  return (
    <section className="w-full mx-auto">
      
      <Image
      className="border-4 border-gray-300 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/image/my-pic.png"
        width={200}
        height={200}
        alt="Lucky Pic"
        priority={true}
      >

      </Image>
    </section>
  )
}
