import AnimatedThermometer from "../assets/AnimatedThermometer.jpg"

const Header = () => {

  return (
    <>
      <header className="bg-temp-cyan fixed w-full">
        <div className="flex items-center gap-4 px-6 py-2">
          <img className="h-24 w-auto" src={AnimatedThermometer} alt="Thermometer Logo"/>
          <div>
            <h1 className="text-6xl">Temperature Calculator</h1>
            <h3 className="text-2xl">Temperature Conversion - Celsius To Fahrenheit</h3>
          </div>
        </div>
      </header>
    </>
  )
}
export default Header;