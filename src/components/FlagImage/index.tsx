import { getCountryCode } from "helpers/countryCodes";

import "./style.scss";

interface IProps {
  country: string;
}

const FlagImage = ({ country }: IProps) => {
  const countryCode = getCountryCode(country);

  return (
    <div className="FlagImage">
      <img src={`https://flagcdn.com/w160/${countryCode}.png`} alt={country} />
    </div>
  );
};

export default FlagImage;
