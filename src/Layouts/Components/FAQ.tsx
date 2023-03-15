export const FAQ = () => {
    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false"
                            aria-controls="flush-collapseOne">How does it work?
                    </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                     data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">Create a task first, of course. We'll assist you and ask all the crucial questions so that you can easily summarize the assignment.
                        We will present your assignment to the most qualified experts.
                        If they are prepared to aid you and fulfill it, they will write to you directly.
                        Specify all the order's details with a professional, and then pay him directly.
                        In turn, we stand ready to safeguard the security and comfort of our clients,
                        so if you experience any problems, kindly get in touch with our technical support.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        How can I become an expert on this platform and start the tasks?
                    </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                     data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">You must use the form # to sign up as a freelancer.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false"
                            aria-controls="flush-collapseThree">
                        Is it safe for me?
                    </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse"
                     aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">You deal with a specialist directly, but if you have problems, we are here to support you.
                        Even if you just decide otherwise, we may always refund your money.
                    </div>
                </div>
            </div>
        </div>
    );
};