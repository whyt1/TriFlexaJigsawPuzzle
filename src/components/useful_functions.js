function area(x1, y1, x2, y2, x3, y3)
{
    return Math.abs((x1*(y2-y3) + x2*(y3-y1)+ x3*(y1-y2))/2.0);
}

/* A function to check whether point P(x, y) lies inside the triangle formed
by A(x1, y1), B(x2, y2) and C(x3, y3) */
function isInside(x1, y1, x2, y2, x3, y3, x, y)
{

    /* Calculate area of triangle ABC */
    let A = area (x1, y1, x2, y2, x3, y3);

    /* Calculate area of triangle PBC */
    let A1 = area (x, y, x2, y2, x3, y3);

    /* Calculate area of triangle PAC */
    let A2 = area (x1, y1, x, y, x3, y3);

    /* Calculate area of triangle PAB */
    let A3 = area (x1, y1, x2, y2, x, y);

    /* Check if sum of A1, A2 and A3 is same as A */
    return (Math.abs(A - (A1 + A2 + A3)) < 0.1);
}

// checking if the click landed inside the hexa
function isInsideHexa(x, y, degrees, height, side) {
    if (degrees%180 === 60) {
        return !(
            isInside(0, 2 * side, (1 / 2) * height, (3 / 2) * side, (1 / 2) * height, (7 / 2) * side, x, y)
            || isInside((6 / 4) * height, (1 / 2) * side, 2 * height, 0, (5 / 2) * height, (3 / 2) * side, x, y)
            || isInside((5 / 2) * height, (3 / 2) * side, 3 * height, 3 * side, (5 / 2) * height, (7 / 2) * side, x, y)
            || isInside((1 / 2) * height, (7 / 2) * side, 1*height, 5 * side, (6 / 4) * height, (9 / 2) * side, x, y)
        )
    } else if (degrees%180 === 120) {
        return !(
            isInside(0, 3 * side, (1 / 2) * height, (3 / 2) * side, (1 / 2) * height, (7 / 2) * side, x, y)
            || isInside((6 / 4) * height, (1 / 2) * side, 1*height, 0, (5 / 2) * height, (3 / 2) * side, x, y)
            || isInside((5 / 2) * height, (3 / 2) * side, 3 * height, 2 * side, (5 / 2) * height, (7 / 2) * side, x, y)
            || isInside((1 / 2) * height, (7 / 2) * side, 2*height, 5 * side, (6 / 4) * height, (9 / 2) * side, x, y)
        )
    } else {
        return !(
            isInside(0, 0, 1 * height, 0, 0, 1 * side, x, y)
            || isInside(1 * height, 0, 2 * height, 0, 2 * height, 1 * side, x, y)
            || isInside(2 * height, 3 * side, 2 * height, 4 * side, 1 * height, 4 * side, x, y)
            || isInside(0, 3 * side, 0, 4 * side, 1 * height, 4 * side, x, y)
        )
    }
}

export default isInsideHexa