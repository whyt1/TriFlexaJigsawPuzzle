import React, {useRef} from "react";
import {motion} from "framer-motion";

/* basic triangle component that represents a single leaf in a flexagon */
/* each triangle has a direction, pointing west, south, se or ne. size, in the form of side and height. And a picture */
function Triangle(props) {

    const side = props.side;
    const height = side * (Math.sqrt(3));
    const myRef = useRef()
    const points = `${0}, ${0} ${0}, ${2 * side} ${height}, ${side}`

    return(
        <motion.div className={"Triangle"}
                    style={props.style}
                    onTapStart={props.onTapStart}
                    ref={myRef}
                    animate={ props.flexed ? {rotateY: 360} : {rotateY: 0} }
                    transition={{ duration: 0.5 }}
        >
            <svg width={height} height={side*2}>
                <defs>
                    <pattern
                        id={"image-" + props.image}
                        viewBox={`0 0 ${height} ${side*2}`}
                        x="0"
                        y="0"
                        width={height}
                        height={side*2}
                        patternUnits="userSpaceOnUse"
                    >
                        <image xlinkHref={props.image} x="0" y="0" width={height} height={side*2} preserveAspectRatio="none"/>
                        {/*"url(#image-" +  props.image + ")"*/}
                    </pattern>
                </defs>
                <polygon points={points} fill={"url(#image-" +  props.image + ")"}/>
            </svg>
        </motion.div>
    );
}

export default Triangle