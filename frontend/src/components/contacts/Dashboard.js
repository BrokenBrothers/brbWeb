// fragment permite fragmentar el codigo dentro de un componente
import React, { Fragment } from 'react'
// importacion del componente Form
import Form from './Form'
//importacion del componente contact
import Contact from './Contact'
/**
 *  componenete que permite unir dos componenetes por medio de Fragment
 * Es este se muestra el Form para crear un nuevo contacto y la lista de contactos
 * 
 */
export default function Dashboard() {// se exporta por default el componente
    return (
        <div>
            <Fragment>
                <Form />
                <Contact />
            </Fragment>
        </div>
    )
}
