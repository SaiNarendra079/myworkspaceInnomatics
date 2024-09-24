import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Cards = () => {
    return(
        <div className="card" style={{width:"18rem"}}>
            <img src="https://www.tasteofhome.com/wp-content/uploads/2017/10/Chicken-Pizza_exps30800_FM143298B03_11_8bC_RMS-2.jpg" className="card-img-top" alt="Pizza" />
            <div className="card-body">
                <h5 className="card-title">Chiken Pizza with Salad</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="btn btn-primary">Buy Now</a>
            </div>
        </div>
    )
}

export default Cards;