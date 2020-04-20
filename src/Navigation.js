
import React, { component } from 'react'

class ArchiveNav extends React.Component{
    render(){
        return(
            <div>
                <div className="navigation">
                    <nav className="row navbar navbar-inverse">
                        <div className="container-fluid">
                            <ul className="col-6 nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">Categories</a>

                                    <ul className="dropdown nav nav-tabs">
                                        <li><a href="./number-theory/theory-one.html" target="_blank">Number Theory</a></li>
                                        <li><a href="./algorithms/binary-search.html" target="_blank">Simple Algorithms</a></li>
                                    </ul>
                                </li>
                                <li><a href="about.html" target="_blank">About Us</a></li>
                                <li><a href="#">Contact Us</a></li>
                            </ul>
                            <div className="col-6  search">
                                <button type="submit" className="searchbutton"><span className="glyphicon glyphicon-search"></span></button>
                                <input className="searchbox" name="searchbox" id="searchbox" type="text" placeholder="Search Archive" />
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default ArchiveNav