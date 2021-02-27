# Opus Luna

![alt text](https://github.com/Restitutor-Orbis/Opus-Luna/blob/main/showcases/showcase1.png?raw=true)

A random wallpaper when you open the tab, a quote that only changes daily, and the current temperature in your city!

Also includes a RSS-feed displayer when hovered to the left of the screen.

The search bar supports a few commands like ".img <text>" for searching google images and ".wiki <text>" for searching wikipedia.
## How to use (customization)
Front-end you can only customize the city from which the temperature is displayed. This city is stored for the next time you open the tab. 
Hover over the temperature to see the currently displayed city-temperature. 

The month is in Danish, but you can simply out-comment the English and delete the Danish enumeration in the "setDate()" function in "clock.js"

Instructions for editing the files can be found in comments.
- If you want to edit the RSS feeds it can easily be done in "fetcher.js".
- Quotes can be edited in "themePicker.js".
- Wallpapers can be edited "themePicker.js".
- Search engine commands can be edited/added/removed in "searchEngine.js".  
# CREDITS

## Feeds
Feeds fetched with feednami:https://toolkit.sekando.com/docs/en/feednami

## Weather
Weather fetched with Open Weather Map: https://openweathermap.org/api

Most of the code for the weather fetching is taken from the great start page https://github.com/0-l/dawn

## Icon

Loupe-icon used in the search bar: https://www.flaticon.com/download/icon/landing/622669?format=svg&size=512

## Fonts
Font used is Lemon Milk: https://www.dafont.com/lemon-milk.font
 
