import Image from "components/Image";

import { getCountryCode } from "helpers/countryCodes";

import "./style.scss";

interface IProps {
  country: string;
}

const FlagImage = ({ country }: IProps) => {
  const countryCode = getCountryCode(country);

  return (
    <div className="FlagImage">
      <Image
        src={`https://flagcdn.com/w160/${countryCode}.png`}
        size="flag"
        alt={country}
      ></Image>
    </div>
  );
};

export default FlagImage;
