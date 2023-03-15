import Rectangle from "./Rectangle";
import Square from "./Square";

export const Carousel = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" >
                    <img src={require('/Users/juliashipovskaya/myTask/01-frontend/react-library/src/Images/FrameForCarousel.png')} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h6>Advantages</h6>
                        <p>Our Advantages</p>
                        <div className='row d-flex justify-content align-items-center'>
                            <Square/>
                            <Square/>
                            <Square/>
                            <Square/>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={require('/Users/juliashipovskaya/myTask/01-frontend/react-library/src/Images/FrameForCarousel.png')} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h6 className="carousel text">How it works for employer?</h6>
                        <p className="carousel text">Magna sed pharetra quam eros tristique quis fames vel urna. In tortor feugiat arcu arcu facilisis at placerat dolor massa.
                            Fringilla quis ut sed sed egestas.Lorem ipsum dolor sit amet consectetur.</p>
                        <div className='rectangle'>
                        <div className='first-rectangle'>
                            <Rectangle/>
                        </div>
                        <div className='second-rectangle'>
                            <Rectangle/>
                        </div>
                        <div className='third-rectangle'>
                            <Rectangle/>
                        </div>
                        <div className='fourth-rectangle'>
                            <Rectangle/>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={require('/Users/juliashipovskaya/myTask/01-frontend/react-library/src/Images/FrameForCarousel.png')} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                            <h6 className="carousel text">How it works for employer?</h6>
                            <p className="carousel text">Magna sed pharetra quam eros tristique quis fames vel urna. In tortor feugiat arcu arcu facilisis at placerat dolor massa.
                                Fringilla quis ut sed sed egestas.Lorem ipsum dolor sit amet consectetur.</p>
                        <div className='rectangle'>
                            <div className='first-rectangle'>
                                <Rectangle/>
                            </div>
                            <div className='second-rectangle'>
                                <Rectangle/>
                            </div>
                            <div className='third-rectangle'>
                                <Rectangle/>
                            </div>
                            <div className='fourth-rectangle'>
                                <Rectangle/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Предыдущий</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Следующий</span>
            </button>
        </div>
    );
}
