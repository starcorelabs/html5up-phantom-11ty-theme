# HTML5-Up Phantom template to an 11ty theme

I'm converting the free template https://html5up.net/phantom to work as an https://www.11ty.dev theme. 

Eleventy is a simple static site generator that uses JavaScript to render markdown files as a static HTML website. It's great for small websites and blogs.

### Goal
My goal is to use this template for my Graphic Design Studio website and blog.

### Version 1.2
I removed the built-in grid system and replaced it with http://flexboxgrid.com. I had alter the flexboxgrid base a bit to get it working how I want. Using the flexboxgrid I was able to fix the about page. Now it renders correctly across device sizes. 

Note: This grid has media queries that are based on min-width. I prefer media queries with both min-width and max-width for more precise control. However, this works for now.

### Version 1.0
This is version 1.0 and is still being worked on. The about page is not functioning correctly. I'm having trouble getting the grid system to create two content colums one col-7 and the other col-5. But, I want them both col-12 on mobile, with the images stacking under the text.

I've experimented by replacing the grid system with flexbox, but it breaks the layout in other ways. 

### Setup
If you want to download and use this template for your own 11ty static site please follow the steps below.

1. Install the latest LTS Node.JS and NPM using NVM https://github.com/nvm-sh/nvm
2. Install Git locally https://github.com/git-guides/install-git
3. Clone this repo
4. Open a terminal and run "npm install" this will setup your node modules.
5. Run the local server with "npm start". This will launch the website in a live server so you can see your changes as you make them.
6. Load the project folder in your favorite text editor. I use https://vscodium.com

Now you can use or edit the theme as you like.

If you have questions about 11ty check out the docs here: https://www.11ty.dev/docs/
