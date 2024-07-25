import React from 'react';
import Sidebar from './Sidebar';
import Bag from './Sidebag';
import { useLocation, Link } from 'react-router-dom';
import '../styles/ProductDetail.css'
import Rating from './Rating'
import 'bootstrap/dist/css/bootstrap.min.css';


const ProductDetail = () => {
    
    const data = useLocation().state.product;
    console.log(data);

    return (
        <>
                <div className='container'>   
                    <div className='row'>
                        <div className='col-10'>
                         <Sidebar />
                         </div>
                            
                         <div className='col-10'>

                            <div className='container'>
                                
                                <div className='row'>
                                
                                    <Link to='/'> <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.375 1.25L1.625 8L8.375 14.75" stroke="#1A1F16" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                                    {' '} Back </Link>
                                    
                                    <div className='contentTop'>
                                        
                                        
                                        <div className='smallImgs'>
                                            <div className='previewImg'>
                                            <img src={data.image} alt={data.name} />
                                            </div>
                                            <div className='previewImg'>
                                            <img src={data.image} alt={data.name} />
                                            </div>                   
                                            <div className='previewImg'>
                                            <img src={data.image} alt={data.name} />
                                            </div>
                                        
                                        </div>

                                        <div className='bigImg'>
                                            <img src={data.image} alt={data.name} />
                                        </div>

                                        <div className='details'>
                                            <h1> {data.name} </h1>
                                            <h2> {data.smallDescription}</h2>
                                            <h3><Rating stars={data.rating}/> <span> {data.rating} / 5 </span> </h3>
                                            <h4> ${data.price} </h4>
                                            <p> <strong>{data.description} </strong></p>

                                            <div className='button'>
                                            <button type='button'> <svg className='bagIcon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.3122 7.94062C21.173 7.80063 21.0075 7.68961 20.8252 7.61398C20.6429 7.53835 20.4474 7.49961 20.25 7.5H17.25V6.75C17.25 5.35761 16.6969 4.02226 15.7123 3.03769C14.7277 2.05312 13.3924 1.5 12 1.5C10.6076 1.5 9.27226 2.05312 8.28769 3.03769C7.30312 4.02226 6.75 5.35761 6.75 6.75V7.5H3.75C3.35218 7.5 2.97064 7.65804 2.68934 7.93934C2.40804 8.22064 2.25 8.60218 2.25 9V19.125C2.25 20.9531 3.79688 22.5 5.625 22.5H18.375C19.2593 22.5003 20.1086 22.1545 20.7413 21.5367C21.0596 21.233 21.3132 20.8679 21.4865 20.4634C21.6599 20.059 21.7495 19.6236 21.75 19.1836V9C21.7506 8.80326 21.7122 8.60834 21.6371 8.42652C21.5619 8.24469 21.4515 8.07955 21.3122 7.94062ZM15 15.75H12.75V18C12.75 18.1989 12.671 18.3897 12.5303 18.5303C12.3897 18.671 12.1989 18.75 12 18.75C11.8011 18.75 11.6103 18.671 11.4697 18.5303C11.329 18.3897 11.25 18.1989 11.25 18V15.75H9C8.80109 15.75 8.61032 15.671 8.46967 15.5303C8.32902 15.3897 8.25 15.1989 8.25 15C8.25 14.8011 8.32902 14.6103 8.46967 14.4697C8.61032 14.329 8.80109 14.25 9 14.25H11.25V12C11.25 11.8011 11.329 11.6103 11.4697 11.4697C11.6103 11.329 11.8011 11.25 12 11.25C12.1989 11.25 12.3897 11.329 12.5303 11.4697C12.671 11.6103 12.75 11.8011 12.75 12V14.25H15C15.1989 14.25 15.3897 14.329 15.5303 14.4697C15.671 14.6103 15.75 14.8011 15.75 15C15.75 15.1989 15.671 15.3897 15.5303 15.5303C15.3897 15.671 15.1989 15.75 15 15.75ZM15.75 7.5H8.25V6.75C8.25 5.75544 8.64509 4.80161 9.34835 4.09835C10.0516 3.39509 11.0054 3 12 3C12.9946 3 13.9484 3.39509 14.6517 4.09835C15.3549 4.80161 15.75 5.75544 15.75 6.75V7.5Z" fill="white"/></svg>
                                            {''} Add to Bag </button>
                                            </div>


                                        </div>
                                    
                                     

                                    </div>
                                        
                                    
                                    
                                    <div className='contentBottom'>
                                        
                                        <hr />
                                        
                                        <div className='description'>
                                            <h2> Description </h2>
                                            <hr />
                                            <p> {data.fullDescription} </p>
                                        </div>

                                    </div> 
                                    
                                </div>
                                
                            </div>
                        
                            </div>

                            <div className='col-2'>
                            <Bag />
                            </div>
                    
                    </div>
                </div>
        </>
    );
};

export default ProductDetail;