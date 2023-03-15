export const AboutUs = () => {
    return (
            <div className="row">
                <div className="col-md-6">
                    <img src={require('/Users/juliashipovskaya/myTask/01-frontend/react-library/src/Images/AboutUs.png')} alt="About Us" />
                </div>
                <div className="col-md-5">
                    <h2 className="display">About Us</h2>
                    <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, augue vel ultricies aliquam, ipsum massa eleifend eros, et maximus nulla ante vel eros. Duis eu odio vitae enim imperdiet pulvinar at quis velit.</p>
                    <p className="text">Vestibulum vel blandit ipsum, ac sagittis turpis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam et malesuada quam. Sed venenatis nulla at enim aliquet auctor.</p>
                    <p className="text">Pellentesque non magna quis lacus commodo aliquet. Curabitur vitae elit enim. Nulla malesuada luctus magna id pharetra. Ut bibendum quam nec ante efficitur fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec semper sodales ipsum, in scelerisque lectus.</p>
                    <a type='button' className='btn-about' href="src/Layouts#">Read More</a>
                </div>
            </div>
    );
};