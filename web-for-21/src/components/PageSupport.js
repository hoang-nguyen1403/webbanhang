import React from 'react'
import './PageSupport.css'

function PageSupport() {
    return (
        <div className='container'>
            <h1 class='header-border'>OUR STYLE</h1>
            <div class="row align-items-center my-5">
                <div class="col-lg-4">
                    <img
                        class="img-fluid rounded mb-4 mb-lg-0"
                        src='/images/hinh_chinh_1.jpg'
                        alt="about-img"
                    />
                </div>
                <div class="col-lg-6 d-flex flex-column">
                    <h1 class='text-left' >Our Products</h1>
                    <h2 class='text-left'>STYLE</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </div>

    )
}

export default PageSupport
