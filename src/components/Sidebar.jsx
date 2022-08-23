import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown} from 'react-icons/md';


const SidebarWrapper = styled.div`
height: 100% ;
width: 30%;
background-color: #ebebeb;
z-index: 10;
position: fixed;
top:0;
left: 0;
overflow: auto ;
display: flex;
flex-direction: column;
align-items: center ;
`
const Seccion = styled.section`
width: 100% ;
height: auto;
margin-top: 20px;
display:  flex;
flex-direction: column;
align-items:center;
`
const SeccionHeader = styled.h1`

`
const Lista = styled.div`
height:auto ;
display: flex ;
flex-direction: column;
`
const Drop = styled.div`
height:auto ;
width:90% ;
display: ${prop => prop.drop ? 'none' : 'flex'};
flex-direction: column;

`
const DropDown = styled(MdKeyboardArrowDown)`
  color:black;
  font-size:20px;
  transform: ${prop => prop.visible ? 'rotate(360deg)' : 'rotate(180deg)'};
  transition: all 0.2s;
`;
const SeccionTop = styled.div`
width:90% ;
display: flex ;
justify-content: space-between;
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
    habilidad:'',
    aptitud: ''
  });
  const downloadPDF = () =>{
    var element = document.getElementById('CV');
    var opt = {
      margin:       0,
      filename:     'miCV.pdf',
      image:        { type: 'jpeg', quality: 1 },
      html2canvas:  { scale: 1 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    opt.hotfixes = ["px_scaling"]
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
      <Seccion >
        <SeccionTop onClick={() => drop("encabezado")}>
          <SeccionHeader>Encabezado</SeccionHeader>
          <DropDown visible={state.encabezado} />
        </SeccionTop>
        
        <Drop drop={state.encabezado}>
        Nombre:
        <input  type="text" name="encabezado.nombre" value={estado.encabezado.nombre} onChange={onChange}></input>
        Apellido:
        <input  type="text" name="encabezado.apellido" value={estado.encabezado.apellido} onChange={onChange}></input>
        Codigo postal:
        <input  type="number" min="0" name="encabezado.codigo_postal" value={estado.encabezado.codigo_postal} onChange={onChange}></input>
        Número móvil:
        <input  type="number" min="0" name="encabezado.n_movil" value={estado.encabezado.n_movil} onChange={onChange}></input>
        Ciudad:
        <input  type="text" name="encabezado.ciudad" value={estado.encabezado.ciudad} onChange={onChange}></input>
        Comunidad autónoma:
        <input  type="text" name="encabezado.comunidad_autonoma" value={estado.encabezado.comunidad_autonoma} onChange={onChange}></input>
        Correo:
        <input  type="text" name="encabezado.correo" value={estado.encabezado.correo} onChange={onChange}></input>
        </Drop>
      </Seccion>

      <Seccion >
      <SeccionTop onClick={() => drop("resumen")}>
        <SeccionHeader>Resumen</SeccionHeader>
        <DropDown visible={state.resumen}/>
      </SeccionTop>
      <Drop drop={state.resumen}>
        <textarea rows="5" placeholder="Resumen profesional" name="resumen" value={estado.resumen} onChange={onChange}></textarea>
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
            <button id={estudio.id} name="formacion" onClick={deleteListInput}>delete</button>
            <h3>{estudio.titulo || "Inserte titulo"}</h3>
            Titulo:<input id={estudio.id} type="text" name="formacion.titulo" value={estudio.titulo} onChange={onListChange}></input>
            Localizacion:<input id={estudio.id} type="text" name="formacion.localizacion" value={estudio.localizacion} onChange={onListChange}></input>
            Fecha:<input id={estudio.id} type="text" name="formacion.fecha" value={estudio.fecha} onChange={onListChange}></input>
         </Lista>)}
         <button name="formacion" onClick={addSeccion}>anadir formacion</button>
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
              {habilidad.titulo} 
              <button id={habilidad.id} name="habilidades" onClick={deleteListInput}>delete</button>
            </div>
         )}
         <input type="text" name="habilidades" onChange={changeHabilidad} value={state.habilidad}></input>
         <button name="habilidades" onClick={(e) => {addSeccionItem(e, state.habilidad); clearState("habilidad")}}>anadir habilidad</button>
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
              {aptitud.titulo}
              <button id={aptitud.id} name="aptitudes" onClick={deleteListInput}>delete</button>
            </div>
         )}
         <input type="text" name="aptitudes" onChange={changeAptitud} value={state.aptitud}></input>
         <button name="aptitudes" onClick={(e) => {addSeccionItem(e, state.aptitud); clearState("aptitud")}}>anadir aptitud</button>
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
            <button id={trabajo.id} name="historial" onClick={deleteListInput}>delete</button>
            <h3>{trabajo.titulo || "Inserte titulo"}</h3>
            Titulo:<input id={trabajo.id} type="text" name="historial.titulo" value={trabajo.titulo} onChange={onListChange}></input>
            Empresa:<input id={trabajo.id} type="text" name="historial.empresa" value={trabajo.empresa} onChange={onListChange}></input>
            puesto:<input id={trabajo.id} type="text" name="historial.puesto" value={trabajo.puesto} onChange={onListChange}></input>
            Fecha Inicio:<input id={trabajo.id} type="text" name="historial.f_inicio" value={trabajo.f_inicio} onChange={onListChange}></input>
            Fecha Final:<input id={trabajo.id} type="text" name="historial.f_final" value={trabajo.f_final} onChange={onListChange}></input>
         </Lista>)}
         <button name="historial" onClick={addSeccion}>anadir historial</button>
      </Drop>
      </Seccion>

      <Seccion>
      <SeccionTop onClick={() => drop("infoAdicional")}>
        <SeccionHeader>Informacion adicional</SeccionHeader>
        <DropDown visible={state.infoAdicional}/>
      </SeccionTop>
      <Drop drop={state.infoAdicional}>
        <textarea rows="5" placeholder="Información adicional" name="infoAdicional" value={estado.infoAdicional} onChange={onChange}></textarea>
      </Drop>
      </Seccion>

      <Seccion>
      <SeccionHeader>Templates</SeccionHeader>
      <select name="template" id="template" value={estado.template} onChange={(e) => onTemplateChange(e.target.value)}>
        {templates.map((template, index) => <option value={index}>{template}</option>)}
      </select>
      </Seccion>

      <Seccion>
      <SeccionHeader>Limpiar formulario</SeccionHeader>
      <button onClick={clearForm}>Limpiar formulario</button>
      </Seccion>
      <Seccion>
      <SeccionHeader>Descargar en PDF</SeccionHeader>
      <button onClick={downloadPDF}>Descargar</button>
      </Seccion>
    
    </SidebarWrapper>

    </>
  )
}


