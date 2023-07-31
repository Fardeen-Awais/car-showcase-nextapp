# Spotify Clone project
Welcome commit of car showcase application

## Getting Started

### Future Helps 
- Custom button component ([commit 6958f82](https://github.com/Fardeen-Awais/Project-02-Spotify/commit/6958f82))
- Hero section ([commit c360c04](https://github.com/Fardeen-Awais/Project-02-Spotify/commit/c360c04))
- Navbar and footer section is completed ([commit 9454807](https://github.com/Fardeen-Awais/Project-02-Spotify/commit/9454807))

### Built With

    Next.js - Full stack development framework 
    Headless UI - UserInterface library help to make ui

### Commit details

In searchbar.tsx : 

It uses the useState hook to create a state variable manufacturer and a setter function setManufacturer. It also defines a function called handleSearch.

The component returns a form with a class name of "searchbar" and an onSubmit event handler that calls the handleSearch function. Inside the form, there is a div with a class name of "searchbar__item" that contains another component called SearchManufacturer, which receives the manufacturer state variable and the setManufacturer setter function as props.

In SearchManufacturer.tsx :

This code defines a component called SearchManufacturer. It receives two props: manufacturer and setManuFacturer. It uses the useState hook to create a state variable called query and a setter function called SetQuery.

Inside the component, there is a piece of code that filters a list of car manufacturers based on the value of the query state variable. If query is empty, it shows all manufacturers, otherwise it filters the list based on a case-insensitive match with the query.

The component returns a search input field with a dropdown menu that shows the filtered manufacturers. When the user types in the search input, it updates the query state variable. The dropdown menu transitions between showing and hiding based on the presence of filtered manufacturers.

When the user selects a manufacturer from the dropdown menu, it updates the manufacturer prop using the setManuFacturer function. The selected manufacturer is displayed in the search input field.

Overall, this component provides a search functionality for finding car manufacturers.



### Authors
- Fardeen Founder of Alfarnex


