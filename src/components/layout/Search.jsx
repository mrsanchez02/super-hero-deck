import React from 'react'

const Search = () => {
  return (
    <div>
      <form className="d-flex py-3">
                <input 
                    className="form-control me-2" 
                    type="search" 
                    placeholder="Ex. batman" 
                    aria-label="Search"
                />
                <button 
                    className="btn btn-outline-light" 
                    type="submit"
                >Search</button>
        </form>
    </div>
  )
}

export default Search
