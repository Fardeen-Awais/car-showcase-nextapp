'use client'
import { useState } from "react"
import { SearchManufacturerProps } from "@/types"
import { Combobox, Transition } from "@headlessui/react"
import Image from "next/image"
const SearchManufacturer = ({manufacturer,setManufacturer}:SearchManufacturerProps) => {
  const [query,SetQuery] = useState('')
  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full">
          <Combobox.Button className='absolute top-4'>
            <Image src="/car-logo.svg" alt="search" width={20} height={20} className="ml-4" />
          </Combobox.Button>

          <Combobox.Input className='search-manufacturer__input' onChange={(e)=>SetQuery(e.target.value)} placeholder="Search for a car" displayValue={((manufacturer:string)=>manufacturer)} />
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer