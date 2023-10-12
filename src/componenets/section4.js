// import './section4.css';
import  { row1CardData, row2CardData, row3CardData } from "../data/row1CardData";
// import row3CardData from "../data/row3CardData";
import Card from "./Card";
// import row2Carddata from "../data/row2CardData";          //ghjfhjf

const rowCardData = (props) =>{
    return(
        <Card 
            imageSource = {props.imageSource}
            imageLink = {props.imageLink}
        />
    );
}

function Section4(){
    return(
        <div className="more-like-this">
            <h1>More like this</h1>
            <div className="row">
            {/* {
                row1Carddata.map((element)=>{
                    return(
                    <Card 
                        imageSource = {element.imageSource}
                        imageLink = {element.imageLink}
                    />
                    )
                })
            } */}



                { row1CardData.map(rowCardData) }       
            </div>
            <div className="row">
                { row2CardData.map (rowCardData) }
            </div>
            <div className="row">
                { row3CardData.map (rowCardData) }
            </div>
            
            
            

            {/* <div className="row">
                {Carddata2.map(ncard)};
            </div> */}

            {/* <div className="row">
            <Card 
                    imageSource = {Carddata[3].imageSource}
                    imageLink = {Carddata[3].imageLink}
                />
               <Card 
                    imageSource = {Carddata[4].imageSource}
                    imageLink = {Carddata[4].imageLink}
               />
                <Card 
                    imageSource = {Carddata[5].imageSource}
                    imageLink = {Carddata[5].imageLink}
               />
            </div> */}

            {/* <div className="row">
            <Card 
                    imageSource = {Carddata[6].imageSource}
                    imageLink = {Carddata[6].imageLink}
                />
               <Card 
                    imageSource = {Carddata[7].imageSource}
                    imageLink = {Carddata[7].imageLink}
               />
                <Card 
                    imageSource = {Carddata[8].imageSource}
                    imageLink = {Carddata[8].imageLink}
               />
            </div> */}

        </div>

    );
}

export default Section4;