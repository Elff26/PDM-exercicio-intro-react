import React from "react"
import ReactDOM  from "react-dom"
import jaqueline from './images/jaqueline-mendes.jpg'
import './styles.css'

const App = () => {
    const profissionaisSaude = {
        medicos:[
            {
                nome: "José da Silva"
            },
            {
                nome: "Maria da Silva"
            },
            {
                nome: "Jaqueline Mendes"
            }
        ]
    }
    const estiloElemento1 = {
        margin: 'auto', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'space-around',
        width: 'auto', 
        height: '270px', 
        backgroundColor: '#EEE', 
        padding: 12, 
        borderRadius: 5, 
        border: '1px solid black'
    }

    console.log(profissionaisSaude.medicos[1].nome)
    return(
        <div style={estiloElemento1}>
            <label style={{fontWeight: 'bold', fontSize: 'larger'}}>Profissionais de saúde</label>
            <div style={{width: '100%', height: '200px', display: 'flex', padding: '8px', borderRadius: 5, border: '1px solid #d9d7d7'}}>
                <div className="estiloElemento3">
                    <img src={jaqueline} style={{width: '92%', borderRadius: 5}} alt="Jaqueline"/>
                    <label>{profissionaisSaude.medicos[2].nome}</label>
                </div>
                <div className="estiloElemento3">
                    <img src={process.env.PUBLIC_URL + '/jose-da-silva.jpg'} style={{width: '92%', borderRadius: 5}} alt="Jaqueline"/>
                    <label>{profissionaisSaude.medicos[0].nome}</label>
                </div>
                <div className="estiloElemento3">
                    <img src="https://images.unsplash.com/photo-1613918108466-292b78a8ef95?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" style={{width: '92%', borderRadius: 5}} alt="Jaqueline"/>
                    <label>{profissionaisSaude.medicos[1].nome}</label>
                </div>
            </div>
        </div>
    )     
}

ReactDOM.render(
    <App />,
    document.querySelector("#root") 
)