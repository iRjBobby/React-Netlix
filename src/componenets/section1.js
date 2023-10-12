// import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import './section1.css';

function Section1(){
    return(
        <div className='container'>

            <div className="poster-container">
                <img className='img-fluid' src="bahubali.jpg" alt="" />
            </div>
            


            <div className="info-container">
                <div className="info-titlt-logo">
                    <img className='img-fluid' src="./bahubalitextimg.png" alt="" />
                </div>

                <div>
                <div className="info-title">
                    <h1>Baahubali: The Beginning (Hindi Version)</h1>
                </div>
                      <div className="info-meta">
                      <p>2015 | U/A 13+ | 2h 38m | Hindi-Language Movies</p>
                 </div>
                 <div className="info-summary">
                      <p>Villagers in the kingdom of Mahismati rescue a baby who is destined to embark on a heroic quest in this Hindi version of S.S. Rajamouli's epic.</p>
                     <p><span>Starring:  </span>Prabhas,Rana Daggubati,Anushka Shetty</p>
                    </div>
                </div>

               
            </div>


            <div className="container-fluid flex">
                <img src="N_netflix.png" alt="" />
                <p>Watch all you want.</p>
                <button className="btnbtn btn_red"><a href="#">JOIN NOW</a></button>
            </div>

        </div>

    );
}

export default Section1;