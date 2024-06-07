import { Tooltip } from 'react-tooltip';

interface Props {
    handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchForm = ({ handleSearch, inputValue, setInputValue }: Props) => {
    return (
        <div className='my-10'>
            <form onSubmit={handleSearch} className='flex gap-5'>
                <input 
                    data-tooltip-id="search" data-tooltip-content='Can type Mars, Earth, Sun, etc...' data-tooltip-place="top"
                    type='text' 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)} 
                    placeholder='Search for Notices' 
                    className='p-2 border rounded'
                />
                <button type='submit' className='bg-blue-500 text-white p-2 px-5 rounded-lg'>Search</button>
                <Tooltip id="search" />
            </form>
            
        </div>
    );
};

export default SearchForm;
