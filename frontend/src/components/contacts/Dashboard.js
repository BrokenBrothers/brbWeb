import React, { Fragment } from 'react'
import Form from './Form'
import Contact from './Contact'

export default function Dashboard() {
    return (
        <div>
            <Fragment>
                <Form />
                <Contact />
            </Fragment>
        </div>
    )
}
