import React from "react";
import { Image } from 'antd';
import '../../styles/Photo.css';
import me1 from '../../images/me1.png';
import me2 from '../../images/me2.png';
import me3 from '../../images/me3.png';

const Photo = () => {

    return (
        <div className="frame">
            <Image.PreviewGroup 
                preview={{ onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                }}
            >
            <Image className="images" src={me1} />
            <Image className="images" src={me2} />
            <Image className="images" src={me3} />
            </Image.PreviewGroup>

        </div>
    )
}

export default Photo;