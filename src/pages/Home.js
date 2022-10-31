import React from 'react'

const Home = () => {
    return (
        <>

            <div className="hero min-h-screen" style={{ backgroundImage: `url("asset/pik1.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">CULIN'AIR</h1>
                        <p className="mb-5">Le tourisme gastronomique à la française</p>
                        <button className="btn btn-primary">bon appétit</button>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Home
