const loadCategories = async() =>{
 const response = await fetch('https://openapi.programming-hero.com/api/news/categories')
 const data = await response.json();
return data;
}

const setAllMenu = async()=>{
// console.log(loadCategories());
const data = await loadCategories();
// console.log(data.data.news_category[0].category_name);
for(const loadCategories of category)
{
    console.log(categories );
}


}
setAllMenu()
// loadCategories()

const loadNews = () =>{
    fetch('https://openapi.programming-hero.com/api/news/category/01')
    .then(res =>res.json())
    .then(data => console.log(data.data))
}

const displayNews = 
 
loadNews()