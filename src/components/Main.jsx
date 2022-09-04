import React, {Suspense} from "react";
import styled from "styled-components";
import {device} from "../device/device";

const Template0 = React.lazy(() => import  ("./portfolio/example1") )
const Template1 = React.lazy(() => import  ("./portfolio/example2") )
const templates = [
  { template: Template0 },
  { template: Template1 },
];
const renderTemplate = (index, props) =>{
  const Template = templates[index].template;
  return  <Template estado={props}/>
}
const MainWrapper = styled.div`
width: 100%;
display: flex ;
align-items: center;
justify-content:center;
height: 100%;
@media  ${device.tablet}{ 
width:70%;
 margin-left:30%;
 justify-content:center;
}
`
const CVwrapper = styled.div` 
width: 794px;
min-height: 1122px;
background-color: white;
box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
margin-top: 30px;
margin-bottom:30px;
transform: scale(0.3);
@media ${device.mobileS}{ 
  transform: scale(0.35);
}
@media ${device.mobileM}{ 
  transform: scale(0.45);
}
@media ${device.mobileL}{ 
  transform: scale(0.55);
}
@media ${device.tablet}{ 
  transform: scale(0.65);
}
@media ${device.laptop}{ 
  transform: scale(0.75);
}
@media  ${device.laptopL}{ 
  transform: scale(0.8);
}


`
const CV = styled.div`

`


export const Main = ({ estado }) => {
  return (
    <>
    
    <MainWrapper >
      <CVwrapper >
        <CV id="CV">
        <Suspense fallback={<div>cargando</div>}>
          {renderTemplate(estado.template, estado)}
        </Suspense>
        
        
        </CV>
        
      </CVwrapper>
      
    </MainWrapper>
    </>
  )
}

