import logo from './logo.svg';
import './App.css';
import Navbar from './navbar.js';
import SearchBar from './searchbar.js';
import CocktTailLineup from './cocktaillineup.js';
import React, { useState, useEffect, useReducer, useRef, useContext  } from 'react';
import About from './about.js';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import Loading from './loading.js';
import DetailComponent from './Detail.js'

const CocktailContext = React.createContext()

function App() {
//---Add a loading page---

  const [cocktails, setCocktails] = useState([])//
  //console.log(cocktails)

  /*const [pull_cocktails, setpull_cocktail]= useState("")

  const pull_cocktail_function = (pulledcocktaildet)=>{
    setpull_cocktail(pulledcocktaildet)
    console.log(pulledcocktaildet)
  }*/

  const spreadprop ={
    cocktails:cocktails
  }
 
  const [currentDrink, setDrink]= useState({}) // the square/ curly brackets don't necessarily mean that the variable is an array/object it means that your either supplying to N postion or unpacking

  console.log(currentDrink)

  const handleDrink= (drink)=>{
  setDrink(drink)
  console.log(drink)
  //console.log(`handleDrinkOBJ:${drink}`)
  }

  return (
    <div>
      <Router>
        <Navbar/>{/*withRouter allows components like this that appear on every page to have access to have access to route props."Wherever we find a component outside the influence of the BrowserRouter"*/}
        <br/>
        <Switch>
            {/*<Route path='/' exact component={Home} render={()=>{
            <CocktailContext.Provider value={{cocktails, setCocktails}}>
              <Home/>
            </CocktailContext.Provider>}}/>*/}
            <Route path='/' exact>
            
            <CocktailContext.Provider value={{cocktails, setCocktails}}>
              <Home handleDrink={handleDrink}/>
            </CocktailContext.Provider>
            </Route>{/* implicit prop react router 5. This is how I fix the home page not working. See previous code above */}
          
        <Route path='/About' component={About}/>
        {/*<Route render={()=>{<h1>404: page not found</h1>}}/>  Remember that code is an ever evolving technology so page attention to the version of tech, ie, this is react router 5 and not 6 and switch values order of the components. This bit of code was causing the following component to NOT WORK*/} 

        {/*<Route path='/loading' render={()=><Loading loadingState={loading}/>}/>{/*If you want to pass props to the components this is how you would do it while in the route component. If you want to pass an object containing several properties you would pass an argument in the function which would be used by a spread attribute  */}
      {/*<Route path='/Detail'>
        <DetailComponent cocktails={cocktails}/>  Not allowed in react router v5/6
      </Route>*/}
      

      <Route path='/Detail'>
        <DetailComponent  drink={currentDrink}/>
      </Route>{/**/} {/*cocktails={cocktails}*/}
      
        </Switch>
      </Router>
    </div>
  );
}

//const ShowTheLocationWithRouter = withRouter(App)

const Home =({handleDrink}/**/)=>{

//const [loading, setLoading]= useState(false)

//const [cocktails, setCocktails] = useState([])

const { cocktails, setCocktails} = useContext(CocktailContext) //this is the new way to do the consumer portion of the ContextAPI with hooks 
//const [cocktails, setCocktails] = useState([]) was originally here


const [searchTerm, setSearchTerm] = useState("a")// maybe this could be moved to a higher component?




const fetchData = async () =>{// move to a different component

  
  try {  

    console.log(searchTerm)
    
    const url ='https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

    const resp = await fetch(`${url}${searchTerm}`)//It seems that the property values are tied to the url name
    //console.log(resp)
    //setLoading(true)



    const data = await resp.json()

    

    console.log(`Date:${data}`)

    if(data ==null){
        throw new Error(`No cocktails matched your criteria`)
    }


    setCocktails(data.drinks)// if data returns an object and your destructuring the useState hooke that returns an array you will get problems
    console.log(cocktails)

    return data
   
    }catch(error){
      console.log(error)
    } /**/
    console.log(" async working")
  }

  const searchBarValue_useRef = useRef("")// Pegged the useRef to an element in the DOM and then a function will be used to store the input from the value property of the element. useRef is an object. refVariable.current is equivalent to the element it is referenced to.

  useEffect(() => {
    console.log("useEffect working")

    
    fetchData()// the async will not work if there is no rendering is occuring
    //setLoading(false)
    /*func(cocktails)*/
    
  },[searchTerm])/**/
  
  //const promiseValue = displayDrinks().then(data =>console.log(data))
  

  
 

  const searchFunction = ()=>{

    const searchBarValue = searchBarValue_useRef.current.value

    setSearchTerm(searchBarValue)

     
  }

  /*if(loading){

    return (<>
    <Loading/>
    </>)
  }*/

  

  return (
    <div>
      <div id="searchbarcontainer">
        <SearchBar useRefVar={searchBarValue_useRef} searchFunc={searchFunction}/>{/**/}
        <h1 id="noresultmessage">No Cocktails Matched Your Search Criteria</h1>
      </div>
      <div id="cocktailtitlecontainer">
        <h2>Cocktails</h2>
      </div>
      <div id="CocktTailLineupcontainer-container">
        
       <CocktTailLineup cocktails={cocktails} handleDrink={handleDrink}/>{/**/}
       
      </div>
    </div>
  )
}



export default App;
