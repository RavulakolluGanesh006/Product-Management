function Electronic({product}){
    return(
<div class="card" style={{width: `18rem` }}>
  <img src={product.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{product.title}</h5>
    <p>Price: ${product.price}</p>
        <p>Rating: {product.rating.rate}</p>
        <button className="btn btn-primary mx-1">Product Details</button>
    <a href="#" class="btn btn-primary">Add to Cart</a>
  </div>
</div>
    );
}
export default Electronic;