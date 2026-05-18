interface TempResultsProps {
  temp: string;
  fahrenheit: string;
}

const TempResults = ({temp, fahrenheit}: TempResultsProps) => {

  return (
    <>
      <h3 className="mt-2">
        The temperature in Celsius is {temp || "___"} and in Fahrenheit is {fahrenheit || "___"}
      </h3>
    </>
  );
};
export default TempResults;