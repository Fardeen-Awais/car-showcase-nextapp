"use client"
import { SearchManufacturer } from "."
import { useState } from "react"

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("")
  const handleSearch =()=>{}

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer manufacturer={manufacturer} setManuFacturer={setManuFacturer}/> {/* This might be audi, ferrari. Fiter for companies  */}
      </div>
    </form>
  )
}

export default SearchBar