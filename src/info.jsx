import React from 'react';

const Info = () => {
  return (
    <div className="row m-0" id='about-me'>
        <h2 className='aboutme-heading'>ABOUT <span>ME</span></h2>
        <div className="col-lg-4">
             <h3 className='py-3 ps-4 ms-4'>PERSONAL INFOS</h3>
            <div className='personal-info'>
                <div>
                    <p>First Name: <span>Haroon</span></p>
                    <p>Age: <span>27 years</span></p>
                    <p>Freelaunce: <span>Available</span></p>
                    <p>Phone: <span>+923455641907</span></p>
                    <p>Skype: <span>none</span></p>
                </div>
                <div>
                    <p>Last Name: <span>Zulfiqar</span></p>
                    <p>Nationalilty: <span>Pakistani</span></p>
                    <p>Address: <span>Islamabad</span></p>
                    <p>Email: <span>wise.guyy99@gmail.com</span></p>
                    <p>Languages: <span>English, Urdu, Punjabi</span></p>
                </div>
            </div>
        </div>
        <div className="col-lg-6">
            <div>
                <div className='d-flex'>
                    <div class="card text-bg-success m-3 w-50">
                        <div class="card-header">Experience</div>
                        <div class="card-body">
                            <h5 class="card-title">2+</h5>
                            <p class="card-text">Years of Experience.</p>
                        </div>
                    </div>

                    <div class="card text-bg-danger m-3 w-50">
                        <div class="card-header">Projects</div>
                        <div class="card-body">
                            <h5 class="card-title">8+</h5>
                            <p class="card-text">Completed Projects.</p>
                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                    <div class="card text-bg-warning m-3 w-50">
                        <div class="card-header">Customers</div>
                        <div class="card-body">
                            <h5 class="card-title text-light">8+</h5>
                            <p class="card-text">Happy Customers.</p>
                        </div>
                    </div>

                    <div class="card text-bg-info m-3 w-50">
                        <div class="card-header">Awards</div>
                        <div class="card-body">
                            <h5 class="card-title text-light">5+</h5>
                            <p class="card-text">Award Won.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-lg-2"></div>
    </div>
  )
}

export default Info;