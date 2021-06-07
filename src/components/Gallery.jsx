import React, { Component,useEffect,useState } from 'react'
import MDEditor from '@uiw/react-md-editor';
import Showpost from "./Showpost"

export default function Gallery() {
    const [pics, setpics] = useState([])
    var url="http://127.0.0.1:8000/gallery/"

    useEffect(()=>{
        fetch(url).then((resp)=>{
            resp.json().then((data)=>{
                setpics(data)
            })

        }).catch((err)=>{
            console.log("err in /posts",err)
            alert("Error while feching posts from backend serever")
        })

    },[])
    
    
    return (
       <div style={{backgroundColor:'rgb(245,245,245'}}>
        <div style={{display:"flex",flexDirection:"col",flexWrap:"wrap"}}>

            {pics.map((pic)=>{
                console.log(pic.img_url)
                var location=pic.img_url
                const imageClick = (title) => {
                    console.log({title});
                    window.open(title)
                } 
            
                return (
                    <div style={{backgroundColor:'rgb(245,245,245'}}>
                    <div style={{border:"0px solid black",margin:"20px 0px 0px 20px", maxHeight:"255px",maxWidth:"330px",backgroundColor:"white",overflow:"auto"}} > 
                        <div className="banner_post"  id="banner_post" >
                            <img style={{paddingLeft:'10px',paddingRight:'10px'}}src={pic.img_url} onClick={() => imageClick(location)}alt="" className="bannerImg" height="200px" width="300px"/>
                            <h4 style={{textAlign:'center'}}>{pic.title}</h4>
                        </div>
                    </div>
                </div>
                )

            })}
        </div>
        </div>
    //     <div style={{display:"flex",flexDirection:"col",flexWrap:"wrap"}}>

    //     {pics.map((pic)=>{
    //     const loc='http://127.0.0.1:8000';
    //     var  image=`${pic}`
    //     var title=`${loc}${image}`
    //     const imageClick = (title) => {
    //         console.log({title});
    //         window.open(title)
    //       } 
    
    // return <>
    //     <div style={{backgroundColor:'#afcadb'}}>
    //                     <div style={{border:"0px solid black",margin:"20px 5px 20px 20px", maxHeight:"400px",maxWidth:"330px",backgroundColor:"white",overflow:"auto"}} > 
    //                         <div className="banner_post"  id="banner_post" >
    //                             <img style={{paddingLeft:'15px'}}src={title} alt="Photo"  onClick={() => imageClick(title)}className="bannerImg" height="200px" width="300px"/>
                        
    //                         </div>
    //                     </div>
    //                 </div>
            
            
    //         </>
    //     })}
    //  </div>  
    )
}