# Challenge
   Set up React Router for our app. We should be able to do the following:
1. Click on the words "Pic Some" in the header to go to the "/" route, which should display the Photos component (found in the pages folder)
2. Click on the shopping cart icon in the header to go to the "/cart" route, which should display the Cart component (found in the pages folder)

# Challenge
   Get the JSON data with the photos information from the API and save it to context state
1. As soon as the ContextProvider component renders, get the JSON data from this url: 
https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json

2. Save the array of data that comes back to state.
Review data fetching in React using `fetch`: 
https://scrimba.com/p/p7P5Hd/c79Jask

# Challenge
   Using the data in context state, map over it in the Photos page and display the images.


# Challenge
   Set up the Context for our app.
1. In a new file, create a new context with React
2. In that same file, create a custom component that renders the Provider of the context you created
3. For now, just pass in an empty string "" as the context provider's value prop
4. Export the custom Provider component and the full context object (so we can pass it to the useContext hook eventually)
5. Set up your index.js to use the custom context Provider you created. (You can wrap it as a parent of the Router component)


# Challenge
   Conditionally render the heart and plus icons when an Image component is being hovered on
1. Icon to render for the heart:
   <i className="ri-heart-line favorite"></i>
2. Icon to render for the plus:
   <i className="ri-add-circle-line cart"></i>



# Challenge
   Add ability to toggle an image's `isFavorited` property by clicking the heart icon (filled heart doesn't need to display on the image yet)
1. Add a toggleFavorite method to context. It should take an `id` parameter and update the array of allPhotos by flipping the `isFavorited` property of the photo with the matching `id`
    a. Have this function also console.log something so we know it's running correctly
    b. Don't try to modify the individual image object only. Make sure to provide a whole new array to context with the one item with the matching `id` being changed.
2. Make it so clicking the heart icon on any given image runs this method

# Challenge
   Add propTypes to the Image component
1. className should be a string
2. img should be an object, specifically an object with `id`, `url`, and `isFavorite` properties
    a. Hint: Specifying the properties of an object is called and object's "shape"

https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes


# Challenge
   Setup context to manage items in an array called `cartItems`. This will be an array of image objects.
1. Add the `cartItems` state to context. (Array)
2. Add function to add an image to the cart. (Takes the full image object as parameter)
3. Make it so clicking the plus icon on the image adds the item to the cart. (Console.log the cart items array to see that it's working)



Custom hook

* Challenge:
* 
* Using useEffect and useRef, make it so when this hook first loads,
* it sets up the "mouseenter" and "mouseleave" event listeners on the ref.
* 
* Remember: the ref.current will represent the DOM node, which is where you can
* do imperative commands like `.addEventListener` and `removeEventListener`.