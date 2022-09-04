import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown} from 'react-icons/md';
import {device} from "../device/device";


const SidebarWrapper = styled.div`
height: 100vh ;
width: 100%;
background-color: #e6e6e6;
overflow: auto;
display: flex;
flex-direction: column;
align-items: center;
word-break: break-all;
margin-bottom:10px;
@media  ${device.tablet}{ 
  width:30%;
  position: fixed;
  top:0;
  left: 0;
}
`

const SectionWrapper = styled.div`
margin-top:20px;
width:90%;
`
const Seccion = styled.section`
position: relative ;
color:white;
width: 100% ;
height: auto;

display:  flex;
flex-direction: column;
align-items:center;
margin-bottom:15px;
`
const SeccionHeader = styled.h1`
 margin-left:10px;
 margin-right:10px;
 overflow-wrap: break-word;
`
const Lista = styled.div`
height:auto ;
display: flex ;
flex-direction: column;
margin-bottom:30px;
`
const ListaHeader = styled.div`
display: flex ;
align-items: center;
margin-bottom:10px;
position:relative;
`
const ListTitle = styled.p`
margin-right:20px;
`
const ListaH3 = styled.h3`
margin-right:20px;
`

const Boton = styled.button`
width:100%;
height:30px;
background-color:black;
border: none;
color: white;
cursor: pointer;
`
const DeleteButton = styled.button`
background-color:red;
border: none;
color: white;
height: 20px;
width:20px;
position: absolute;
right: 0;
margin-left:20px;
cursor: pointer;
`
const AddButton = styled.button`
background-color:black;
border: none;
color: white;
height: 25px;
cursor: pointer;
`

const Select = styled.select`
background-color:black;
border: none;
color: white;
height: 25px;
`

const Drop = styled.div`
margin-top:10px;
color:black;
height:auto ;
width:90% ;
display: ${prop => prop.drop ? 'none' : 'flex'};
flex-direction: column;
background-color: #e6e6e6;
`
const DropDown = styled(MdKeyboardArrowDown)`
  font-size:20px;
  transform: ${prop => prop.visible ? 'rotate(360deg)' : 'rotate(180deg)'};
  transition: all 0.2s;
  position: absolute;
  right:5px;
`;
const SeccionTop = styled.div`
&: hover {
  background-color: #a8a8a8;
  color:black;
}

background-color: #000000;
width:100% ;
height:35px;
display: flex ;
align-items:center;
cursor: pointer;
`

