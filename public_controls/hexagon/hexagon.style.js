export const HexagonStyle = `
&:before {
    content: " ";
    width: 0; height: 0;
    border-bottom: 30px solid #6C6;
    border-left: 52px solid transparent;
    border-right: 52px solid transparent;
    position: absolute;
    top: -30px;
}

& {
    margin-top: 30px;
    width: 104px;
    height: 60px;
    background-color: #6C6;
    position: relative;
}

&:after {
    content: "";
    width: 0;
    position: absolute;
    bottom: -30px;
    border-top: 30px solid #6C6;
    border-left: 52px solid transparent;
    border-right: 52px solid transparent;
}

`