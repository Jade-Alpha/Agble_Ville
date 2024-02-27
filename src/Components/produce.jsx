import React from 'react'
import { productItems } from './product'


export default function Products() {

     const produce = productItems
    //  this how you filter through an array
    // const mapItems = produce.filter((item)=> item.category =="fruits")
    //     console.log(mapItems)


    // this is how to sort through an array
// const array = produce.sort((a, b) => b.id - a.id)
// console.log(array)


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
                <div className='product-item' >

                    {/* {produce.map((item) => (

<div key={item.id} >

<div className='card'>
<img src={item.image_url} alt="pic" />

<h2>{item.name}</h2>
<p>{item.description}</p>
<p>GHC {item.price}</p>
<div><button type="submit" className="btn">Add to Cart</button></div>
</div>



</div>
))} */}
                </div>
            </section>
        </div>
    )
}