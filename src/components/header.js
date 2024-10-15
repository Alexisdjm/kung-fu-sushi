import images from "../images/exporting"

const Header = () => {

    return(
        <>
        <div className="header-container--body">
            <div className="brand-container">
                <div className="brand-container">
                    <img
                    className="brand-img" 
                    src={images.brand}
                    loading="lazy"
                    alt="brand"></img>
                    <span>くんしゅ</span>
                </div>
            </div>
            <div className="links-container">
                <div className="flag-link">
                    <span></span>
                    <a href="#">Home</a>  
                </div>
                <div className="flag-link">
                    <span></span>
                    <a href="#">Menu</a>   
                </div>
                <div className="flag-link">
                    <span></span>
                    <a href="#">About</a>    
                </div>
                <div className="flag-link">  
                    <span></span>
                    <a href="#">Contact</a>
                </div>
            </div>
            <div className="icon-links--box">
                <a className="icon-link" href="#">
                    <img 
                    className="icon-header" 
                    src={images.bag}></img>
                </a>
                <a className="icon-link-user" href="#">
                    <img 
                    className="icon-header" 
                    src={images.user}></img>
                </a>
            </div>
            <div id="menuToggle" className="menu-toggle--uiverse">
            <input id="checkbox" type="checkbox"></input>
            <label className="toggle" htmlFor="checkbox">
                <div className="bar bar--top"></div>
                <div className="bar bar--middle"></div>
                <div className="bar bar--bottom"></div>
            </label>
            </div>
        </div>
        </>
    )
}

export default Header