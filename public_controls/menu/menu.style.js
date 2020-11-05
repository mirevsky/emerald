export const MenuStyle = `
& {
    padding:0px;
    margin:0px 20px;
    display:inline-block;
}

& > li{
    margin:0px;
    list-style-type:none;
    display:inline-block;
    position:relative;
}

& > li > a{
    text-decoration:none;
    color:#000;
    font-weight: 100;
    padding:10px;
    display:inline-block;
}

& > li:hover > ul{
    display:block;
}

& > li > img{
    display:inline-block;
    vertical-align:middle;
    margin:0px 10px;
    width:10px;
}
& > li:hover{
    box-shadow: 0 2px 15px 0 rgba(0,0,0,.05);
}

& > li:hover > ul{
    display:block;
}


& > li > ul{
    display:none;
    position:absolute;
    z-index:200;
    width:200px;
    background:#fff;
    padding:0px;
    margin:0px;
    -webkit-border-bottom-right-radius: 30px;
    -webkit-border-bottom-left-radius: 30px;
    -moz-border-radius-bottomright: 30px;
    -moz-border-radius-bottomleft: 30px;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;
    box-shadow: 0 2px 15px 0 rgba(0,0,0,.05);
}

& > li > ul > li{
    padding:15px;
    margin:0px;
    list-style-type:none;
}
& > li > ul > li a{
    text-decoration:none;
    color:#000;
    font-weight: 100;
}
`