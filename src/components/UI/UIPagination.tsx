import { MouseEventHandler } from "react";

interface Props {
    onClickPrevPage: MouseEventHandler<HTMLButtonElement>;
    onClickNextPage: MouseEventHandler<HTMLButtonElement>;
    currentPage: number;
    totalPages: number;
    

}

const UIPagination = ({onClickPrevPage, onClickNextPage , currentPage, totalPages}:Props) => {



    return (
        <div className="flex justify-center my-5">
            <button onClick={onClickPrevPage} disabled={currentPage === 1} className="px-4 py-2 bg-gray-700 text-white rounded-l-lg">
                Previous
            </button>
            <span className="px-4 py-2 bg-gray-300 text-gray-700">
                Page {currentPage} of {totalPages}
            </span>
            <button onClick={onClickNextPage} disabled={currentPage === totalPages} className="px-4 py-2 bg-gray-700 text-white rounded-r-lg">
                Next
            </button>
        </div>
    )
}

export default UIPagination