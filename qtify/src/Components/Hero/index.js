import './Hero.css';

export default () => {
    return (
        <div className="hero">
            <div className="hero-item"> 
                <div style={{textAlign:'center'}}>
                    <span className="para">100 Thousand Songs,ad-free</span>
                    <p className="para">Over thousands podcast episodes</p>
                </div>
                <img src="herologo.png" style={{
                    width: '212px',
                    height: '212px',

                }}/>
            </div>
       </div>

   
    )
}