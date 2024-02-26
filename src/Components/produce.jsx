import React from 'react';
import { productItems } from './products';

export default function Products() {

    //const names= ["Gigi", "Fafa", "Ama"]
    //console.log (names.length)
    //console.log("remove Ama", names.pop())
    //console.log("index",names.indexOf('Ama'))
    //console.log("add Kevin",names.push('Kevin'))
    //console.log("all names",names)

    //const mappedItems = names.map((name) => {
//console.log("one name", item) //name

//console.log('mapped', mappedItems)
   // })


//const deleteItem=produce.splice(2, 1)
//console.log(produce)

//const fruits = produceItems.filter(item => item.category === fruits)
//console.log(fruits)

//const filtered = produce.filter((item) => item.category === dairy) 
//console.log(filtered)


const produce = productItems

const sortedProduce = produce.sort ().reverse()
  
  console.log(sortedProduce);
  


return (

<div>
<section className='produce'>
<div>
<h2>Our Products</h2>
</div>

<div>
<ul>
<li>
<a href="/"> Vegetables</a>
</li>

<li>
<a href="/"> Fruits</a>
</li>

<li>
<a href="/"> Dairy</a>
</li>

<li>
<a href="/"> Legumes</a>
</li>
</ul>
</div>
</section>
</div>

)
}
/*
<div className='product-item'>
  {produce.map((item) => (
    <div key={item.id}>
      <div className='card'>
        <img src={item.image_url} alt="pic" />
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>GHC {item.price}</p>
        <div><button type="submit" className="btn">Add to Cart</button></div>
      </div>
    </div>
  ))}
</div>*/

  
