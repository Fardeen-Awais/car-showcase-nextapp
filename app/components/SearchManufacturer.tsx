'use client'
import { useState, Fragment } from "react"
import { SearchManuFacturerProps } from "@/types"
import { Combobox, Transition } from "@headlessui/react"
import { manufacturers } from "@/constants"
import Image from "next/image"
const SearchManufacturer = ({manufacturer,setManuFacturer}:SearchManuFacturerProps) => {
  const [query,SetQuery] = useState('')

  const filteredManufacturer = query === "" ? manufacturers : manufacturers.filter((manufacturer)=>manufacturer.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, '')))

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManuFacturer}>
        <div className="relative w-full">
          <Combobox.Button className='absolute top-4'>
            <Image src="/car-logo.svg" alt="search" width={20} height={20} className="ml-4" />
          </Combobox.Button>

          <Combobox.Input className='search-manufacturer__input' onChange={(e)=>SetQuery(e.target.value)} placeholder="Search for a car" displayValue={(manufacturer:string)=>manufacturer} />
          <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={()=>SetQuery("")}
          >
            <Combobox.Options>
              {(filteredManufacturer.map((item)=>(
                <Combobox.Option key={item} value={item} className={({active})=>`relative search-manufacturer__option ${active ? 'bg-primary-blue text-white' : 'text-gray-900'}`}>
                  {item}
                </Combobox.Option>
              )))}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer