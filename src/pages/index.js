import React, { useState, useEffect } from 'react';
import { Sidebar } from '../components/Sidebar'
import { Main } from '../components/Main'
import { Data } from "../data/index";
import { v4 as uuid }  from 'uuid'
const KEY = 'cvKey';
export const Editor = () => { 
  const [state, setState] = useState(Data);
  useEffect(() => {
    const cv = JSON.parse(localStorage.getItem(KEY));
    if(cv){
      setState(cv);
    }
    },[]);
  useEffect(() => {
    localStorage.setItem(KEY ,JSON.stringify(state));
  },[state]);

  const templates = [
     "template1",  "template2"
  ]
  const handleInputChange = (e) => {
    const {name,value} = e.target;
    const lista = name.split(".");
    if(lista.length === 1){
      setState({...state, [name]: value});
   }
    else{
      let section = lista[0];
      let variable = lista[1];
      const copiaState= state;
      copiaState[section][variable]= value; 
     setState({...copiaState});
    }
   
  }
  const handleInputListChange = (e) => {
    const {name,value} = e.target;
    const copiaState= state;
    const lista = name.split(".");
    let section = lista[0];
    let variable = lista[1];
    for (var i = 0; i < copiaState[section].length; i++) {
      if (copiaState[section][i]["id"] === e.target.id) {
        copiaState[section][i][variable] = value;
      }
    }
     setState({...copiaState});
   
  } 
  const secciones = {
    formacion: {id:uuid(), titulo: "", localizacion: "", fecha: ""},
    habilidades: {id:uuid(), titulo: ""},
    historial: {id:uuid(), titulo: "" , empresa: "", puesto:"", f_inicio: "", f_final: ""},
    aptitudes: {id:uuid(), titulo: ""}
  }
  const addSeccion = (e) =>{
    const {name} = e.target;
    const copiaState= state;
    copiaState[name].push(secciones[name])
    setState({...copiaState});
  }

  const addSeccionItem = (e,variable) =>{
    const {name} = e.target;
    const copiaState= state;
    const obj = secciones[name]
    obj.titulo= variable
    copiaState[name].push(obj)
    setState({...copiaState});
  }

  const deleteListInput = (e) => {
    const {name,id} = e.target;
    const copiaState= state;
    for (var i = 0; i < copiaState[name].length; i++) {
      if (copiaState[name][i]["id"] === id) {
        copiaState[name].splice(i, 1);
        break;
      }
    }
    setState({...copiaState});
  }
  const  clearForm = (e) => {
    const data = JSON.parse(JSON.stringify(Data));
    setState(data)
  }
  const onTemplateChange = (value) => {
    setState({...state, template: value})
  }
  
  return (
    <div>
      <Sidebar estado={state} onChange={handleInputChange} onListChange={handleInputListChange} addSeccion={addSeccion}  deleteListInput={deleteListInput} addSeccionItem={addSeccionItem} clearForm={clearForm} templates={templates} onTemplateChange={onTemplateChange}/>
      <Main estado={state}/>
    </div>
  );
}