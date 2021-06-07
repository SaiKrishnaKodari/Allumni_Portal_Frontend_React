import React, { Component,useEffect,useState } from 'react'
import "./BannerPosts.css"
 const BannerPosts=()=>{
     const [lst, setlst] = useState([])

     const url="http://127.0.0.1:8000/banner_posts"
     useEffect(()=>{

        fetch(url).then(function(resp){
           resp.json().then((l)=>{
               console.log(l)
               setlst(l)
           })

        }).catch((err)=>{
            alert("error while fetching posts from database server ")
            
        })

     },[])




    return(
        <div style={{backgroundColor:'#cfdefc', display:"flex",flexDirection:"col",flexWrap:"wrap",margin:"20px 20px 0px 30px",boxShadow:'3px 3px 5px 6px #787a79'}}>

            {lst.map((item)=>{
                return (
                    <div>
                    <div style={{border:"0px solid black",margin:"10px 0px 20px 10px", maxHeight:"400px",maxWidth:"330px",backgroundColor:"#white",overflow:"auto"}} > 
                        <div className="banner_post"  id="banner_post" style={{backgroundColor:'white'}}>
                            <img src={item.img_url} alt="" className="bannerImg" height="200px" width="300px"/>
                            <h2 className="fonting" style={{textAlign:'center'}}>{item.title}</h2>
                            <p className='fonting' style={{overflow:'scroll'}}>{item.body}</p>
                        </div>
                    </div>
                </div>
                )

            })}
        </div>

    )
}

export default BannerPosts