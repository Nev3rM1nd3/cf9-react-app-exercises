import {useState} from "react";
import Thermometer from "../assets/Thermometer.svg";


const TempInput = () => {
  const [temp, setTemp] = useState("");

  const tempChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTemp(event.target.value);
  }

  const toFahrenheit = (celsius: string): string => {
    const num = parseFloat(celsius);
    if (!num && num !== 0) return "___";
    return ((num * 9) / 5 + 32).toFixed(2);
  }

  return (
    <>
      <div className="text-center mt-40 ">

        <div className="flex items-center justify-center gap-2">
          <h1  className="text-xl">Temperature Calculator</h1>
          <img src={Thermometer} alt="icon" className="w-5 h-5" />
        </div>

        <h3 className="mt-2">The temperature in Celsius is {temp || "___"} and in Fahrenheit is {toFahrenheit(temp) || "___"}</h3>

        <div className="text-center mt-4">
          <input
            type="text"
            className="border px-4 py-2"
            placeholder="Enter Temperature"
            value={temp}
            onChange={tempChange}
          />
        </div>

      </div>
    </>
  )
}
export default TempInput;