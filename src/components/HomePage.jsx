import React, { Component } from 'react'
import Navbar from './Navbar'
import BannerPosts from "./BannerPosts";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import './BannerPosts.css';
import Footer from "./Footer";
export default function HomePage() {
    return (
        <div style={{backgroundColor:'rgb(245,245,245'}}>
                
               



                <div className="bannerImg"style={{margin:"20px 20px 0px 20px",boxShadow:'3px 3px 5px 6px #787a79'}}>
                <AliceCarousel autoPlay autoPlayInterval="1000" disableButtonsControls='True'disableDotsControls='True'>
                    <img src='https://www.sreenidhi.edu.in/assets/images/sreenidhi-banner1.jpg'style={{width:'100%',height:'350px'}} className="sliderimg"/>
                    <img src='https://www.marjon.ac.uk/media/2018-website-images-gdpr/alumni/alumni-header-1.jpg'style={{width:'100%',height:'350px'}}className="sliderimg"/>
                    <img src='https://media.istockphoto.com/photos/graduation-college-school-degree-successful-concept-picture-id639698498?k=6&m=639698498&s=612x612&w=0&h=99Xiw4HZiSqwPrEaTzBUSP9c3x4T-pknjXNSw4Azwxc=' style={{width:'100%',height:'350px'}}className="sliderimg"/>
                    <img src='https://www.knightcsf.org/uploads/5/8/8/7/5887486/alumni-scrabble_orig.jpg' style={{width:'100%',height:'350px'}}className="sliderimg"/>
                </AliceCarousel>
                    {/* <img  style={{zIndex:'-10'}}id="banner" src="https://www.sreenidhi.edu.in/assets/images/sreenidhi-banner1.jpg" alt="oops" width="100%" /> */}
    
                
                </div>
                <div style={{margin:"20px 20px 0px 20px",backgroundColor:'white'}}>
                    <br></br>
                    <h3 className='fonting'>LATEST NEWS</h3>
                    <hr></hr>
                <marquee className='fonting' width="100%" direction="left" height="30%" onMouseOver="this.stop()">
                <li>Circular Date: 10.11.2020; Transport Arrangements for External, Mid and Lab Examinations from 12-11.2020 to 27-12-2020 - Reg.</li>
                <li>Latest Updates : International Conference on Intelligent Controller and Computing For Smart Power
2               2nd-24th July 2021 at Sreenidhi Institute of Science and Technology, Yamnampet, Ghatkeshar, Hyderabad, 50301</li>
</marquee><hr></hr></div>
<br></br>
                <BannerPosts />
                <br></br><br></br>
                <Footer/>

            
        </div>
    )
}
const stopscroll=() =>{
    console.log('hai')
    // setRun(false);
    
}