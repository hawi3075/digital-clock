# 🕒 Advanced Digital Clock with Glassmorphism

A modern, high-performance digital clock built with HTML5, CSS3, and Vanilla JavaScript. This project showcases advanced UI techniques and browser API integration.

## ✨ New Updates & Features

* **Dynamic Greetings:** Automatically detects the time of day to display "Good Morning," "Good Afternoon," or "Good Evening" with matching emojis.
* **Theme Persistence:** Uses **Browser Local Storage** to remember your Light/Dark mode preference even after refreshing the page.
* **Glassmorphism UI:** Features high-end design with backdrop-blur filters, semi-transparent borders, and animated gradients.
* **State Management:** Added logic to "Stop" and "Start" the live clock feed using JavaScript intervals.
* **Tabular Figures:** CSS font-variant-numeric is used to prevent "jittery" numbers as the seconds change.

## 🛠️ Technical Implementation

### JavaScript Logic
* **`setInterval()`**: Drives the real-time updates.
* **`localStorage`**: Handles data persistence without a database.
* **Template Literals**: Dynamically renders HTML strings for the clock display.

### CSS Styling
* **Flexbox**: Perfect centering across all screen sizes.
* **Keyframes**: Drives the smooth 15-second background gradient transition.
* **CSS Variables**: Managed via `:root` for easy theme switching.



