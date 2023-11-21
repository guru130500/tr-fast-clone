import React, { useState } from 'react'
import './Products.css'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
const Products = () => {
    const navigate=useNavigate()
    const[data]=useState([
        {   images:'https://trfastenings.blob.core.windows.net/menu/3e246016ad7f4ec190c3eecc07e2ed18.jpg',
            head:'Screws and Bolts',
            para:['Machine Screws','Screws for Plastic','Hexagon Screws and Bolts','Hexagon Socket Screws','Set Screws','See the full range']
        },
        {
            images:'https://trfastenings.blob.core.windows.net/menu/3644db77562842bfa1a5b8230b62512a.jpg',
            head:'Nuts',
            para:['Standard Hexagon','Standard Flange','Nylon Insert','All Metal Self Locking','Weld','See the full range']
        },
        {
            images:'https://trfastenings.blob.core.windows.net/menu/b1524fa1188e4b6ebea1360bdf36f928.jpg',
            head:'Washers,Circlips,Rings,Seals,O-rings',
            para:['Washers  ' , 'O-Rings' , 'Bonded Seals' ,'Circlips' ,'Rings']
        },
        {
            images:'https://trfastenings.blob.core.windows.net/menu/a6398c530f1243d4886d07258199acbb.jpg',
            head:'Fastener for Sheet Metal',
            para:['Self Clinch Fasteners',
           'Hank® Rivet Bushes',
            'Blind Rivet Nuts',
            'Blind Rivets',
            'Weld Nuts',
            'See the full range']
        },
        {
            images:'https://trfastenings.blob.core.windows.net/menu/90ff2b0c93bf407c8327ba47626e0c75.jpg',
            head:'Fastener for Plastic',
            para:['Screws for Plastic',
                'Inserts for Plastic',
                'Compression Limiters']
        },
        {
            images:'https://trfastenings.blob.core.windows.net/menu/87fdbdb3cb8944c98d89c37e24c77afc.jpg',
            head:'Enclosure Hardware',
            para:['Locking Systems',
                'Locks',
                'Lock Components',
                'Clamps and Terminals',
                'Gaskets',
                'See the full range']
        },
        {
            images:'https://trfastenings.blob.core.windows.net/menu/00d6dac4e8c6439cba18f9ca29434ab7.jpg',
            head:'Plastic Hardware',
            para:['Circuit Board Hardware',
                'Cable Management',
                'Rivets and Panel Fasteners',
                'Machine Screws',
                'Nuts',
                'See the full range']
        },
        {
            images:'https://trfastenings.blob.core.windows.net/menu/977cce438bc548e6a6f3de9443e4844b.jpg',
            head:'Cable Glands',
            para:['Hummel® Cable Glands and Accessories',
                'Generic Cable Glands and Accessories']
        },
        {
            images:'https://trfastenings.blob.core.windows.net/menu/12aa0f5128714f97bbedd9ab3fd68775.jpg',
            head:'Security Fasteners',
            para:['Machine Screws',
                'Self Tapping Screws',
                'Wood Screws',
                'Self Drilling Screws',
                'Nuts',
                'See the full range']
        },
        {
            images:'https://trfastenings.blob.core.windows.net/menu/d20ad9b1a2ba4532a3730fced06f576d.jpg',
            head:'Spacers and Pillars',
            para:['Threaded Spacers',
                'Threaded Pillars',
                'Through Spacers']
        },
        {
            images:'https://trfastenings.blob.core.windows.net/menu/ad50d358e028414e83b52166a3c1ae72.jpg',
            head:'Tooling and Driver Bits',
            para:['Standard Drivers',
                'Security Drivers']
        },
        {
            images:'https://trfastenings.blob.core.windows.net/menu/b2fdcf05fb244729813093f9734bce43.jpg',
            head:'Other Hardware',
            para:['Hose Clips and Clamps',
                'Medical Hardware',
                'Pins and Keys',
                'Swivel Braked Castors',
                'Swivel Castors',
                'See the full range']
        }
       
    ])
  return (
    <div>
        <Navbar/>
        <div className='Product-nav'>
            <div className='Product-nav-left'>
               <input type='text' placeholder='Search For Products'></input>
               <div><SearchIcon/></div>
            </div>
            <div className='Product-nav-right'>
               <div><span>Catalogue</span><span><ArrowForwardIosIcon style={{fontSize:'11px',color:'grey'}}/></span></div>
               <div><span>Company Literature</span><span><ArrowForwardIosIcon style={{fontSize:'11px',color:'grey'}}/></span></div>
               <div><span>Knowledge Base</span><span><ArrowForwardIosIcon style={{fontSize:'11px',color:'grey'}}/></span></div>
               <div><span>Product News</span><span><ArrowForwardIosIcon style={{fontSize:'11px',color:'grey'}}/></span></div>   
            </div>
        </div>

        <div className='product-div2'>
          <p><span onClick={()=>navigate('/')}>Home  </span><ArrowForwardIosIcon style={{fontSize:'12px',color:'#02b8f5'}}/><span>  Products</span></p>
        </div>
        <div className='Products-main-div'>
            {
                data && data.map((e)=>{
                    return(
                        <div className='Products-inner-div'>
                             <img src={e.images} alt=''></img>
                             <h3>{e.head}</h3>
                             {
                                e.para.map((k)=>{
                                    return(
                                        <p>{k}</p>
                                    )
                                })
                             }
                        </div>
                    )
                })
            }
       
        </div>
        <Footer/>
    </div>
  )
}

export default Products