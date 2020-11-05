export const HeaderStyle = `
&{
    background:#fff;
    box-shadow: 0 2px 15px 0 rgba(0,0,0,.05);
    border-bottom: 1px solid #ebebeb;
    min-width:1000px;
    width:100%;
    max-width:100%;
    display:inline-block;
}

& > h1.logo > img {
    height:32px;
    display:inline-block;
    margin-bottom:-10px;
}

& > h1.logo {
    font-family: 'Comfortaa';
    font-weight: 100;
    color: #333;
    height:32px;
    display:inline-block;
    padding:0px;
    margin:0px;
    vertical-align:top;
}
& > h1.logo > label{
    vertical-align:middle;
    display:inline-block;
}

& > ul{
    min-width:700px;
    width:calc(100% - 300px);
    max-width:100%;
}

& > button {
    vertical-align:top;
    background: #019875;
    color:#fff;
    margin: 5px 10px 0px 10px;
    padding: 5px 15px;
    font-size:10pt;
    border:solid 1px #019875;
    border-radius: 15px;
}
`