import { starfish, lizard, turtle } from "../images";
import Hexa from "./Hexa";
import {useRef} from "react";

function Puzzle() {
    const piecesNumber = 13
    const flexagonsStateRef = useRef(Array(piecesNumber).fill(null))
    const side = 50
    const height = Math.sqrt(3) * side

    const snapNeighbors = (index) => {
        const epsilon = 30
        const selfRef = flexagonsStateRef.current[index]
        let flexagonRotation = selfRef.getFlexagonRotation()
        let flexagonPosition = selfRef.getFlexagonPosition()
        const initialPosition = selfRef.getFlexagonInitialPosition()
        const positionZero = (flexagonRotation%180) ? {x: flexagonPosition.x + height/2, y: flexagonPosition.y + side/2}
            : flexagonPosition;
        console.log("flexagon rotation:", flexagonRotation, "flexagon position:", flexagonPosition, "real position:", positionZero)
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
                console.log("neighbor position:", flexagonPosition, "old position:", positionZero, "new position:", {x:x,y:y}, "delta:",{x:deltaX,y:deltaY} )
                selfRef.setFlexagonPosition(deltaX, deltaY);
                //setPosition(selfRef, x,y)
                return;
            } else if (Math.abs(Math.abs(flexagonPosition.x - positionZero.x) - 2*height) +
                Math.abs(flexagonPosition.y - positionZero.y) < 2*epsilon) {
                let x = (positionZero.x < flexagonPosition.x) ? flexagonPosition.x - 2*height+3 : flexagonPosition.x + 2*height-3;
                let deltaX = x - initialPosition.x
                let y = flexagonPosition.y
                let deltaY = y - initialPosition.y + 0.01
                console.log("neighbor position:", flexagonPosition, "old position:", positionZero, "new position:", {x:x,y:y}, "delta:",{x:deltaX,y:deltaY} )
                selfRef.setFlexagonPosition(deltaX, deltaY);
                //setPosition(selfRef, x,y)
                return;
            }
        }
    }

    const pieces = [];
    for (let i = 0; i < piecesNumber; i++) {
        const setRef = el => flexagonsStateRef.current[i] = el;
        if (i < 2) {
            pieces.push(<Hexa key={i} index={i} state={0} side={side} degrees={(i*60)%360}
                              ref={setRef}
                              images={[turtle.turtle21, starfish.starfish11, lizard.lizard21, turtle.turtle22, starfish.starfish12, lizard.lizard22]}
                              onDragEnd={() => snapNeighbors(i)}/>);
        } else if (i < 4) {
            pieces.push(<Hexa key={i} index={i} state={3} side={side} degrees={(i*60)%360}
                              ref={setRef}
                              images={[lizard.lizard21, turtle.turtle11, starfish.starfish31, lizard.lizard22, turtle.turtle12, starfish.starfish32]}
                              onDragEnd={() => snapNeighbors(i)}/>);
        } else if (i < 6) {
            pieces.push(<Hexa key={i} index={i} state={1} side={side} degrees={(i*60)%360}
                              ref={setRef}
                              images={[starfish.starfish41, turtle.turtle31, lizard.lizard11, starfish.starfish42, turtle.turtle32, lizard.lizard12]}
                              onDragEnd={() => snapNeighbors(i)}/>);
        } else if (i < 8) {
            pieces.push(<Hexa key={i} index={i} state={4} side={side} degrees={(i*60)%360}
                              ref={setRef}
                              images={[turtle.turtle21, lizard.lizard21, starfish.starfish31, turtle.turtle32, lizard.lizard12, starfish.starfish42]}
                              onDragEnd={() => snapNeighbors(i)}/>);
        } else if (i < 10) {
            pieces.push(<Hexa key={i} index={i} state={2} side={side} degrees={(i*60)%360}
                              ref={setRef}
                              images={[lizard.lizard21, starfish.starfish31, turtle.turtle21, lizard.lizard22, starfish.starfish32, turtle.turtle22]}
                              onDragEnd={() => snapNeighbors(i)}/>);
        } else if (i < 12) {
            pieces.push(<Hexa key={i} index={i} state={5} side={side} degrees={(i*60)%360}
                              ref={setRef}
                              images={[starfish.starfish41, lizard.lizard31, turtle.turtle31, starfish.starfish42, lizard.lizard32, turtle.turtle32]}
                              onDragEnd={() => snapNeighbors(i)}/>);
        } else if (i < 13) {
            pieces.push(<Hexa key={i} index={i} state={5} side={side} degrees={(i*60)%360}
                              ref={setRef}
                              images={[starfish.starfish21, turtle.turtle11, lizard.lizard31, starfish.starfish22, turtle.turtle12, lizard.lizard32]}
                              onDragEnd={() => snapNeighbors(i)}/>);
        }
    }

    return <div className="puzzle">{pieces}</div>;
}

export default Puzzle