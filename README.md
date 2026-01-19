# ❔❓ FAQ accordion
This project was created based on a Frontend Mentor [https://www.frontendmentor.io/] challenge. The layout and design idea come from Frontend Mentor, while the code implementation is my own.

## 📦 Technologies
- HTML5 – Semantic markup (using `<article>`, `<main>`, and `<button>`) to ensure structural clarity and web accessibility.
- CSS3 – Custom styling with a focus on `Flexbox` for layout alignment and `Media Queries` for a fully responsive design.
- `Vanilla JavaScript` – Pure JS for DOM manipulation, event handling, and implementing the toggle logic for the accordion.
- Google Fonts – Integrated the Work Sans typeface to match the professional design requirements.

## 📚 What I Learned
- `DOM Manipulation` & Event Handling
I practiced how to select multiple elements using `querySelectorAll` and attach event listeners to each. I learned how to use the event object to target specific elements and traverse the DOM tree using `parentElement`.
- Accordion Logic (Single Open Item)
I implemented logic to ensure that when a new question is opened, any previously opened question automatically closes. This was achieved by looping through all items and removing the "active" class from those that weren't the current target.
- Dynamic Asset Switching
I learned how to dynamically change image sources (src) based on the state of the UI, providing visual feedback to the user by toggling between "plus" and "minus" icons.
- Responsive Design & Backgrounds
I practiced handling different background patterns for mobile and desktop using `Media Queries`, ensuring the interface looks polished on all screen sizes.

## 🚀 How It Can Be Improved?
While the current version is fully functional, here are some enhancements I would consider for future iterations:

- Accessibility (ARIA): Enhancing the component for screen readers.
- Keyboard Navigation: Ensuring that the focus state is highly visible and that users can navigate through all questions using only the Tab and Enter keys.
- CSS Variables: Implementing CSS Custom Properties (Variables) for colors and spacing to make the project even easier to theme or update in the future.

## 🍿 Video
https://github.com/user-attachments/assets/c99966b9-d1f9-48e0-8f0f-91a9598fc3d9
