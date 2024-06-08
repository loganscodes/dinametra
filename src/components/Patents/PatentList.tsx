import React from "react";
import { Tooltip } from "react-tooltip";
import { PatentData } from "../../interfaces/interfacePatent";
import UIParagraph from "../UI/UIParagraph";
import UITitlePatent from "../UI/UITitlePatent";

interface Props {
    patents: PatentData[]
}

const PatentList = ({ patents }: Props) => {
    return (
        <ul className='grid grid-cols-1 lg:grid-cols-2 gap-5 mx-5'>
            {patents.map(patent => (
                <li role="button" tabIndex={0}  key={patent.id} data-tooltip-id="patent-description" data-tooltip-content='Description Patent NASA' data-tooltip-place="top" className='border-4 border-gray-700 rounded-2xl p-5 bg-white'>
                    
                    <UITitlePatent tooltipID="patent-title" tooltipContent='Title patent' content={patent.title}/>  

                    <UIParagraph tooltipID="date" tooltipContent={new Date(patent.date).toLocaleDateString()} content={new Date(patent.date).toLocaleDateString()} className="font-bold"/>

                    <UIParagraph tooltipID="patent" tooltipContent={patent.patent} content={`Patent: ${patent.patent}`} className="text-2xl font-bold" />

                    <UIParagraph tooltipID="description" tooltipContent="description" content={patent.abstract} className="h-64 py-5 overflow-auto" useDangerousHTML={true} />

                    <img tabIndex={0} data-tooltip-id="patent-img" data-tooltip-content='Image patent' data-tooltip-place="top" src={patent.contact} alt="" loading="lazy" />
                    <Tooltip id="patent-img" />

                    
                </li>
            ))}
        </ul>
    )
}

export default React.memo(PatentList);