
<!-- Parcel -->
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking
- Different dev and bundles

#Plan of UI

Header 
 - Logo
 - Nav Items

Body
- Search
- Restaurant Container
  - Restaurant Card
    - Dish Name
    - Image
    - Restaurant Name
    - Rating
    - Cuisines
    - Time to Deliver

Footer
   - Copyright
   - Links
   - Address
   - Contact
   
        
Class Component: 
- It has class keyword and extends from React.component and has render method that returns JSX element syntax.
- It has constructor and super keyword for props

Functional Component:
- 


- Component LifeCycle Method:
  * ---- MOUNTING ---
     * Constructor (dummy)
     * Render (dummy)
        * <HTML Dummy>
     * ComponentDidMount
         * <Api call>
         * <this.setState> -> State variable is updated

   * ---- UPDATE ---   
        *  render(API data)
        *  <HTML (new API data)>
        *  ComponentDidUpdate  
        
         
## REDUX - steps followed 
Install libraries
- npm i @reduxjs/toolkit react-redux
- Build the store - appStore
- Provide store to our App - use Provider and wrap in App.js
Eg
return (
    <Provider store={appStore}>
    <UserContext.Provider value={{ loggedInUser: userName , setUserName }}>
      <div className="app">
        <Header />
        {/* Outlet is used to render the child routes */}
        <Outlet />
      </div>
    </UserContext.Provider>
    </Provider>
  );
- Connect our store to our app
- create Slice (cartSlice)
- 





