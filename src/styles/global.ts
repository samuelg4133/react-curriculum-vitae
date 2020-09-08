import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
}
html, body {
	width: 100%;
	height: 100%;
}
body {
	color: black;
	box-sizing: border-box;
	font-family: Roboto;
	background: #fff5f5;
}

ul{
    list-style: none;
}

a {
    display: flex;
    align-items: center;
	text-decoration: none;
	color: black;
}

label {
	display: block;
}
`;
