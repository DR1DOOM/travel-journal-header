import Navbar from './comp/NavBar'
import Content from './comp/content'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Content 
        img="japan.jpg"
        location="Japan"
        googleMapsUrl="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        title="Mount Fuji"
        startDate="12 Jan, 2021"
        endDate="24 Jan, 2021"
        description="Mount Fuji is Japan's highest peak, standing at 3,776 meters (12,389 feet) tall."
      />
    </>
  )
}

export default App

    

