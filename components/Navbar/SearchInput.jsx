import React, { useState } from 'react'

const SearchInput = () => {
  const [isInputOpen, setIsInputOpen] = useState(false)
  const [isInputActive, setIsInputActive] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const handleMouseEnter = () => {
    setIsInputOpen(true)
  }

  const handleMouseLeave = () => {
    if (!searchValue && !isInputActive) {
      setIsInputOpen(false)
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchValue(value)
    if (value) {
      setIsInputOpen(true)
    } else {
      setIsInputOpen(false)
    }
  }

  const handleInputFocus = () => {
    setIsInputOpen(true)
    setIsInputActive(true)
  }

  const handleInputBlur = () => {
    setIsInputActive(false)
  }

  return (
    <div
      className='relative transition-all duration-300 py-2 px-2'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className='absolute inset-y-0 right-0 flex items-center px-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          stroke-width='1.5'
          stroke='currentColor'
          class='w-6 h-6'
        >
          <path
            stroke-linecap='round'
            stroke-linejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </button>
      <input
        className={`pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 ${
          isInputOpen ? 'opacity-100' : 'opacity-0'
        }`}
        placeholder='Search...'
        style={{
          width: isInputOpen ? '200px' : '0',
          transition: 'width 300ms, opacity 300ms',
        }}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChange={handleInputChange}
        value={searchValue}
      />
    </div>
  )
}

export default SearchInput
