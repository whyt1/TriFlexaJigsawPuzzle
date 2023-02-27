# Summary:

I created a jigsaw puzzle in React, where each piece of the puzzle is a trihexaflexagon. 
A flexagon is a two-dimensional geometric figure that can be folded into a three-dimensional structure with multiple faces. 
The trihexaflexagon is a hexagonal flexagon made up of six triangles that can be folded in different ways to reveal different patterns and colors on its faces.

To create the puzzle pieces, I used Escher tessellations, which are repeating patterns of interlocking shapes. 
I cropped and fitted the tessellations to the hexagonal shape of the trihexaflexagons using image editing tools. 

By combining the concepts of flexagons, tessellations, and jigsaw puzzles, I created a unique puzzle experience that allows users to explore the different patterns and shapes of the trihexaflexagons.
My puzzle is unique in that it combines the properties of three different puzzles into one, providing a challenging and engaging experience for users.

To enable users to interact with the puzzle, I used Framer Motion library to handle click events and drag gestures. 
Each hexagonal piece is a React function component with its own unique key, enabling it to maintain its own dragging state and behavior.

Overall, this project allowed me to gain experience in using React and Framer Motion to build interactive user interfaces, as well as exploring the unique properties of flexagons and Escher tessellations. 


## Game rules:

The game is a jigsaw puzzle with a twist. 
The objective is to move the puzzle pieces to fit together and complete the pictures. 
However, there are multiple pictures to complete, thanks to the special properties of trihexaflexagons. 
Each puzzle piece can hold three pictures, which will be revealed as you solve the puzzle.

At the start of the game, you will get to see the completed puzzles one after the other before the pieces scatter and randomize. 
To solve the puzzle, you will need to move the pieces around by clicking on the middle of the piece and dragging it to the desired location.

In addition, you can flip the pieces by double-clicking on the middle, 
flex the pieces to cycle through the different faces by double-clicking the vertices, 
and rotate the pieces by dragging the vertices. 

These different actions will allow you to manipulate the puzzle pieces in different ways, enabling you to fit them together and complete the pictures.

### link: https://flexagon-jigsaw-puzzle.netlify.app/
