# Spotify Clone project
Welcome commit of car showcase application

## Getting Started

### Future Helps 
- Custom button component ([commit 6958f82](https://github.com/Fardeen-Awais/Project-02-Spotify/commit/6958f82))
- Hero section ([commit c360c04](https://github.com/Fardeen-Awais/Project-02-Spotify/commit/c360c04))
- Navbar and footer section is completed ([commit 9454807](https://github.com/Fardeen-Awais/Project-02-Spotify/commit/9454807))

### Built With

    Next.js - Full stack development framework 

### Commit details

In this commit we use layout.tsx to have an navbar.tsx and footer.tsx in the pages.

In Navbar.tsx: 
We make an proper sticky navbar that help user to navigate without going to the up.

    Here is some new things i learn:
    1. glassmorphism effect in navbar.
    2. Sticky navbar. 
    3. Use backdrop blur is awesome

In Footer.tsx:
We make an well organized footer for our app. We use constant so we can add more section as we wanted. We use map function to use the items of constants.

In SearchBar.tsx: 
In this component, we make searchbar with headless ui. Let's discussed about this component
first. 

This code snippet defines a functional component called SearchBar in TypeScript. It uses the useState hook to create a state variable called manufacturer and a setter function called setManufacturer. The handleSearch function is defined but empty.

The component returns a form with a class name of "searchbar" and an onSubmit event handler set to handleSearch. Inside the form, there is a SearchManufacturer component that takes in the manufacturer state variable and the setManufacturer setter function as props.

    We use some of the states empty so we can fill these states later to 
    enhanced the filteration feature
### Authors
- Fardeen Founder of Alfarnex


