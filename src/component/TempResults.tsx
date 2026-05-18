interface TempResultsProps {
  temp: string;
  fahrenheit: string;
}

const TempResults = ({temp, fahrenheit}: TempResultsProps) => {

  return (
    <>
      <h3 className="mt-2">
        {temp || "___"} degrees Celsius are {fahrenheit || "___"} in Fahrenheit
      </h3>
    </>
  );
};
export default TempResults;