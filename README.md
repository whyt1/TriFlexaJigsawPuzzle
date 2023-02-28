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


# Future ideas:

There are several areas where the project can be continued and improved. One limitation of the current game is that it only works with a mouse, so adding support for keyboard and touch screen controls would make it more accessible to a wider range of devices. Another issue is that the size of the pieces is fixed and doesn't scale with the screen, causing problems with positioning on smaller screens. To fix this, the size and position of the pieces should be relative to the screen size.

The puzzle currently consists of trihexaflexagon pieces only, but it could be expanded to include different shapes of flexagons for more diverse tiling patterns. This would allow for the use of drawings that don't have the necessary symmetry for tiling with hexagons. Furthermore, the complexity of the pieces could be increased with more types of "plexes" containing more wigs, leading to puzzles with more than three different images.

Manually cutting the pictures to fit the puzzle pieces is time-consuming and limits the accuracy of the fit. A possible solution is to write code that cuts and fits the drawings to the puzzle pieces automatically, which would allow for more precise cuts and would enable users to upload their own photos. Additionally, an option for users to play with a single Flexagon with guidance could be added to familiarize them with the controls before attempting a full puzzle.

To improve the user experience, a user interface could be added with a background, header, footer, and description page. The menu would allow users to switch between different pages, including an explanation page, a tutorial on a single Flexagon, and the puzzle itself. It could also allow users to customize the puzzle parameters, such as the size and number of pieces, and to shuffle the pieces. Finally, adding sound effects for each operation that can be performed on the Flexagons, as well as a melody and a sound when two pieces stick together, would enhance the experience. An animation in which more pieces are added until the entire screen is covered with a drawing when the puzzle is finished would add a satisfying conclusion to the game.

Expand the options for puzzle pictures by adding fractals in addition to the eshcer tesselations.
