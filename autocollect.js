// ==UserScript==
// @name         Infinite Craft Auto Collect
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Automatically collect custom items in Infinite Craft
// @author       Your Name
// @match        *://*.infinitecraftgame.com/*  // Replace with the actual URL of Infinite Craft
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Wait for the game to load
    window.addEventListener('load', () => {
        console.log("Infinite Craft Auto Collect Script Loaded");

        // Function to collect an item
        function collectItem(item) {
            // Simulate a click on the item to collect it
            item.click();
        }

        // Function to check and collect items
        function checkAndCollectItems() {
            // Query all the items on the page
            const items = document.querySelectorAll('.custom-item-class');  // Replace with the actual class of custom items

            items.forEach(item => {
                collectItem(item);
            });
        }

        // Run the item collection every 5 seconds
        setInterval(checkAndCollectItems, 5000);
    });
})();
