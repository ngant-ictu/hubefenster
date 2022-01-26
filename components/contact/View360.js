import styled from "styled-components";
import { Pannellum, PannellumVideo } from "@georgedrpg/pannellum-react-next";
import "@georgedrpg/pannellum-react-next/es/css/video-js.css";
import "@georgedrpg/pannellum-react-next/es/css/pannellum.css";
import "@georgedrpg/pannellum-react-next/es/css/style-textInfo.css";
import panoramaImg from '../../public/assets/img/360/panorama-3.jpg'

const View360 = ({imageView}) => {
    console.log(imageView);
    return(
        <Pannellum
        height="887px"
        image={imageView? imageView.image : panoramaImg.src}
        pitch={1}
        yaw={90}
        hfov={400}
        autoLoad
        author=""
        title=""
        orientationOnByDefault={false}
        draggable
        keyboardZoom
        mouseZoom={false}
        preview=""      
        previewAuthor=""
        previewTitle=""
        showControls
        showFullscreenCtrl
        showZoomCtrl
        onLoad={()=>{console.log("panorama loaded");}}
        onScenechange={(id)=>{console.log("Scene has change on " + id);}}
        onScenechangefadedone={()=>{console.log("panorama loaded");}}
        onError={(err)=>{console.log("Error" , err);}}
        onErrorcleared={()=>{console.log("Error Cleared");}}
        onMousedown={(evt)=>{console.log("Mouse Down" , evt);}}
        onMouseup={(evt)=>{console.log("Mouse Up", evt);}}
        onTouchstart={(evt)=>{console.log("Touch Start", evt);}}
        onTouchend={(evt)=>{console.log("Touch End", evt);}}
        hotspotDebug={false}
    >

    </Pannellum>
    ) 
}

export default View360;

const View360Img = styled.div `
    height: 887px;
`