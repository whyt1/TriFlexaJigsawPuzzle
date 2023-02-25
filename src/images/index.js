import starfish1_E from './starfish/starfish1_E.png'
import starfish1_NE from './starfish/starfish1_NE.png'
import starfish1_SE from './starfish/starfish1_SE.png'
import starfish1_W from './starfish/starfish1_W.png'
import starfish1_SW from './starfish/starfish1_SW.png'
import starfish1_NW from './starfish/starfish1_NW.png'
import starfish2_E from './starfish/starfish2_E.png'
import starfish2_NE from './starfish/starfish2_NE.png'
import starfish2_SE from './starfish/starfish2_SE.png'
import starfish2_W from './starfish/starfish2_W.png'
import starfish2_SW from './starfish/starfish2_SW.png'
import starfish2_NW from './starfish/starfish2_NW.png'
import starfish3_E from './starfish/starfish3_E.png'
import starfish3_NE from './starfish/starfish3_NE.png'
import starfish3_SE from './starfish/starfish3_SE.png'
import starfish3_W from './starfish/starfish3_W.png'
import starfish3_SW from './starfish/starfish3_SW.png'
import starfish3_NW from './starfish/starfish3_NW.png'
import starfish4_E from './starfish/starfish4_E.png'
import starfish4_NE from './starfish/starfish4_NE.png'
import starfish4_SE from './starfish/starfish4_SE.png'
import starfish4_W from './starfish/starfish4_W.png'
import starfish4_SW from './starfish/starfish4_SW.png'
import starfish4_NW from './starfish/starfish4_NW.png'

import lizard1_E from './lizard/lizard1_E.png'
import lizard1_NE from './lizard/lizard1_NE.png'
import lizard1_SE from './lizard/lizard1_SE.png'
import lizard1_W from './lizard/lizard1_W.png'
import lizard1_SW from './lizard/lizard1_SW.png'
import lizard1_NW from './lizard/lizard1_NW.png'
import lizard2_E from './lizard/lizard2_E.png'
import lizard2_NE from './lizard/lizard2_NE.png'
import lizard2_SE from './lizard/lizard2_SE.png'
import lizard2_W from './lizard/lizard2_W.png'
import lizard2_SW from './lizard/lizard2_SW.png'
import lizard2_NW from './lizard/lizard2_NW.png'
import lizard3_E from './lizard/lizard3_E.png'
import lizard3_NE from './lizard/lizard3_NE.png'
import lizard3_SE from './lizard/lizard3_SE.png'
import lizard3_W from './lizard/lizard3_W.png'
import lizard3_SW from './lizard/lizard3_SW.png'
import lizard3_NW from './lizard/lizard3_NW.png'

import turtle1_E from './turtle/turtle1_E.png'
import turtle1_NE from './turtle/turtle1_NE.png'
import turtle1_SE from './turtle/turtle1_SE.png'
import turtle1_W from './turtle/turtle1_W.png'
import turtle1_SW from './turtle/turtle1_SW.png'
import turtle1_NW from './turtle/turtle1_NW.png'
import turtle2_E from './turtle/turtle2_E.png'
import turtle2_NE from './turtle/turtle2_NE.png'
import turtle2_SE from './turtle/turtle2_SE.png'
import turtle2_W from './turtle/turtle2_W.png'
import turtle2_SW from './turtle/turtle2_SW.png'
import turtle2_NW from './turtle/turtle2_NW.png'
import turtle3_E from './turtle/turtle3_E.png'
import turtle3_NE from './turtle/turtle3_NE.png'
import turtle3_SE from './turtle/turtle3_SE.png'
import turtle3_W from './turtle/turtle3_W.png'
import turtle3_SW from './turtle/turtle3_SW.png'
import turtle3_NW from './turtle/turtle3_NW.png'

const turtle = {
    turtle11: [turtle1_SE, turtle1_SW, turtle1_E, turtle1_W, turtle1_NE, turtle1_NW],
    turtle12: [turtle1_NE, turtle1_NW, turtle1_SW, turtle1_SE, turtle1_W, turtle1_E],
    turtle21: [turtle2_SE, turtle2_SW, turtle2_E, turtle2_W, turtle2_NE, turtle2_NW],
    turtle22: [turtle2_NE, turtle2_NW, turtle2_SW, turtle2_SE, turtle2_W, turtle2_E],
    turtle31: [turtle3_SE, turtle3_SW, turtle3_E, turtle3_W, turtle3_NE, turtle3_NW],
    turtle32: [turtle3_NE, turtle3_NW, turtle3_SW, turtle3_SE, turtle3_W, turtle3_E],
}

const lizard = {
    lizard11: [lizard1_SE, lizard1_SW, lizard1_E, lizard1_W, lizard1_NE, lizard1_NW],
    lizard12: [lizard1_NE, lizard1_NW, lizard1_SW, lizard1_SE, lizard1_W, lizard1_E],
    lizard21: [lizard2_SE, lizard2_SW, lizard2_E, lizard2_W, lizard2_NE, lizard2_NW],
    lizard22: [lizard2_NE, lizard2_NW, lizard2_SW, lizard2_SE, lizard2_W, lizard2_E],
    lizard31: [lizard3_SE, lizard3_SW, lizard3_E, lizard3_W, lizard3_NE, lizard3_NW],
    lizard32: [lizard3_NE, lizard3_NW, lizard3_SW, lizard3_SE, lizard3_W, lizard3_E],
}

const starfish = {
    starfish11: [starfish1_SE, starfish1_SW, starfish1_E, starfish1_W, starfish1_NE, starfish1_NW],
    starfish12: [starfish1_NE, starfish1_NW, starfish1_SW, starfish1_SE, starfish1_W, starfish1_E],
    starfish21: [starfish2_SE, starfish2_SW, starfish2_E, starfish2_W, starfish2_NE, starfish2_NW],
    starfish22: [starfish2_NE, starfish2_NW, starfish2_SW, starfish2_SE, starfish2_W, starfish2_E],
    starfish31: [starfish3_SE, starfish3_SW, starfish3_E, starfish3_W, starfish3_NE, starfish3_NW],
    starfish32: [starfish3_NE, starfish3_NW, starfish3_SW, starfish3_SE, starfish3_W, starfish3_E],
    starfish41: [starfish4_SE, starfish4_SW, starfish4_E, starfish4_W, starfish4_NE, starfish4_NW],
    starfish42: [starfish4_NE, starfish4_NW, starfish4_SW, starfish4_SE, starfish4_W, starfish4_E]
}

export { starfish, lizard, turtle }