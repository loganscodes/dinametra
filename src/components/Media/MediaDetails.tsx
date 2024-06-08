import { Item } from '../../interfaces/interfaces';
import UITitle from '../UI/UITitle';
import UIParagraph from '../UI/UIParagraph';
import SeeVideo from '../SeeVideo';
import UIButton from '../UI/UIButton';


interface Props {
    selectedNotice: Item;
    handleClose: () => void;
}

const MediaDetails = ({ selectedNotice, handleClose }: Props) => {

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-75 flex justify-center items-center  overflow-y-auto">
            <div className="max-w-lg bg-white rounded-lg shadow-lg p-8">
                {selectedNotice.data.map((datum, index) => (
                    <div key={index}>

                        <UITitle tag='h2' className='text-2xl font-bold mb-4 text-center' tooltipID='title' title={datum.title} tooltipContent={datum.title} />
                        <UIParagraph tooltipID='description' tooltipContent='Description' className='mb-4 text-justify' content={datum.description} />
                        <SeeVideo selectedNotice={selectedNotice.href} />
                        <UIParagraph className='font-bold' content='Keywords' tooltipContent='Keywords' tooltipID='key' />
                        <UIParagraph className='text-blue-500' content={datum.keywords.join(', ')} useDangerousHTML={true} />

                    </div>
                ))}
                <UIButton onClick={handleClose} text='Close'/>
            </div>
        </div>
    );
};

export default MediaDetails;
