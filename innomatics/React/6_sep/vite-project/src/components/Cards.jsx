import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Cards = (props) => {
    return(
        <div className="card" style={{width:"18rem"}}>
            <img src={props.img} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Price :{props.price}</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
            </div>
        </div>
    )
}

export default Cards;