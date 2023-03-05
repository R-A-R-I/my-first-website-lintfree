import { useHistory,withRouter, useNavigate} from "react-router-dom"

const DetailComponent = ({/*cocktails,*/drink})=>{

    const history = useHistory()

    const routeChange = ()=>{
        //let path = `/Detail`
        history.push(`/`)
    }
    
    

   // const distillDrinks_detail = cocktails.map( drink => {
        
    //console.log(`The drinks: ${drink}`)
    console.log(drink)
    //console.log("hello")

        const {idDrink, strAlcoholic, strDrink, strGlass,strDrinkThumb,strCategory,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9,strInstructions}=drink//or drink[0]
        
        let ingredients = ""

        const ingredientsList = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8,strIngredient9]

        for(let x of ingredientsList){
            console.log(x)
            if(x === null){
                //ingredient.concat("")
                ingredients+=""
                console.log(ingredients)
                
            }else{
                //ingredient.concat(` ${x}`)
                ingredients+=`   ${x}`//Try to get the page to reflect this amount of space 
            }
        }

        


        console.log(`The ingredients: ${ingredients}`)

        return (
            <section id="cocktailsqr_detail">
                <div id="btnContainer_detail">
                    <button id="backhomebtn" onClick={routeChange}>Back Home</button>
                </div>

                <h2 id="drinkdetail_larger">{strDrink}</h2>
                <section id="boximageNparagraph">
                    <div id="boxImg">
                        <img id="img_detail" src={strDrinkThumb}></img>
                    </div>
                    <div id="boxP">
                        <p>
                            <span className="cocktailinfotitle">Name:  </span><span className="cocktailinfotitleResults">{strDrink}</span>
                            <br/>
                            <span className="cocktailinfotitle">Category:  </span><span className="cocktailinfotitleResults">{strCategory}</span>
                            <br/>
                            <span className="cocktailinfotitle">Info:  </span><span className="cocktailinfotitleResults">{strAlcoholic}</span>
                            <br/>
                            <span className="cocktailinfotitle">Glass:  </span><span className="cocktailinfotitleResults">{strGlass}</span>
                            <br/>
                            <span className="cocktailinfotitle">Instructions:  </span><span className="cocktailinfotitleResults">{strInstructions}</span>
                            <br/>
                            <span className="cocktailinfotitle">Ingredients:  </span><span className="cocktailinfotitleResults">{/*strIngredient1+" "+strIngredient2+" "+strIngredient3+" "+strIngredient4+" "+strIngredient5+" "+strIngredient6+" "+strIngredient7+" "+strIngredient8+" "+strIngredient9*/ingredients}</span>
                        </p>
                    </div>
                    
                    
                </section>
                
                <table>
                    <tr>
                       <td>
                           <span className="cocktailinfotitle">Name:  </span>
                       </td> 
                       <td>
                           <span className="cocktailinfotitleResults">{strDrink}</span>
                        </td>
                    </tr>
                    <tr>
                       <td>
                           <span className="cocktailinfotitle">Category:   </span>
                           
                           
                       </td>
                       <td>
                            <span className="cocktailinfotitleResults">{strCategory}</span>
                        </td> 
                    </tr>
                    <tr>
                       <td>
                           <span className="cocktailinfotitle">Info:  </span>
                       </td> 
                       <td> 
                           <span className="cocktailinfotitleResults">{strAlcoholic}</span>
                        </td>
                    </tr>
                    <tr>
                       <td>
                           <span className="cocktailinfotitle">Glass:  </span>
                       </td>  
                       <td>
                           <span className="cocktailinfotitleResults">{strGlass}</span>
                        </td>
                    </tr>
                    <tr>
                       <td>
                           <span className="cocktailinfotitle">Instructions:  </span>
                           
                       </td>
                       <td>
                            <span className="cocktailinfotitleResults">{strInstructions}</span>
                        </td> 
                    </tr>
                    <tr>
                       <td>
                           <span className="cocktailinfotitle">Ingredients: </span>
                       </td>
                       <td>
                            <span className="cocktailinfotitleResults">{ingredients}</span>
                        </td> 
                    </tr>

                </table>
                


            </section>
        );
        
       // })

    /*return (
        <div>
            {distillDrinks_detail}
        </div>

    );*/
}


export default DetailComponent;