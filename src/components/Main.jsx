import React, {Suspense} from "react";
import styled from "styled-components";

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
width: 70%;
margin-left:30% ;
display: flex ;
justify-content: center;
align-items: center ;
`
const CVwrapper = styled.div` 
width: 794px;
height: 1122px;
zoom: 75%;
background-color: white;
box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
`
const CV = styled.div`
width: 100%;
height: 100%;
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

