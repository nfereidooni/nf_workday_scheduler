# Work Day Scheduler

## Description 

The goal of this project was to create a simple calendar application that allows the user to save events for each hour of the day. The app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## HTML File

The HTML code is a single page that displays the current date at the top of the page, followed by a table that contains a row for each hour of the workday (9AM to 5PM). Bootstrap was used to design the UI.

## Javascript File

The Javascript contains all of the schedular functionality

### Moment.js
* Current date - Moment.js was used to pull the current date and placed it at the top of the page
* Current hour - Moment.js was used to pull the current hour and used in the scheduler colouring functionality

### Schedule Colouring
* When the row hour is less than the current hour (using Moment.js), the row(s) turn grey
* When the row hour is the same as the current hour (using Moment.js), the row turns red
* When the row hour is more than the current hour (using Moment.js), the row(s) turn green

### Saving Events
* When event data is entered and the user clicks the save icon, the data entered is saved in local storage and continues to appear when the page is reloaded.

## Challenges & Potential Improvements

## Credits

* Fil
* Daniel
* My amazing peers!
* Groot (my 7-month old puppy)

## License

Copyright (c) 2020] [Niki Fereidooni]
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
