const Rating = (props) => {

    const stars = [] 
    
    for (let i = 0; i < props.stars; i++) {
        stars.push(<svg key={i} width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.1244 21.5C17.9665 21.5006 17.8125 21.4514 17.6842 21.3594L11.6556 16.9888L5.62703 21.3594C5.49823 21.4528 5.34306 21.5028 5.18395 21.5023C5.02485 21.5017 4.87005 21.4505 4.74193 21.3562C4.61382 21.2618 4.51903 21.1292 4.47127 20.9774C4.42351 20.8256 4.42525 20.6626 4.47624 20.5119L6.82749 13.5477L0.733747 9.36876C0.601752 9.27834 0.50213 9.14809 0.449437 8.99702C0.396743 8.84595 0.393739 8.682 0.440865 8.5291C0.48799 8.3762 0.582774 8.24238 0.711369 8.14719C0.839964 8.052 0.995629 8.00043 1.15562 8.00001H8.67343L10.9422 1.01798C10.9911 0.867243 11.0864 0.735857 11.2146 0.642674C11.3428 0.54949 11.4972 0.499298 11.6556 0.499298C11.8141 0.499298 11.9685 0.54949 12.0966 0.642674C12.2248 0.735857 12.3202 0.867243 12.3691 1.01798L14.6378 8.00236H22.1556C22.3158 8.00228 22.4718 8.05349 22.6008 8.1485C22.7298 8.24351 22.8249 8.37731 22.8724 8.53033C22.9198 8.68334 22.917 8.84751 22.8643 8.99881C22.8117 9.15011 22.712 9.28057 22.5798 9.3711L16.4837 13.5477L18.8336 20.51C18.8717 20.6227 18.8824 20.7429 18.8648 20.8606C18.8473 20.9782 18.802 21.0901 18.7327 21.1868C18.6634 21.2835 18.5721 21.3624 18.4663 21.4168C18.3606 21.4713 18.2433 21.4998 18.1244 21.5Z" fill="#12805D"/>
            </svg>);
            
    }
    
    if (stars.length < 5){
        for (let i = 0; i < (5 - stars.length); i++){
            stars.push(<svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.1556 8.75H14.0931L11.6556 1.25L9.21814 8.75H1.15564L7.71814 13.25L5.18689 20.75L11.6556 16.0625L18.1244 20.75L15.5931 13.25L22.1556 8.75Z" stroke="#12805D" stroke-width="2" stroke-linejoin="round"/>
                </svg>
                );
        }
        
    }
    
    
    return(
    
    <>
    {stars}
    
    
    
    </>
    
    
    )
    
    }
    
    export default Rating;