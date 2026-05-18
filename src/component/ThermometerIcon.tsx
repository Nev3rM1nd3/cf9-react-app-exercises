type ThermometerIconProps = {
  temp: number;
};

const ThermometerIcon = ({temp}: ThermometerIconProps) => {
  const getColor = () => {
    if ((!temp && temp !== 0)) return "#000000";
    if (temp <= 10) return "#87cefa";
    if (temp >= 30) return "#ff4500";
    return "#2e8b57";
  }

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg"
           width="37" height="37"
           viewBox="0 0 24 24"
           fill="none"
           stroke={getColor()}
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round">
        <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
      </svg>
    </>
  )
}
export default ThermometerIcon