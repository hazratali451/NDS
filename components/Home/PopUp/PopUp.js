import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import S from "./PopUp.module.css"

const PopUp = (props) => {

    const [reasorToVisit, setReasorToVisit] = useState(false)
    const [dateAndTime, setDateAndTime] = useState(false)

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body className='m-0 p-0'>
                <div className={S.popup}>
                    <div className="row">
                        <div className={`col d-none d-lg-block ${S.leftside}`}>
                            <h2 className={S.modalTitle}>Pets Do Speak, <br />
                                But Only to Those Who <br /> Know How to Listen.</h2>
                            <p className={S.modalContent}>Call our office number to schedule your booking or give us your information and will contact you</p>
                        </div>
                        <div className={`col ${S.rightSide}`}>
                            <form action="" className={S.form}>
                                <h3 className={S.formTitle}>Book An Appointment</h3>

                                <div className={`row  ${S.row}`}>
                                    <div className="col m-0 p-0">
                                        <label>First Name</label>
                                        <input type="text" placeholder='Enter Your Name' />
                                    </div>
                                    <div className="col m-0 p-0">
                                        <label>Last Name</label>
                                        <input type="text" placeholder='Enter Your Name' />
                                    </div>
                                </div>

                                <div className={`row  ${S.row}`}>
                                    <div className="col m-0 p-0">
                                        <label>Email</label>
                                        <input type="email" placeholder='Email Address' />
                                    </div>
                                    <div className="col m-0 p-0">
                                        <label>Phone Number</label>
                                        <input type="number" placeholder='Enter Number' />
                                    </div>
                                </div>

                                <div className={`row  ${S.row}`}>
                                    <div className="col m-0 p-0">
                                        <label>Pet Name</label>
                                        <input type="text" placeholder='Pets Name' />
                                    </div>
                                    <div className="col m-0 p-0">
                                        <label>Pet Type</label>
                                        <input type="text" placeholder='Dog' />
                                    </div>
                                </div>

                                <div className={`row  ${S.row}`}>
                                    <div className="col m-0 p-0">
                                        <label>Reason for the visit</label>
                                        <select onChange={() => setReasorToVisit(true)} className={reasorToVisit && S.active_select}>
                                            <option className={`${S.others} d-none`}>Select Reason</option>
                                            <option className={S.others}>Option 1</option>
                                            <option className={S.others}>Option 2</option>
                                            <option className={S.others}>Option 3</option>
                                        </select>
                                    </div>
                                    <div className="col m-0 p-0">
                                        <label>Date and Time</label>
                                        <input onChange={() => setDateAndTime(true)} className={`${S.date_and_time} ${dateAndTime && S.active_select} `} min={new Date().toISOString().slice(0, 16)} type="datetime-local" defaultValue="2022-10-10T09:59" />
                                    </div>
                                </div>

                                <div className={`row  ${S.row} mb-0`}>
                                    <div className="col m-0 p-0">
                                        <label>Text</label>
                                        <textarea placeholder='messages' rows={3}></textarea>
                                    </div>
                                </div>
                                <div className='text-center'>
                                    <button className='cmn-btn'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default PopUp;