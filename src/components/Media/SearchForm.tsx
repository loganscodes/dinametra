import UIButton from '../UI/UIButton';
import UIInput from '../UI/UIInput';

interface Props {
    handleSearch: (e: React.FormEvent<HTMLFormElement>) => void;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchForm = ({ handleSearch, inputValue, setInputValue }: Props) => {
    return (
        <div className='my-10'>
            <form onSubmit={handleSearch} className='flex gap-5'>


                <UIInput tooltipID='search' tooltipContent='Can type Mars, Earth, Sun, etc...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder='Search media' />

                <UIButton type='submit' tooltipID='search-button' tooltipContent='Search Button' className=' bg-gray-700 text-white px-4 py-2 rounded-lg' text='Search' />


            </form>

        </div>
    );
};

export default SearchForm;
