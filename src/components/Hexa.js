import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import {motion, useCycle, useDragControls} from "framer-motion";
import {Triangle, clickedMiddle, clickedVertices, whichVertices} from "../components";

const Hexa = forwardRef((props, _ref) => {
    // properties
    let [state, setState] = useState(props.state)
    let [isFlipped, setIsFlipped] = useState(false)
    let [isFlexed, setIsFlexed] = useState(false)
    let [initialDegrees, setInitalDegrees] = useState(props.degrees)
    let [initialX, setInitialX] = useState(null);
    let [initialY, setInitialY] = useState(null);
    let [x, setX] = useState(props.x - initialX)
    let [y, setY] = useState(props.y - initialY)

    const images = props.images
    const myRef = useRef();
    const side = props.side;
    const height = side * (Math.sqrt(3))
    const controls = useDragControls();
    const gestures = {
        doubleTapIndex: 0,
        doubleTapTimer: setTimeout(null, null),
        longPress: false,
        longPressTimer: setTimeout(null, null),
        startLocation: {x: 0, y: 0},
        lastVertex: null
    }

    useEffect(() => {
        const { left, top } = myRef.current.getBoundingClientRect();
        setInitialX(left);
        setInitialY(top);
    }, []);

    useEffect(() => {
        setX(props.x - initialX);
        setY(props.y - initialY);
        setInitalDegrees(props.degrees);
        if (props.state%2) { setIsFlipped(prevIsFlipped => !prevIsFlipped) }
        if (!(props.state%2)) { setIsFlexed(prevIsFlexed => !prevIsFlexed) }
        setState(props.state);
    }, [initialX, initialY, props.degrees, props.state, props.x, props.y]);

    function flex() {
        if (!(state % 2)) {
            setIsFlexed(prevIsFlexed => !prevIsFlexed)
            rotate()
            setState((state) => (state + 2)%6)
        } else {
            setIsFlexed(prevIsFlexed => !prevIsFlexed)
            rotate()
            setState((state) => (state + 4)%6)
        }
    }

    function flip() {
        if (!(state % 2)) {
            setIsFlipped(!isFlipped)
            setInitalDegrees(initialDegrees+60)
            setState((state) => state + 1)
        } else {
            setIsFlipped(!isFlipped)
            setInitalDegrees(initialDegrees-60)
            setState((state) => state - 1)
        }
    }

    const [degrees, rotate] = useCycle(0, 60, 120, 180, 240, 300)

    // handling clicks, split to 3; tap, long press, double tap
    function onTapStart(event, info) {
        const position = myRef.current.getBoundingClientRect();
        const relativeX = info.point.x - position.x - window.scrollX;
        const relativeY = info.point.y - position.y - window.scrollY;
        gestures.startLocation = { x: relativeX, y: relativeY }
        // console.log("absolute click position: (", info.point.x, info.point.y, ")")
        //console.log("relative click position: (", relativeX, relativeY, ")")
        //console.log(isInsideHexa(relativeX, relativeY) ? "inside" : "outside")

        // click the middle
        if (clickedMiddle(relativeX, relativeY,initialDegrees+degrees, height, side)) {
            // drag
            controls.start(event)

            // double tap => flip
            if (gestures.doubleTapIndex === 1) {
                clearTimeout(gestures.doubleTapTimer)
                console.log("double tap middle => flip")
                flip()
                return;
            }
        }

        // click the vertices
        if (clickedVertices(relativeX,relativeY, initialDegrees+degrees, height, side)) {
            // double tap => flex
            if (gestures.doubleTapIndex === 1) {
                clearTimeout(gestures.doubleTapTimer)
                console.log("double tap vertices => flex")
                flex()
                return;
            }
        }
        gestures.doubleTapIndex += 1
        gestures.doubleTapTimer = setTimeout(() => {
            gestures.doubleTapIndex = 0
            gestures.doubleTapTimer = null}, 250)
    }

    function onPan(event, info) {
        const position = myRef.current.getBoundingClientRect();
        let x = info.point.x - position.x - window.scrollX;
        let y = info.point.y - position.y - window.scrollY;
        let currentVertex = whichVertices(x, y, initialDegrees+degrees, height, side)
        const vertex = whichVertices(gestures.startLocation.x, gestures.startLocation.y, initialDegrees+degrees, height, side)

        if (gestures.lastVertex === null) {
            gestures.lastVertex = (vertex !== undefined) ? vertex : (currentVertex !== undefined) ? currentVertex : null;
        }

        if (gestures.lastVertex !== currentVertex && currentVertex !== undefined && gestures.lastVertex !== null) {
            let i = (currentVertex-gestures.lastVertex >= 0) ? (degrees/60)+(currentVertex-gestures.lastVertex) : (degrees/60)+(currentVertex-gestures.lastVertex+6)
            console.log(gestures.lastVertex, "=>", currentVertex)
            console.log("current degrees:", (degrees),"degrees to add:", (i-(degrees/60))*60, "resulting state:", i)
            rotate(i%6)
            gestures.lastVertex = currentVertex
        }
    }
    function onPanEnd() {
        gestures.lastVertex = null;
    }

    function onTap(event, info) {
        const position = myRef.current.getBoundingClientRect();
        const relativeX = info.point.x - position.x - window.scrollX;
        const relativeY = info.point.y - position.y - window.scrollY;

        const delta = Math.sqrt((relativeX - gestures.startLocation.x)**2 + (relativeY - gestures.startLocation.y)**2)
        if (delta > 25) {
            return
        }

        // click the vertices
        if (clickedVertices(relativeX,relativeY, initialDegrees+degrees, height, side)) {
            // single click => rotate
            if (gestures.doubleTapIndex === 0) {
                console.log("single click vertices => rotate")
                rotate()
            }
        }
    }


    useImperativeHandle(_ref, () => ({
        getFlexagonState: () => {
            return state;
        },
        getFlexagonPosition: () => {
            const position = myRef.current.getBoundingClientRect();
            return {x: position.x, y: position.y};
        },
        getFlexagonInitialPosition: () => {
            return {x: initialX, y: initialY};
        },
        getFlexagonRotation: () => {
            return initialDegrees+degrees;
        },
        setFlexagonPosition: (deltaX, deltaY) => {
            setX(deltaX);
            setY(deltaY);
        }
    }))

    // initializing the triangles
    const triangles = []
    const trianglesStyles = state < 3 ? [
        { gridRow: 1, gridColumn: 1, position: "absolute", left: 20, top: 11.7, rotate: 60 },
        { gridRow: 1, gridColumn: 2, position: "absolute", left: -24, top: 10, rotate: 120 },
        { gridRow: 2, gridColumn: 1, position: "absolute", left: 0, top: 0, rotate: 0 },
        { gridRow: 2, gridColumn: 2, position: "absolute", left: -2, top: -4, rotate: 180 },
        { gridRow: 3, gridColumn: 1, position: "absolute", left: 22, top: -13, rotate: 300 },
        { gridRow: 3, gridColumn: 2, position: "absolute", left: -21, top: -16, rotate: 240 },
    ] : [
        { gridRow: 1, gridColumn: 1, position: "absolute", left: 24, top: -9, rotate: 300 },
        { gridRow: 1, gridColumn: 2, position: "absolute", left: -19, top: -12, rotate: 240 },
        { gridRow: 2, gridColumn: 1, position: "absolute", left: -23, top: 13.5, rotate: 120 },
        { gridRow: 2, gridColumn: 2, position: "absolute", left: 20, top: 15, rotate: 60 },
        { gridRow: 3, gridColumn: 1, position: "absolute", left: 0, top: 0, rotate: 180 },
        { gridRow: 3, gridColumn: 2, position: "absolute", left: 0, top: 3, rotate: 0 },
    ];
    for (let i = 0; i < 6; i++) {
        triangles.push(
            <Triangle key={`${props.index}${i}`}
                      style={trianglesStyles[i]}
                      flexed={isFlexed}
                      image={images[state][i]}
                      onTapStart={(event, info) => onTapStart(event, info)}
                      side={side}
            />);
    }
    const variants = {
        default: { x, y, rotate: initialDegrees+degrees, zIndex: 0 },
        flipped: { x, y, rotateY: 180, rotate: initialDegrees+degrees, zIndex: 0 },
        dragged: { scale: 1.1, zIndex: 100 }
    }
    return (
        <motion.div
            ref={myRef}
            drag={true}
            dragControls={controls}
            dragListener={false}
            dragMomentum={false}
            whileDrag={"dragged"}
            onDragEnd={props.onDragEnd}
            whileTap={ {scale: 0.95} }
            animate={ isFlipped ? "flipped" : "default" }
            variants={variants}
            transition={{ duration: .35 }}
            onPan={onPan}
            onPanEnd={onPanEnd}
            onTap={onTap}
            // onTapCancel={onTapCancel}
            className={"hexa"}
            width={height*2}
            height={side*4}
        >
            <div className={"hexa-body"}>
                {triangles}
            </div>
        </motion.div>
    )
});

export default Hexa