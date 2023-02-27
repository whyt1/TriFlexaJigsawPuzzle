import {useEffect, useRef, useState} from "react";
import { lizard, turtle, demon } from "../images";
import { getRandomInt, Hexa } from "../components";


function Puzzle() {
    const screenSize = { width: window.innerWidth, height: window.innerHeight }
    const piecesNumber = 13
    const flexagonsStateRef = useRef(Array(piecesNumber).fill(null))
    const side = 50
    const height = Math.sqrt(3) * side

    let [isShuffled, setShuffled] = useState(false)
    let [startingState, setStartingState]  = useState(0)
    useEffect(() => {
        setTimeout(() => {setStartingState(1)}, 1000)
        setTimeout(() => {setStartingState(2)}, 2000)
        setTimeout(() => {setShuffled(true)}, 3000)
    }, [])

    // function checkCompleted() {
    //     const epsilon = 15;
    //     let totalNeighbours = 0
    //     let neighboursCount = 0
    //     for (let i = 0; i < piecesNumber; i+=3) {
    //         const selfRef = flexagonsStateRef.current[i]
    //         const selfState = selfRef.getFlexagonState()
    //         if (selfState > 2) {
    //             console.log("found a shuffled flexagon => not solved")
    //             return;
    //         }
    //
    //         let selfPosition = selfRef.getFlexagonPosition()
    //         const selfRotation = selfRef.getFlexagonRotation()
    //         if (selfRotation % 180) {
    //             selfPosition = {x: selfPosition.x + height / 2, y: selfPosition.y + side / 2};
    //         }
    //
    //         for (let j = 0; j < piecesNumber; i++) {
    //             if (i === j) {
    //                 continue
    //             }
    //             totalNeighbours++
    //
    //             const neighborRef = flexagonsStateRef.current[j]
    //             const neighborState = selfRef.getFlexagonState()
    //             if (selfState !== neighborState) {
    //                 console.log(`#${i}, #${j} have different images => not solved`)
    //                 return;
    //             }
    //
    //             const neighborRotation = neighborRef.getFlexagonRotation()
    //             let neighborPosition = neighborRef.getFlexagonPosition()
    //             if (neighborRotation % 180) {
    //                 neighborPosition = {x: neighborPosition.x + height / 2, y: neighborPosition.y + side / 2};
    //             }
    //             if (neighborRotation%120 !== selfRotation%120){
    //                 console.log(`#${i}, #${j} have different rotation => not solved`)
    //                 return;
    //             }
    //
    //             let direction = (selfRotation%120) ? ((neighborPosition.x - selfPosition.x) / Math.abs(neighborPosition.x - selfPosition.x)) :
    //                 ((selfPosition.x - neighborPosition.x) / Math.abs(neighborPosition.x - selfPosition.x))
    //
    //             if (Math.abs(Math.abs(neighborPosition.x - selfPosition.x) - height) +
    //                 Math.abs(Math.abs(neighborPosition.y - selfPosition.y) - 3 * side) < 2 * epsilon) {
    //                 // found neighbour top or bottom
    //                 if (j % 3 === 1 && direction === -1) {
    //                     neighboursCount++
    //                 }
    //                 if (j%3 === 2 && direction === 1) {
    //                     neighboursCount++
    //                 }
    //
    //             } else if (Math.abs(Math.abs(neighborPosition.x - selfPosition.x) - 2 * height) +
    //                 Math.abs(neighborPosition.y - selfPosition.y) < 2 * epsilon) {
    //                 // found neighbour sides
    //                 if (j % 3 === 1 && direction === 1) {
    //                     neighboursCount++
    //                 }
    //                 if (j%3 === 2 && direction === -1) {
    //                     neighboursCount++
    //                 }
    //             }
    //         }
    //     }
    //     console.log(`${neighboursCount} / ${totalNeighbours}`)
    //     if (neighboursCount === totalNeighbours) {
    //         console.log("Solved")
    //     }
    // }

    const snapNeighbors = (index) => {
        const epsilon = 30
        const selfRef = flexagonsStateRef.current[index]
        let flexagonRotation = selfRef.getFlexagonRotation()
        let flexagonPosition = selfRef.getFlexagonPosition()
        const initialPosition = selfRef.getFlexagonInitialPosition()
        const positionZero = (flexagonRotation%180) ? {x: flexagonPosition.x + height/2, y: flexagonPosition.y + side/2}
            : flexagonPosition;
        // console.log("flexagon rotation:", flexagonRotation, "flexagon position:", flexagonPosition, "real position:", positionZero)
        for (let i = 0; i < piecesNumber; i++) {
            if (i === index) {
                continue
            }
            const neighborRef = flexagonsStateRef.current[i]
            flexagonRotation = neighborRef.getFlexagonRotation()
            flexagonPosition = neighborRef.getFlexagonPosition()
            if (flexagonRotation%180) {
                flexagonPosition = {x: flexagonPosition.x + height/2, y: flexagonPosition.y + side/2};
            }
            if (Math.abs(Math.abs(flexagonPosition.x - positionZero.x) - height) +
                Math.abs(Math.abs(flexagonPosition.y - positionZero.y) - 3*side) < 2*epsilon) {
                let x = (positionZero.x < flexagonPosition.x) ? (flexagonPosition.x - height+3) : (flexagonPosition.x + height-3);
                let deltaX = x - initialPosition.x
                let y = (positionZero.y < flexagonPosition.y) ? (flexagonPosition.y - 3*side+1) : (flexagonPosition.y + 3*side-1);
                let deltaY = y - initialPosition.y
                // console.log("neighbor position:", flexagonPosition, "old position:", positionZero, "new position:", {x:x,y:y}, "delta:",{x:deltaX,y:deltaY} )
                selfRef.setFlexagonPosition(deltaX, deltaY);
                //setPosition(selfRef, x,y)
                //checkCompleted()
                return;
            } else if (Math.abs(Math.abs(flexagonPosition.x - positionZero.x) - 2*height) +
                Math.abs(flexagonPosition.y - positionZero.y) < 2*epsilon) {
                let x = (positionZero.x < flexagonPosition.x) ? flexagonPosition.x - 2*height+3 : flexagonPosition.x + 2*height-3;
                let deltaX = x - initialPosition.x
                let y = flexagonPosition.y
                let deltaY = y - initialPosition.y + 0.01
                // console.log("neighbor position:", flexagonPosition, "old position:", positionZero, "new position:", {x:x,y:y}, "delta:",{x:deltaX,y:deltaY} )
                selfRef.setFlexagonPosition(deltaX, deltaY);
                //setPosition(selfRef, x,y)
                //checkCompleted()
                return;
            }
            //checkCompleted()
        }
    }

    const w = screenSize.width/2
    const h = screenSize.height/2
    const positions = [
        { x: w-4*height+1, y: h-5*side+1 },
        { x: w-2*height+1, y: h-5*side+1 },
        { x: w-1, y: h-5*side+1 },
        { x: w+2*height-1, y: h-5*side+1 },
        { x: w-5*height+1, y: h-2*side },
        { x: w-3*height+1, y: h-2*side },
        { x: w-height, y: h-2*side },
        { x: w+height-1, y: h-2*side },
        { x: w+3*height-1, y: h-2*side },
        { x: w-4*height+1, y: h+side-1 },
        { x: w-2*height+1, y: h+side-1 },
        { x: w-1, y: h+side-1 },
        { x: w+2*height-1, y: h+side-1 },
    ]
    const pieces = [];
    for (let i = 0; i < piecesNumber; i++) {
        const setRef = el => flexagonsStateRef.current[i] = el;
        const randomValues = {
            state: getRandomInt(6),
            degrees: getRandomInt(6) * 60,
            x: getRandomInt(2 * (w - height)),
            y: getRandomInt(2 * (h - 2 * side))
        }
        if (i % 3 === 0) { //0, 3, 4, 9, 12...
            pieces.push(<Hexa key={i} index={i} side={side} ref={setRef}
                              images={[turtle.turtle11, demon.demon11, lizard.lizard11, turtle.turtle12, demon.demon12, lizard.lizard12]}
                              onDragEnd={() => snapNeighbors(i)}
                              //checkCompleted={() => checkCompleted()}
                              x={isShuffled ? randomValues.x : positions[i].x}
                              y={isShuffled ? randomValues.y : positions[i].y}
                              state={isShuffled ? randomValues.state : startingState}
                              degrees={isShuffled ? randomValues.degrees : startingState > 1 ? 60 : 0}/>);
        } else if (i % 3 === 1) {//1, 4, 7, 10...
            pieces.push(<Hexa key={i} index={i} side={side} ref={setRef}
                              images={[turtle.turtle21, demon.demon21, lizard.lizard21, turtle.turtle22, demon.demon22, lizard.lizard22]}
                              onDragEnd={() => snapNeighbors(i)}
                              //checkCompleted={() => checkCompleted()}
                              x={isShuffled ? randomValues.x : positions[i].x}
                              y={isShuffled ? randomValues.y : positions[i].y}
                              state={isShuffled ? randomValues.state : startingState}
                              degrees={isShuffled ? randomValues.degrees : startingState > 1 ? 60 : 0}/>);
        } else if (i % 3 === 2) {//2, 5, 8, 11...
            pieces.push(<Hexa key={i} index={i} side={side} ref={setRef}
                              images={[turtle.turtle31, demon.demon31, lizard.lizard31, turtle.turtle32, demon.demon32, lizard.lizard32]}
                              onDragEnd={() => snapNeighbors(i)}
                              //checkCompleted={() => checkCompleted()}
                              x={isShuffled ? randomValues.x : positions[i].x}
                              y={isShuffled ? randomValues.y : positions[i].y}
                              state={isShuffled ? randomValues.state : startingState}
                              degrees={isShuffled ? randomValues.degrees : startingState > 1 ? 60 : 0}/>);
        }
    }

    return (
        <div className="puzzle">
            {pieces}
        </div>
    )
}

export default Puzzle