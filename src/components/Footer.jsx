import React from "react";

const year = new Date().getFullYear();

const Footer = function(){
    return (<footer>
                <p>copyright {year} - All rights reserved.</p>
            </footer>);
}

export default Footer;
