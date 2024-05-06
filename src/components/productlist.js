
import { useEffect,useState } from "react";
import Product from "./product";
function Productlist(){
    const api_url="https://fakestoreapi.com/products";
    const [products,setproducts]=useState([]);
    const [categories,setCategories]=useState([]);
    const getProducts=()=>{
        fetch(api_url).then((res)=> res.json()).then((data)=>setproducts(data));

    }
    const getCategories=()=>{
        fetch(`${api_url}/categories`).then((res)=> res.json()).then((data)=>setCategories(data));

    }
    const getProductInCategory=(catName)=>{
        fetch(`${api_url}/category/${catName}`)
        .then(res=>res.json())
        .then((data)=>setproducts(data));
    }
    useEffect(() =>{
        getProducts();
        getCategories();
    },[]);
     return(
        <>
        <h2 className="text-center">our Products</h2>
        <div className="container">
        <button  className="btn btn-info" onClick={()=>{
                          getProducts();
                    }}>All</button>

            {
                categories.map((cat)=>{
                    return <button key={cat} className="btn btn-info" onClick={()=>{
                        getProductInCategory(cat);
                    }}>{cat}</button>

                })
            }

        <div className="row">
            {products.map((product)=>{
                return(     <div className="col-3" key={product.id}>
                <Product product={product} showButton={true} />
   
                </div>
                    )
            })}
           
       
          



            </div>

</div>


     



        </>
     )
}
export default Productlist;