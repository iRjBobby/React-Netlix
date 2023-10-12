// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


function Card(props){
    return(
        <div className="col">
            <a href={props.imageLink} target="_blank">
                <img src={props.imageSource} alt="" />
            </a>
        </div>
    );
}

export default Card;