import React, { useState } from "react";
import '../../App.css';
import './ProductView.css'
import '../Footer.css'
import {
    useParams
} from "react-router-dom";
import productInformation from '../data_information'
import { Modal, Button } from 'react-bootstrap';

import { connect } from "react-redux";
import { addToCart } from "../redux/Shopping/shopping-actions";

const mapStateToProps = (state) => {
    return {
        current: state.shop.currentItem,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    };
};

const ProductView = ({ current, addToCart }) => {
    const { name } = useParams();
    const dataInfo = productInformation[`${String(name)}`]
    const [open, setOpen] = useState(false)
    const [show, setShow] = useState(false);

    const [buy, setBuy] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const hanldeBuy = () => setBuy(true)

    const refundHandleClose = () => setOpen(false);
    const refundHandleShow = () => setOpen(true);
    const buyHandleClose = () => setBuy(false);
    const buyHandleShow = () => setBuy(true);
    return <>
        <div className="row align-items-center my-5 justify-content-md-center align-self-start custom-col" >
            <div className="col-lg-3 custom-col">

                <div className='row align-items-center my-5 justify-content-md-center custom-col'>
                    <img className="img-custom" src={dataInfo.url3} />
                </div>
                <div className='row align-items-center my-5 justify-content-md-center custom-col'>
                    <img className="  img-custom" src={dataInfo['url1']} />
                </div>

                <div className='row align-items-center my-5 justify-content-md-center custom-col'>
                    <img className="img-custom" src={dataInfo['url5']} />
                </div>

            </div>
            <div className="col-lg-3 custom-col align-self-start">
                <div className='row align-items-center my-5 justify-content-md-center custom-col'>
                    <img className=" img-custom" src={dataInfo['url4']} />
                </div>
                <div className='row align-items-center my-5 justify-content-md-center custom-col'>
                    <img className="img-custom" src={dataInfo['url2']} />
                </div>


            </div>
            <div className="col-lg-4 align-self-start product-info-box">
                <div className="row " >
                    <div className="card-body">
                        <h5 className="card-title display-4">{name}</h5>
                        <p className="card-text">Gi??: {dataInfo['price']} VND</p>
                        <h5 className="card-title">Size </h5>
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-outline-dark">S</button>
                            <button type="button" className="btn btn-outline-dark">M</button>
                            <button type="button" className="btn btn-outline-dark">L</button>
                            <button type="button" className="btn btn-outline-dark">XL</button>
                        </div>
                    </div>
                </div>

                <div className="row align-items-top my-5 justify-content-md-center custom-col" >
                    {/* <button type="button" className="btn btn-outline-dark btn-lg btn-block" onClick={() =>
                         addToCart(dataInfo['ID'])}>Th??m v??o gi??? h??ng</button> */}
                    <Button variant="outline-dark" className="btn btn-outline-dark btn-lg btn-block"
                        onClick={hanldeBuy}>
                        Th??m v??o gi??? h??ng
                    </Button>
                    <Modal show={buy} onHide={buyHandleClose}>
                        <Modal.Header>
                            <Modal.Title>Thanh To??n</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <p>
                                    C???m ??n qu?? kh??ch ???? l???a ch???n s???n ph???m c???a 21 Salvador.  Hi???n t???i ch??ng t??i ch??a h??? tr??? mua h??ng qua website.<br></br>
                                    Xin vui l??ng li??n h??? s??? ??i???n tho???i 0763838391 ho???c nh???n tin v??o fanpage 21 Salvador  ????? ???????c h??? tr??? mua. <br />
                                    Xin c???m ??n.
                                </p>
                                <p >Li??n l???c v???i ch??ng t??i ngay </p>
                                <a class='social-icon-link instagram custom_text_insta' href='https://www.instagram.com/21salvador.clothing/'><i class='fab fa-instagram' /> Instagram</a> <br/>
                                <a class='social-icon-link facebook custom_text_faceb' href='https://www.facebook.com/21Salvador.Offical'> <i class='fab fa-facebook-f' /> Facebook
                                    
                                </a>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={buyHandleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
                <div className="row align-items-top my-5 justify-content-md-center custom-col header-border" >
                    <p> mi???n ph?? ship cho ????n h??ng l???n h??n 500.000 VND [ free shipping ] </p>
                </div>
                <div className="row align-items-top my-5 justify-content-md-center custom-col header-border" >
                    <Button variant="outline-dark" className="btn btn-outline-dark btn-lg btn-block custom-btn"
                        onClick={handleShow}>
                        B???ng size
                    </Button>
                    <Modal show={show} onHide={handleClose} dialogClassName="my-modal">
                        <Modal.Header>
                            <Modal.Title>B???ng size</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img className="img-custom" src='/images/size_table.png' />
                            <img className="img-custom" src='/images/size_img.png' />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </div>
                <div className="row align-items-top my-5 justify-content-md-center custom-col header-border" >
                    <Button variant="outline-dark" className="btn btn-outline-dark btn-lg btn-block custom-btn"
                        onClick={refundHandleShow}>
                        ?????i tr??? s???n ph???m
                    </Button>
                    <Modal show={open} onHide={refundHandleClose}>
                        <Modal.Header>
                            <Modal.Title>?????i tr??? s???n ph???m</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <p>
                                    ?????I TR???: <br></br>
                                    - Qu?? kh??ch c?? th??? ?????i h??ng trong v??ng 3 ng??y k??? t??? ng??y nh???n h??ng.
                                    <br></br>
                                    -         M???t h??ng khi ?????i ph???i c??n nguy??n v???n, c??n tem m??c, ch??a qua s??? d???ng v?? ch??a gi???t.<br></br>
                                    -         H??ng mua r???i xin vui l??ng kh??ng tr??? l???i. 21 SALVADOR ch??? cho qu?? kh??ch ?????i tr??? khi ?????i size v?? l???i s???n xu???t (bung ch???, in b??? lem m???c)<br></br>

                                    * M???i th???c m???c kh??c xin vui l??ng li??n h??? s??? ??i???n tho???i 0763838391 ho???c nh???n tin v??o fanpage 21 Salvador  ????? ???????c h??? tr??? nh??. Xin c??m ??n.
                                </p>
                            </div>
                        </Modal.Body>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);

