import React from "react";

function Header(){
    return(
        <header>
            <div className ="header-serarch">
                <form method="get" name="search" className="header-search__form">
                    <input className="header-search__input" type="text"></input>
                    <input className="header-search__submit" type="submit" value="submit"></input>
                </form>
            </div>
            <div className="header-profile">
                <div>로그인</div>
            </div>
        </header>
    )
}

export default Header;