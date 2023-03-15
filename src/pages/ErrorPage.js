import React from 'react'
import { Navbar } from '../components/Nav'

export const ErrorPage = () => {
    return (
        <div>
            <Navbar/>

            <section className="bg-white h-screen">
                <div className="py-8 px-4  mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center">
                        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-purple-600">404</h1>
                        <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl ">Something's missing.</p>
                        <p className="mb-4 text-lg font-light text-gray-500 ">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                        <a href="/" className="inline-flex text-white bg-purple-600 hover:bg-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4">Back to Homepage</a>
                    </div>
                </div>
            </section>

        </div>
    )
}
