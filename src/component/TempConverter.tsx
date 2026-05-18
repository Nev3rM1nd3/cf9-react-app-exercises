import {useState} from "react";
// import Thermometer from "../assets/Thermometer.svg";
import ThermometerIcon from "./ThermometerIcon.tsx";
import TempResults from "./TempResults.tsx";


const TempConverter = () => {
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
      <div className="flex items-center justify-center">

        <div className="border rounded-xl p-8 w-fit shadow-sm text-center mt-25 ">

          <div className="flex items-center justify-center gap-2">
            <h1  className="text-xl">Temperature Calculator</h1>
            <ThermometerIcon temp={parseFloat(temp)} />
          </div>

          <TempResults temp={temp} fahrenheit={toFahrenheit(temp)} />

          <div className="text-center mt-4">
            <input
              type="number"
              className="border px-4 py-2"
              placeholder="Enter Temperature"
              value={temp}
              onChange={tempChange}
            />
          </div>

        </div>

      </div>

    </>
  )
}
export default TempConverter;