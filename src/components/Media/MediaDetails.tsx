import UITitle from '../UI/UITitle';
import UIParagraph from '../UI/UIParagraph';
import UIButton from '../UI/UIButton';
import { useVideoNasa } from '../../hooks/useVideoNasa';
import UIVideo from '../UI/UIVideo';
import { MediaDetailsProps } from '../../interfaces/interfacesMedia';


const MediaDetails = ({ selectedNotice, handleClose }: MediaDetailsProps) => {

    const { collectionData } = useVideoNasa({ selectedNoticeHref: selectedNotice.href });

    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white bg-opacity-75 flex justify-center items-center  overflow-y-auto">
            <div className="max-w-lg bg-white rounded-lg shadow-lg p-8">
                {selectedNotice.data.map((datum, index) => (
                    <div key={index}>

                        <UITitle tag='h2' className='text-2xl font-bold mb-4 text-center' tooltipID='title' title={datum.title} tooltipContent={datum.title} />
                        <UIParagraph tooltipID='description' tooltipContent='Description' className='mb-4 text-justify' content={datum.description} />

                        {collectionData && <UIVideo source={collectionData[0]}/> }

                        <UIParagraph className='font-bold' content='Keywords' tooltipContent='Keywords' tooltipID='key' />
                        <UIParagraph className='text-blue-500' content={datum.keywords.join(', ')} useDangerousHTML={true} />

                    </div>
                ))}
                <UIButton onClick={handleClose} text='Close' className='bg-gray-700 text-white px-4 py-2 rounded-lg mt-3' />
            </div>
        </div>
    );
};

export default MediaDetails;
