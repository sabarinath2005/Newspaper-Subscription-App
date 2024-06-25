import React from 'react'
import Navbar from './Navbar'

const AddSubscribersPage = () => {
  return (
    <div>
        <Navbar/><br />
        <div className="container">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Subscriber Name</label>
                            <input type="text" className="form-control" placeholder='Enter Subscriber Name'/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone Number</label>
                            <input type="text" className="form-control"placeholder='Enter Phone Number'/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Address</label>
                            <textarea name="" id="" cols="30" rows="10" className="form-control" placeholder='Enter Address'></textarea>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Pincode</label>
                            <input type="text" className="form-control" placeholder='Enter Pincode'/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">District</label>
                            <input type="text" className="form-control" placeholder='Enter District'/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Village Office</label>
                            <input type="text" className="form-control" placeholder='Enter Village Office' />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label">Email ID</label>
                            <input type="text" className="form-control" placeholder='Enter Email ID' />
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default AddSubscribersPage
