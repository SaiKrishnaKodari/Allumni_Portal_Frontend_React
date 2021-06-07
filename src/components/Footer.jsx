import React, { Component,useEffect,useState } from 'react'
import { SocialIcon } from 'react-social-icons';
import "./BannerPosts.css"
 const BannerPosts=()=>{
     
    return(
        <div style={{backgroundColor:'rgb(231,231,231)', display:"flex",flexDirection:"col",flexWrap:"wrap",boxShadow:'3px 3px 5px 6px #787a79'}}>
            <div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20 }}>
                    <div style={{border:'none',margin:"10px 0px 20px 10px", maxHeight:"200px",maxWidth:"530px",backgroundColor:"#white",overflow:"auto"}} > 
                        <div style={{boder:'none'}} >
                            <h2 className="fonting" style={{color:'black',textAlign:'center'}}>CONTACT US :</h2><hr></hr>
                            <div className='col-12 col-lg-7' style={{fontFamily: 'Times New Roman',color:'black'}}><ul>
                                <li style={{display:'none'}}>Address</li>
                                <li>Sreenidhi Institute of Science  Technology</li>
                                <li>Yamnampet, Ghatkesar</li>
                                <li>Hyderabad - 501 301, Telangana</li>
                                <li>info@sreenidhi.edu.in</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div></div>
                    
                    <div style={{border:'none',margin:"10px 0px 20px 10px", maxHeight:"200px",maxWidth:"330px",backgroundColor:"#white",overflow:"auto"}} > 
                        <div style={{boder:'none'}} >
                            <h2 className="fonting" style={{color:'black',textAlign:'center'}}>Follow Us On:</h2><hr></hr>
                            <div className='col-12 col-lg-7' style={{fontFamily: 'Times New Roman',color:'black'}}>
                            <SocialIcon url="https://twitter.com/" />&nbsp;&nbsp;&nbsp;&nbsp;
                            <SocialIcon url="https://instagram.com/" />&nbsp;&nbsp;&nbsp;&nbsp;
                            <SocialIcon url="https://linkedin.com/" />&nbsp;&nbsp;&nbsp;&nbsp;
                            <SocialIcon url="https://facebook.com/" />                            
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

export default BannerPosts