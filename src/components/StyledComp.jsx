import styled from "styled-components";

export const Div = styled.div`
width:              ${props => props.w?props.w:"100%"};
height:             ${props => props.h?props.h:"0vh"};
background-color:   ${props => props.bg?props.bg:"white"};
margin:             ${props => props.m?props.m:"0"};
padding:            ${props => props.pd?props.pd:"0"};
margin-top:         ${props => props.mt?props.mt:"0vh"};
padding-top:        ${props => props.pt?props.pt:"0vh"};
border-radius:      ${props => props.br?props.br:"0 vh"};
border:             ${props => props.b?props.b:""};
display:            ${props => props.d?props.d:"static"};
max-height:         ${props => props.mh?props.mh:""};
position:           ${props => props.p?props.p:"static"};
font-size:          ${props => props.fs?props.fs:""};
box-sizing: border-box;
`;

export const InputBox = styled.input`
width: 78%;
height: 20px;
margin-top: 15px;
border-radius: 10px;
border: 1px solid whitesmoke;
box-shadow: 0px 0px 5px .3px lightgrey;
outline: none;
padding: 10px;
font-size: 15px;
padding-left: 30px;
`;