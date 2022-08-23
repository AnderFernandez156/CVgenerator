import React from "react";
import styled from "styled-components";

const Prueba = styled.div` 
width: 794px;
height: 1122px;
background-color: #ff4848;
`

const Lista = styled.div`
height:auto ;
display: flex ;
flex-direction: column;
`

export default function  Example1 ({ estado }) {
  return (
    <>
    <Prueba>
        nombre: {estado.encabezado.nombre}
        <br/>
        apellido: {estado.encabezado.apellido}
        <br/>
        Codigo postal: {estado.encabezado.codigo_postal}
        <br/>
        Numero movil: {estado.encabezado.n_movil}
        <br/>
        ciudad: {estado.encabezado.ciudad}
        <br/>
        Comunidad autonoma: {estado.encabezado.comunidad_autonoma}
        <br/>
        Correo: {estado.encabezado.correo}
        <br/>
        Resumen: {estado.resumen}
        <br/>
        
        <Lista id="formacion">
        <h3>Formacion</h3>
          {estado.formacion.map((estudio) => <div key={estudio.id}>titulo:{estudio.titulo}, formacion:{estudio.localizacion}, fecha: {estudio.fecha}</div>)}
        </Lista>
        <Lista id="habilidades">
          <h3>Habilidades</h3>
          {estado.habilidades.map((habilidad) => <div key={habilidad.id}>{habilidad.titulo}</div>)}
        </Lista>
        <Lista id="aptitudes">
        <h3>Aptitudes</h3>
          {estado.aptitudes.map((aptitud) => <div key={aptitud.id}>{aptitud.titulo}</div>)}
        </Lista>
        <Lista id="historial">
        <h3>Historial</h3>
          {estado.historial.map((trabajo) => <div key={trabajo.id}>
            titulo:{trabajo.titulo}, empresa:{trabajo.empresa}, puesto: {trabajo.puesto} , fecha inicio: {trabajo.f_inicial}, fecha final: {trabajo.f_final}
            </div>)}
        </Lista>
        Informacion adicional: {estado.infoAdicional}
        template: {estado.template}
        </Prueba>
    </>
  )
}
