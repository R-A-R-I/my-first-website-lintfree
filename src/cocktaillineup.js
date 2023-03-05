import React from 'react';
import './App.css';
import { useHistory,withRouter, useNavigate} from "react-router-dom"


const CocktTailLineup = ({cocktails,handleDrink})=>{

    const history = useHistory()

    /*const routeChange = ()=>{
        //let path = `/Detail`
        history.push(`/Detail`)

    }*/// this is for the onClick to redirect to a page

    //const cocktails = 
    

    /*const fetchDrinks = fetch(url)
    .then(response=>{return response.json()})
    .then(data => {console.log(data)return data})
    //.catch(error => console.log('ERROR'))*/
    
    /*const displayDrinks = async () => {
        const a = await fetchDrinks
        return a;
      }*/
      /*const displayDrinks = () => {
        fetchDrinks.then((a) => {
          return a;
        })
      }*/

    
    //const drinkArr = displayDrinks()
    //console.log(drinkArr)
   // console.log(promiseValue)
   console.log(cocktails)

   // let zDrink

  

    /*const multiplefunctions= ()=>{
        history.push(`/Detail`)
        handleDrink(zDrink)
    }*/    

    try{
        if(cocktails=== null){
            throw new Error("No cocktails matched your criteria")
        }
    }catch(err){
        console.log(err)
        document.querySelector("#noresultmessage").style.display="block"
    }

    const distillDrinks = cocktails.map( drink => {
        
        const {idDrink, strAlcoholic, strDrink, strGlass,strDrinkThumb}=drink

        console.log(drink)
        
        //zDrink=drink

        const multiplefunctions= ()=>{

        //routeChange();
        history.push(`/Detail`)
        //handleDrink(zDrink)
        handleDrink(drink )
        }/* */
        return (
            <section id="cocktailsqr">
                <img src={strDrinkThumb}></img>
                <h5 id="drinkname">{strDrink}</h5>
                <h5 id="drinkglass">{strGlass}</h5>
                <h5 id="drinkcontent">{strAlcoholic}</h5>
                <div id="btnContainer">
                <button id="detailbtn" 
                onClick={multiplefunctions}>Detail</button>
                </div>
            </section>
        );
        
        })
    /**/


    return (
        <div className="cocktaillineupcontainer">
            {distillDrinks}
        </div>
    );
}

const ShowTheLocationWithRouter = withRouter(CocktTailLineup)//Not necessary because we have the history hook

export{ CocktTailLineup as default, ShowTheLocationWithRouter};