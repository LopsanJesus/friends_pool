import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import FlagImage from "components/FlagImage";
import Image from "components/Image";
import MatchCardBets from "components/MatchCardBets";

import { BetType, MatchType } from "types/types";

import DownArrowIcon from "assets/down-arrow.png";
import UpArrowIcon from "assets/up-arrow.png";

import flags from "config/flags";

import "./style.scss";

interface IProps {
  match: MatchType;
  bets: BetType[];
  openAtFirst?: boolean;
}

const MatchCard = ({ match, bets, openAtFirst }: IProps) => {
  const [isOpen, setIsOpen] = useState(openAtFirst);

  const { t } = useTranslation();

  const isToday = useMemo(() => {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const hours = String(currentDate.getHours()).padStart(2, "0");
    const minutes = String(currentDate.getMinutes()).padStart(2, "0");

    return `${day}.${month}. ${hours}:${minutes}` === match.datetime;
  }, [match.datetime]);

  return (
    <div
      className="MatchCard"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <div className="MatchCard__content">
        <div className="info">
          <div className="group">
            {t("matches.group", { group: match.group })}
          </div>
          <div className="date">{match.datetime}</div>
        </div>
        <div className="teams">
          <div className="home">
            <FlagImage country={match.localTeam} />
          </div>
          <div className="visitor">
            <FlagImage country={match.visitorTeam} />
          </div>
        </div>
        {isToday && (
          <div className="goals">
            <div className="home">{match.localScore}</div>
            <div className="visitor">{match.visitorScore}</div>
          </div>
        )}

        {flags.showMatchCardBets &&
          bets.length > 0 &&
          (!isOpen ? (
            <Image size="small" src={DownArrowIcon} alt="Down arrow icon" />
          ) : (
            <Image size="small" src={UpArrowIcon} alt="Up arrow icon" />
          ))}

        {flags.showMatchCardBets && isOpen && <MatchCardBets bets={bets} />}
      </div>
    </div>
  );
};

export default MatchCard;
