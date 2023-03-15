export  const GetStartedButton = () => {
    return (
        <div className='p-5 mb-4 bg-white header'>
            <div className='container-fluid py-5 text-black d-flex justify-content-left align-items-center'>
                <div>
                    <h1 className='display'>Find your dream job in one place</h1>
                    <p className='text col-md-8 fs-4 text-secondary'>Solve your staffing challenges with our flexible workforce. Stinters you need them, freeing up your core team to focus on the most value-adding work.</p>
                    <a type='button' className='btn btn-primary'data-bs-toggle='button' href='src/Layouts#'>Get started!</a>
                </div>
                <img
                    src={require('/Users/juliashipovskaya/myTask/01-frontend/react-library/src/Images/Header.png')}
                    width='542.4'
                    height='492.8'
                    alt="book"
                />
            </div>
        </div>
    )
}