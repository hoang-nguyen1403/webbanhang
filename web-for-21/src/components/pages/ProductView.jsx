import React, { useState  } from "react";
import '../../App.css';
import './ProductView.css'
import {
    useParams
} from "react-router-dom";
import productInformation from '../data_information'
import { Modal,Button } from 'react-bootstrap';



export default function ProductView() {
    const { name } = useParams();
    const dataInfo = productInformation[`${String(name)}`]
    const [open, setOpen] = useState(false)
    console.log(dataInfo)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const refundHandleClose = () => setOpen(false);
    const refundHandleShow = () => setOpen(true);

    console.log(name)
    return <>

        <div class="row align-items-center my-5 justify-content-md-center align-self-start custom-col" >
            <div class="col-lg-3 custom-col">

                <div class='row align-items-center my-5 justify-content-md-center custom-col'>
                    <img class="img-custom" src={dataInfo['url3']} />
                </div>
                <div class='row align-items-center my-5 justify-content-md-center custom-col'>
                    <img class="  img-custom" src={dataInfo['url1']} />
                </div>

                <div class='row align-items-center my-5 justify-content-md-center custom-col'>
                    <img class="img-custom" src={dataInfo['url5']} />
                </div>

            </div>
            <div class="col-lg-3 custom-col align-self-start">
                <div class='row align-items-center my-5 justify-content-md-center custom-col'>
                    <img class=" img-custom" src={dataInfo['url4']} />
                </div>
                <div class='row align-items-center my-5 justify-content-md-center custom-col'>
                    <img class="img-custom" src={dataInfo['url2']} />
                </div>


            </div>
            <div class="col-lg-4 align-self-start product-info-box">
                <div class="row " >
                    <div class="card-body">
                        <h5 class="card-title display-4">{name}</h5>
                        <p class="card-text">{dataInfo['price']}</p>
                        <h5 class="card-title">Select Your Size</h5>
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-outline-dark">S</button>
                            <button type="button" class="btn btn-outline-dark">M</button>
                            <button type="button" class="btn btn-outline-dark">L</button>
                            <button type="button" class="btn btn-outline-dark">XL</button>
                        </div>
                        <h5 class="card-title">Number</h5>
                    </div>
                </div>
                
                <div class="row align-items-top my-5 justify-content-md-center custom-col" >
                    <button type="button" class="btn btn-outline-dark btn-lg btn-block">Add to Chart</button>
                </div>
                <div class="row align-items-top my-5 justify-content-md-center custom-col header-border" >
                    <p> purchase over 500.000 vnd [ free shipping ] </p>
                </div>
                <div class="row align-items-top my-5 justify-content-md-center custom-col header-border" >
                    <Button variant="outline-dark" className="btn btn-outline-dark btn-lg btn-block custom-btn" 
                    onClick={handleShow}>
                       How to get your size
                    </Button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header>
                            <Modal.Title>How to get your size</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
                <div class="row align-items-top my-5 justify-content-md-center custom-col header-border" >
                    <h5> </h5>
                    <Button variant="outline-dark" className="btn btn-outline-dark btn-lg btn-block custom-btn" 
                    onClick={refundHandleShow}>
                       Refund Policy
                    </Button>
                    <Modal show={open} onHide={refundHandleClose}>
                        <Modal.Header>
                            <Modal.Title>How to get your size</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Refund Policy here</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={refundHandleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
                
            </div>
        </div>

    </>;
}



// function Modal(props) {
//     if (props.show) {
//         return null
//     }
//     return (
//         <></>
//     );
// }