# Work-Day-Scheduler

## Description
This project allowed me to challenge myself with jQuery API, for loops, and local storage. Since there was starter codes, I went through the HTML and CSS files to see what I had to work with, wrote down all the requirements needed, and started brainstorming on the codes format.

The CSS file listed out all the classnames needed in the HTML time block, so I started with that. Then, I tackled the easiest part of my javascript file, which was displaying the date using moment.js. The hard parts were working on the timeblock color function, storing the data to local storage and having the texts kept when refreshed.

Working on the timeblock section helped me understand jQuery and the different methods to get what was needed from the DOM. Local storage, however, was where things got tricky. I was actually able to save the first timeblock to my local storage but that was it. Spending hours on my code, I saw how the values were not being looped through for local storage and there wasn't any keys for each values. It took so long that when I finally got my codes down, my functions still weren't running even if the console.log showed me everything was pretty much in order. I thought my values still weren't being looped through until I went to office hours and the issues was with my saved button. The code I chose only selected one button to save and not all of them. Once this issue was fixed through jQUery event delegation, my codes were working perfectly.

Even though, I wanted to cry a couple of times throughout this project, I was able to learn so much by playing around with my codes. This challenege helped me grasp the concept of `$(this)`, dom traversal through jQuery, and actually using `console.log()` to help debug. This made me realize I needed to use `console.log()` more from now on el oh el.

## Usage
The planner displays the current day and time blocks from 9am - 5pm. For each time block depending on the current time would display different colors. If the current time already past, the color would be gray, if the time is current, the block is red, and if time is in the future, the color would be green. 

The user can then add their tasks into the color block and save the task by clicking the save button. This would store their task onto the page and into the local storage

![demo of challenge, calendar of day with gray color = past time, red = current time, green = future time](Assets/Project%20Instruction/05-third-party-apis-homework-demo.gif)

## Deployed-Site
https://gt1222.github.io/Work-Day-Scheduler/