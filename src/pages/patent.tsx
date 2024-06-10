import React from 'react'
import Layout from '../layout/Layout'
import PatentComponent from '../components/Patents/Patent'
import Stars from '../components/Particles'


const PatentPage = () => {
    return (
        <Layout>
            <Stars/>
            <PatentComponent />
        </Layout>
    )
}

export default PatentPage