import './App.css' 

function App() {

  const featureListData = [
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrxSxiKwVwdzDXOxiPSriNmP8n-ghFfsDTDvwy7-Q--Q&s",
      head:"Fully Responsive",
      para:"This theme will look great on any device, no matter the size!"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQztDpIuz9SYO1RryE2rj12LFgMoKaIqTfleA&s",
      head:"Bootstrap 5 Ready",
      para:"Featuring the latest build of the new Bootstrap 5 framework!"
    },
    {
      img:"https://t3.ftcdn.net/jpg/05/09/97/44/360_F_509974448_fd3H8fgS9fjoaMY2bsA65zA0nVSBmFyJ.jpg",
      head:"Easy to Use",
      para:"Ready to use with your own content, or customize the source files!"
    }
  ]

  const twopartData = [
    {
      img:"https://cdn.pixabay.com/photo/2024/03/13/19/06/ai-generated-8631634_1280.jpg",
      head:"Fully Responsive Design",
      para:"When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
      Isleft:true
    },
    {
      img:"https://cdn.pixabay.com/photo/2024/04/24/06/59/ai-generated-8716786_640.jpg",
      head:"Updated For Bootstrap 5",
      para:"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
      Isleft:false
    },
    {
      img:"https://cdn.pixabay.com/photo/2024/04/04/03/08/ai-generated-8674235_1280.png",
      head:"Easy to Use & Customize",
      para:"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
      Isleft:true
     }
  ]
  const featureListData1= [
    {
      img:"https://t3.ftcdn.net/jpg/06/36/69/86/360_F_636698674_DroChEj5eWmZiaZOSDMnj8hcDqqw74Fp.jpg",
      head:"Margaret E.",
      para:"This is fantastic! Thanks so much guys!"
    },
    {
      img:"https://images.pexels.com/photos/2955376/pexels-photo-2955376.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      head:"Fred S.",
      para:"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
    },
    {
      img:"https://t3.ftcdn.net/jpg/05/09/97/44/360_F_509974448_fd3H8fgS9fjoaMY2bsA65zA0nVSBmFyJ.jpg",
      head:"Sarah W.",
      para:"Thanks so much for making these free resources available to us"
    }
  ]

  return (
    <>
      < NavBar/>
      < ImagePart/>
      < FeatureListType1 props={featureListData}/>
      < FeatureListType2 props={twopartData}/>
      < FeatureListType1 props={featureListData}/>
      < ImagePart1/>
      < Lastblock/>

    </>
  )
}

export default App


function NavBar(){
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary space">
      <div className="container-fluid">
        <a className="navbar-brand right" >Start Bootstrap</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <button type="button" className="btn btn-primary left">SignUp</button>
      </div>
    </nav>
  )
}

function ImagePart({props}){
  return(
    <>
     <div className='Totalpart'>
     <img src="https://images.pexels.com/photos/414331/pexels-photo-414331.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" className='Imagepart'></img>
        <div className='parapart'>
          <p className='fontsize'>Generate more leads</p>
          <p className='fontsize'>with a professional</p>
          <p className='fontsize'>landing page!</p>
          <div className='emailsetup'>
            <input type='email' className='email' placeholder="  Enter u r email"></input>
            <button type="button" className="btn btn-primary left">SignUp</button>
          </div>
        </div>
     </div>
    </>
  )
}

function ImagePart1({props}){
  return(
    <>
     <div className='Totalpart'>
     <img src="https://images.pexels.com/photos/414331/pexels-photo-414331.jpeg?auto=compress&cs=tinysrgb&w=600" alt="#" className='Imagepart1'></img>
        <div className='parapart'>
          <p className='fontsize'>Ready to get started? Sign up now!</p>
         <div className='emailsetup'>
            <input type='email' className='email' placeholder="  Enter u r email"></input>
            <button type="button" className="btn btn-primary left">SignUp</button>
          </div>
        </div>
     </div>
    </>
  )
}

function FeatureListType1({props}){
  return(
    <>
      <div className='cardview'>
          {props.map((ele,ind)=>{
            return(
            <div className="card1" key={ind}>
              <img className="imagefeature"src={ele.img}></img>
              <h2>{ele.head}</h2>
              <p>{ele.para}</p>
            </div>)
          })}
      </div>
    </>
  )
}

function FeatureListType2({props}){
  return(
    <>
      {props.map((ele,ind)=>{
        return(
           <div className='twopart' key={ind}>
              {ele.Isleft? <>
                <div className='textpart'>
                 <h2>{ele.head}</h2>
                 <p>{ele.para} </p>
               </div>
               <div className='imagepart'>
                 <img src={ele.img} alt={ele.head} className='twopartimage'></img>
               </div> 
              </> : <>
              
              <div className='imagepart'>
               <img src={ele.img} alt={ele.head} className='twopartimage'></img>
              </div>
              <div className='textpart'>
               <h2>{ele.head}</h2>
               <p>{ele.para} </p>
              </div>
              </>} 
          </div>)
       })}
    </>
  )
}

function Lastblock(){
  return(
    <>
    <div className='maindiv'>
      <div className='links'>
        <span className='aaa'><a src="#"><u>About</u></a></span>
        <span className='aaa'><a src="#"><u>Contact</u></a></span>
        <span className='aaa'><a src="#"><u>Term of Use</u></a></span>
        <span className='aaa'><a src="#"><u>Privacy Policy</u></a></span>
      </div>
      <div>
        <p>© Your Website 2023. All Rights Reserved.</p>
      </div>
    </div>
    </>
  )
}



