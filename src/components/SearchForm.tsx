import React from 'react';

interface SearchFormProps {
    handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchForm: React.FC<SearchFormProps> = ({ handleSearch, inputValue, setInputValue }) => {
    return (
        <div className='my-10'>
            <form onSubmit={handleSearch} className='flex gap-5'>
                <input 
                    type='text' 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    placeholder='Search for Notices' 
                    className='p-2 border rounded'
                />
                <button type='submit' className='bg-blue-500 text-white p-2 px-5 rounded-lg'>Search</button>
            </form>
            <p className='text-xs w-72'>
                <span className='font-semibold'>Suggestions:</span> Mars, Earth, Jupiter, Sun, etc...
            </p>
        </div>
    );
};

export default SearchForm;
