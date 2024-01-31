import clear_icon from './Assets/clear.png'
import humidity_icon from './Assets/humidity.png'
import wind_icon from './Assets/wind.png'

export default function App() {
 
  let API_KEY='50db7cdfbcee3e6f243015eb7ac6ed93'
  const search=async()=>{
    const element=document.getElementsByClassName('cityInput')
    if(element[0].value===''){
      return 0;
    }
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${API_KEY}`
    let response= await fetch(url)
    let data= await response.json()

    const location=document.getElementsByClassName('location')
    const temperature=document.getElementsByClassName('temp')
    const humidity=document.getElementsByClassName('humidity')
    const wind=document.getElementsByClassName('wind')

    location[0].innerHTML=data.name
    temperature[0].innerHTML=data.main.temp+'°C'
    humidity[0].innerHTML=data.main.humidity + '%'
    wind[0].innerHTML=data.wind.speed + 'km/h'  }
  
  return (
   <div className="flex flex-col justify-center items-center h-screen w-full bg-red-600 ">
    <div className="bg-indigo-500 h-[500px] w-[300px] rounded-md relative">
      <div className="px-2 py-1 flex items-center justify-between absolute left-4 ">
        <input type="text" placeholder="enter a city name" className={`rounded-md py-1 px-2 'cityInput'`}/>
        <button onClick={()=>{search()}} className="bg-black rounded-full p-1 text-white font-bold">Search</button>
      </div>
      <div className="flex  flex-col items-center justify-center  mt-[80px] w-full h-auto ">
        <img src={clear_icon} alt=""/>
        <p className={`font-bold tracking-tight text-white text-4xl 'location'`}>London</p>
        <p className={`font-bold tracking-tight text-white text-2xl 'temp'`}>24 &deg; C</p>
      </div>
     <div className='flex px-3 items-center justify-between mt-5'>
     
     
     <div className='flex flex-col  p-2 '>
       <div className='flex items-center p-1'>
        <h2 className='text-white'>Humidity</h2>
        <img src={humidity_icon} alt='' className='w-[20px] h-[20px] pl-1'/>
        
       </div>
       <div className={`p-1 text-white font-bold tracking-wide 'humidity'`}>
          50%
        </div>
      </div>

      <div className='flex flex-col  p-2'>
       <div className='flex items-center p-1'>
        <h2 className='text-white'>Wind speed</h2>
        <img src={wind_icon} alt='' className='w-[20px] h-[20px] pl-1'/>
        
       </div>
       <div className={`p-1 text-white font-bold tracking-wide 'wind'`}>
          10 km/h
        </div>
      </div>
     </div>
    </div>
   </div>
  )
}