export const Sidebar = ({ estado, onChange , onListChange , deleteListInput , addSeccion , addSeccionItem, clearForm, templates, onTemplateChange}) => {
  const [state, setState] = useState({
    encabezado: true,
    resumen: true,
    formacion:  true,
    habilidades: true,
    aptitudes: true,
    historial: true,
    infoAdicional: true,
    template:true,
    habilidad:'',
    aptitud: ''
  });
  const downloadPDF = () =>{
    var element = document.getElementById('CV');
    var opt = {
      margin:       0,
      filename:     'miCV.pdf',
      image:        { type: 'png'  },
      html2canvas:  { scale: 2,  letterRendering: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
      pagebreak: { mode: 'css' }
    };
   
    window.html2pdf(element, opt)
  }
  const drop = (seccion) =>{
    const copiaState = state
    copiaState[seccion] = !copiaState[seccion]
    setState({...copiaState})
  }
  const  changeHabilidad  = (e)=>{
    const copiaState = state
    copiaState.habilidad = e.target.value
    setState({...copiaState})
  }
  const  changeAptitud  = (e)=>{
    const copiaState = state
    copiaState.aptitud = e.target.value
    setState({...copiaState})
  }
  const clearState = (seccion) =>{
    const copiaState = state
    copiaState[seccion]=''
  }
  return (
    <>
    <SidebarWrapper>
      <SectionWrapper>
      <Seccion >
        <SeccionTop onClick={() => drop("encabezado")}>
          <SeccionHeader>Encabezado</SeccionHeader>
          <DropDown visible={state.encabezado} />
        </SeccionTop>
        
        <Drop drop={state.encabezado}>
        Nombre:
        <input  type="text" placeholder="Nombre..." name="encabezado.nombre" value={estado.encabezado.nombre} onChange={onChange}></input>
        Apellidos:
        <input  type="text" placeholder="Apellidos..." name="encabezado.apellido" value={estado.encabezado.apellido} onChange={onChange}></input>
        Codigo postal:
        <input  type="number" min="0" placeholder="Codigo Postal..." name="encabezado.codigo_postal" value={estado.encabezado.codigo_postal} onChange={onChange}></input>
        Número móvil:
        <input  type="number" min="0" placeholder="Numero movil..." name="encabezado.n_movil" value={estado.encabezado.n_movil} onChange={onChange}></input>
        Ciudad:
        <input  type="text" placeholder="Ciudad..." name="encabezado.ciudad" value={estado.encabezado.ciudad} onChange={onChange}></input>
        Comunidad autónoma:
        <input  type="text" placeholder="Comunidad Autonoma..." name="encabezado.comunidad_autonoma" value={estado.encabezado.comunidad_autonoma} onChange={onChange}></input>
        Correo:
        <input  type="text" placeholder="Correo Electronico..." name="encabezado.correo" value={estado.encabezado.correo} onChange={onChange}></input>
        </Drop>
      </Seccion>

      <Seccion >
      <SeccionTop onClick={() => drop("resumen")}>
        <SeccionHeader>Resumen</SeccionHeader>
        <DropDown visible={state.resumen}/>
      </SeccionTop>
      <Drop drop={state.resumen}>
        <textarea rows="5" placeholder="Resumen profesional..." name="resumen" value={estado.resumen} onChange={onChange}></textarea>
      </Drop>
      </Seccion>

      <Seccion>
      <SeccionTop onClick={() => drop("formacion")}>
        <SeccionHeader>Formacion</SeccionHeader>
        <DropDown visible={state.formacion}/>
      </SeccionTop>
      <Drop drop={state.formacion}>
          {estado.formacion.map((estudio) => 
          <Lista key={estudio.id}>
            <ListaHeader>
              <ListaH3>{estudio.titulo || "Inserte titulo"}</ListaH3>
              <DeleteButton id={estudio.id} name="formacion" onClick={deleteListInput}>x</DeleteButton>
            </ListaHeader>
            
            Titulo:<input id={estudio.id} type="text" placeholder="Titulo..." name="formacion.titulo" value={estudio.titulo} onChange={onListChange}></input>
            Localizacion:<input id={estudio.id} type="text" placeholder="Localización..." name="formacion.localizacion" value={estudio.localizacion} onChange={onListChange}></input>
            Fecha:<input id={estudio.id} type="date" name="formacion.fecha" value={estudio.fecha} onChange={onListChange}></input>
         </Lista>)}
         <AddButton name="formacion" onClick={addSeccion}>Añadir formación</AddButton>
      </Drop>
      </Seccion>

      <Seccion >
      <SeccionTop onClick={() => drop("habilidades")}>
        <SeccionHeader>Habilidades</SeccionHeader>
        <DropDown visible={state.habilidades}/>
      </SeccionTop>
      <Drop drop={state.habilidades}>
        {estado.habilidades.map((habilidad) => 
            <div key={habilidad.id}>
              <ListaHeader>
              <ListTitle>{habilidad.titulo} </ListTitle> 
              <DeleteButton id={habilidad.id} name="habilidades" onClick={deleteListInput}>x</DeleteButton>
              </ListaHeader>
            </div>
         )}
         <input type="text" name="habilidades" placeholder="Habilidad..." onChange={changeHabilidad} value={state.habilidad}></input>
         <AddButton name="habilidades" onClick={(e) => {addSeccionItem(e, state.habilidad); clearState("habilidad")}}>Añadir habilidad</AddButton>
      </Drop>
      </Seccion>

      <Seccion >
      <SeccionTop onClick={() => drop("aptitudes")}>
        <SeccionHeader>Aptitudes</SeccionHeader>
        <DropDown visible={state.aptitudes}/>
      </SeccionTop>
      <Drop drop={state.aptitudes}>
        {estado.aptitudes.map((aptitud) => 
            <div key={aptitud.id}>
              <ListaHeader>
              <ListTitle>{aptitud.titulo} </ListTitle> 
              <DeleteButton id={aptitud.id} name="aptitudes" onClick={deleteListInput}>x</DeleteButton>
              </ListaHeader>
              
            </div>
         )}
         <input type="text" name="aptitudes" placeholder="Aptitud..." onChange={changeAptitud} value={state.aptitud}></input>
         <AddButton name="aptitudes" onClick={(e) => {addSeccionItem(e, state.aptitud); clearState("aptitud")}}>Añadir aptitud</AddButton>
      </Drop>
      </Seccion>

      <Seccion>
      <SeccionTop onClick={() => drop("historial")}>
        <SeccionHeader>Historial</SeccionHeader>
        <DropDown visible={state.historial}/>
      </SeccionTop>
      <Drop drop={state.historial}>
          {estado.historial.map((trabajo) => 
          <Lista key={trabajo.id}>
            <ListaHeader>
              <ListaH3>{trabajo.titulo || "Inserte titulo"}</ListaH3>
              <DeleteButton id={trabajo.id} name="historial" onClick={deleteListInput}>x</DeleteButton>
            </ListaHeader>
            
            Titulo:<input id={trabajo.id} type="text" placeholder="Titulo..." name="historial.titulo" value={trabajo.titulo} onChange={onListChange}></input>
            Empresa:<input id={trabajo.id} type="text" placeholder="Empresa..." name="historial.empresa" value={trabajo.empresa} onChange={onListChange}></input>
            Puesto:<input id={trabajo.id} type="text" placeholder="Puesto..." name="historial.puesto" value={trabajo.puesto} onChange={onListChange}></input>
            Fecha Inicio:<input id={trabajo.id} type="date" placeholder="Fecha de Inicio..." name="historial.f_inicio" value={trabajo.f_inicio} onChange={onListChange}></input>
            Fecha Final:<input id={trabajo.id} type="date" placeholder="Fecha Final..." name="historial.f_final" value={trabajo.f_final} onChange={onListChange}></input>
         </Lista>)}
         <AddButton name="historial" onClick={addSeccion}>Añadir historial</AddButton>
      </Drop>
      </Seccion>

      <Seccion>
      <SeccionTop onClick={() => drop("infoAdicional")}>
        <SeccionHeader>Informacion adicional</SeccionHeader>
        <DropDown visible={state.infoAdicional}/>
      </SeccionTop>
      <Drop drop={state.infoAdicional}>
        <textarea rows="5" placeholder="Información adicional..." name="infoAdicional" value={estado.infoAdicional} onChange={onChange}></textarea>
      </Drop>
      </Seccion>

      <Seccion>
        <SeccionTop onClick={() => drop("template")}>
          <SeccionHeader>Templates</SeccionHeader>
          <DropDown visible={state.template}/>
        </SeccionTop>
        <Drop drop={state.template}>
          <Select name="template" id="template" value={estado.template} onChange={(e) => onTemplateChange(e.target.value)}>
            {templates.map((template, index) => <option value={index}>{template}</option>)}
          </Select>
        </Drop>
      </Seccion>
      

      <Seccion>
        <Boton onClick={clearForm}>LIMPIAR FORMULARIO</Boton>
      </Seccion>
      <Seccion>
        <Boton onClick={downloadPDF}>DESCARGAR EN PDF</Boton>
      </Seccion>
      </SectionWrapper>
      
    
          
    </SidebarWrapper>

    </>
  )
}


