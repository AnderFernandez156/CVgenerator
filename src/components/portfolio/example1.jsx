import React from "react";
import styled from "styled-components";

const MainCV = styled.div` 
background-color: #ffffff;
width: 794px;
min-height: 1122px;
display:flex;
flex-direction:column;
justify-content: flex-start;
`

const Section = styled.section`
width: 90%;
align-self: center;
margin-top:15px ;
margin-bottom:15px ;
`
const Encabezado = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const SectionTitle = styled.h3`
font-family: Impact;
`
const Title = styled.h1`
font-family: Impact;
`

const Underline = styled.hr`
border:1px solid black;
`
const SectionContent = styled.section`
width: 90%;
margin-top:10px;
margin-left: 60px;
`
const P = styled.p`
white-space: pre-line;
`
const Raya = styled.div`
height:30px;
background-color:#424242;
width:90% ;
align-self: center;
margin-top: 30px;
margin-bottom:30px;
`
const Cuadrado = styled.div`
width:20px;
height: 30px;
background-color:#ff0000;
margin-left:50px;
`

export default function  Example1 ({ estado }) {
  return (
    <>
    <MainCV>
      
        <Raya>
          <Cuadrado></Cuadrado>
        </Raya>
      
      <Encabezado>
        <Title>{estado.encabezado.nombre.toUpperCase()} {estado.encabezado.apellido.toUpperCase()}</Title>
        <p>{estado.encabezado.codigo_postal}, {estado.encabezado.ciudad}, {estado.encabezado.comunidad_autonoma}</p>
        <p>{estado.encabezado.n_movil}</p>
        <p>{estado.encabezado.correo}</p>
      </Encabezado>
      <Section id='Resumen'>
        <SectionTitle>RESUMEN PROFESIONAL</SectionTitle>
        <Underline></Underline>
        <SectionContent>
          <p>{estado.resumen}</p>
        </SectionContent>
        
      </Section>
      <Section id='Formacion'>
        <SectionTitle>FORMACIÓN</SectionTitle>
        <Underline></Underline>
        <SectionContent>
          {estado.formacion.map((estudio) => 
        <p key={estudio.id}><b>{estudio.titulo}</b><br/>{estudio.localizacion}  {estudio.fecha}</p>)}
        </SectionContent>
      </Section>
      <Section id='Habilidades'>
        <SectionTitle>HABILIDADES</SectionTitle>
        <Underline></Underline>
        <SectionContent>
          <ul>
            {estado.habilidades.map((habilidad) => <li key={habilidad.id}>{habilidad.titulo}</li>)}
          </ul>
        </SectionContent>
      </Section>
      <Section id='Aptitudes'>
        <SectionTitle>APTITUDES</SectionTitle>
        <Underline></Underline>
        <SectionContent>
          <ul>
          {estado.aptitudes.map((aptitud) => <li key={aptitud.id}>{aptitud.titulo}</li>)}
          </ul>
        </SectionContent>
      </Section>
 
      <Section id='Historial'>
        <SectionTitle>HISTORIAL LABORAL</SectionTitle>
        <Underline></Underline>
        <SectionContent>
          <ul>
          {estado.historial.map((trabajo) => <li key={trabajo.id}>
            titulo:{trabajo.titulo}, empresa:{trabajo.empresa}, puesto: {trabajo.puesto} , fecha inicio: {trabajo.f_inicial}, fecha final: {trabajo.f_final}
            </li>)}
          </ul>
        </SectionContent>
      </Section>
      <Section id='InformacionAdicional'>
        <SectionTitle>INFORMACIÓN ADICIONAL</SectionTitle>
        <Underline></Underline>
        <SectionContent>
         <P>{estado.infoAdicional}</P>
        </SectionContent>
      </Section>
    </MainCV>
    </>
  )
}
