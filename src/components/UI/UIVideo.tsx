import { UIVideoProps } from "../../interfaces/interfacesUI"



const UIVideo = ({ source }: UIVideoProps) => {
    return (
        <video aria-label={source} controls autoPlay>
            <source src={source} type="video/mp4" />
        </video>
    )
}

export default UIVideo