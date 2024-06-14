let search=document.querySelector('.search-bar');
let form=document.querySelector('.form');
const recipe=document.querySelector('.recipeName');
const instructions=document.querySelector('p');
const list=document.querySelector('.list');




form.addEventListener('submit', async function(e){
    e.preventDefault();
   let input=search.value;
   const res=await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
   console.log(res.data);
   recipe.innerHTML=res.data.meals[0].strMeal;
   instructions.innerHTML=res.data.meals[0].strInstructions;
  
  for(let i=1; i<20; i++){
      let ingredientNum = `strIngredient${i}`;
        const ingredientName = res.data.meals[0][ingredientNum];

        
        if (ingredientName) {
            const ingredientItem = document.createElement('li');
            ingredientItem.innerText = ingredientName;
            list.appendChild(ingredientItem);
        }
     
  }  
});


