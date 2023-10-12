// import './section6.css';


function Section6(){
    return(
        <div className="footer">
            <h3>Questions? Call 000-800-919-1694</h3>
            <div className="row">
                <div className="col">

                    <p><a href="#">FAQ</a></p>
                    <p><a href="#">Invester Relations</a></p>
                    <p><a href="#">Privacy</a></p>
                    <p><a href="#">Speed Test</a></p>
                </div>

                <div className="col">
                    <p><a href="#">Help Center</a></p>
                    <p><a href="#">Jobs</a></p>
                    <p><a href="#">Cookie Preference</a></p>
                    <p><a href="#">Legal Notice</a></p>
                </div>

                <div className="col">
                    <p><a href="#">Account</a></p>
                    <p><a href="#">Ways to Watch</a></p>
                    <p><a href="#">Corporate Information</a></p>
                    <p><a href="#">Only On Netflix</a></p>
                </div>

                <div className="col">
                    <p><a href="#">Media Center</a></p>
                    <p><a href="#">Terms Of Use</a></p>
                    <p><a href="#">ContactUs</a></p>
                </div>

            </div>

            <div className="select-lang">
                {/* <label for="lang">Select Language</label> */}

                    <select id="lang">
                        <option value="English">English</option>
                        <option value="Hindi">Hindi</option>
                    </select>

                    <p>Netflix India</p>
                </div> 

        </div>

    );
}

export default Section6;