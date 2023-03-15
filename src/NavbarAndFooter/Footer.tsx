

export const Footer = () => {
    return (
        <footer className='footer text-grey'>
            <div className='row'>
                <div className='col-lg-3 mb-3 mb-lg-0'>
                    <div className="d-flex flex-column align-items-start navbar-brand">
                        <img src={require('/Users/juliashipovskaya/myTask/01-frontend/react-library/src/Images/Logo.png')}
                             width='100'
                             height='100' alt='Logo' className='mb-3' />
                        <a type='button' className='btn btn-outline-secondary' data-bs-toggle='button' href='#'>Switch to English</a>
                    </div>
                </div>
                    <div className='col-lg-2 mb-3 mb-lg-0'>
                        <h6>For Clients</h6>
                        <ul className='footer-item list-unstyled'>
                            <li><a href='#'>How to Start</a></li>
                            <li><a href='#'>Prices</a></li>
                            <li><a href='#'>Task Examples</a></li>
                            <li><a href='#'>Guarantee</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-2 mb-3 mb-lg-0'>
                        <h6>For Freelancers</h6>
                        <ul className='footer-item list-unstyled'>
                            <li><a href='#'>How to Start</a></li>
                            <li><a href='#'>Prices</a></li>
                            <li><a href='#'>Task Examples</a></li>
                            <li><a href='#'>Guarantee</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-2 mb-3 mb-lg-0'>
                        <h6>About us</h6>
                        <ul className='footer-item list-unstyled'>
                            <li><a href='#'>Our mission</a></li>
                            <li><a href='#'>Help, FAQ</a></li>
                            <li><a href='#'>Terms&Privacy</a></li>
                            <li><a href='#'>Guarantee</a></li>
                        </ul>
                    </div>
                    <div className='col-lg-3'>
                        <h6>Contact Us</h6>
                        <ul className='social-media list-unstyled'>
                            <li>
                                <a href='#'><img src={require('/Users/juliashipovskaya/myTask/01-frontend/react-library/src/Images/facebook.png')}/></a>
                                <a href='#'><img src={require('/Users/juliashipovskaya/myTask/01-frontend/react-library/src/Images/instagram.png')}/></a>
                                <a href='#'><img src={require('/Users/juliashipovskaya/myTask/01-frontend/react-library/src/Images/telegram.png')}/></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <hr className='border-light full-line' />
                <div className='row'>
                    <div className='col-6'>
                        <p className='footer-text'>&copy; 2023 All rights reserved.</p>
                    </div>
                    <div className='col-6'>
                        <div className='d-flex justify-content-end'>
                            <a href='#'><img src={require('/Users/juliashipovskaya/myTask/01-frontend/react-library/src/Images/Visa.png')}/></a>
                            <a href='#'><img src={require('/Users/juliashipovskaya/myTask/01-frontend/react-library/src/Images/Mastercard.png')}/></a>
                        </div>
                    </div>
                </div>
        </footer>
    );
};
