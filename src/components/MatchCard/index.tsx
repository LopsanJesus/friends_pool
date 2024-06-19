import { useState } from "react";
import { useTranslation } from "react-i18next";

import FlagImage from "components/FlagImage";
import Image from "components/Image";
import MatchCardBets from "components/MatchCardBets";

import { BetType, MatchType } from "types/types";

import DownArrowIcon from "assets/down-arrow.png";
import UpArrowIcon from "assets/up-arrow.png";

import flags from "config/flags";

import useDates from "hooks/useDates";

import "./style.scss";

interface IProps {
  match: MatchType;
  bets: BetType[];
  openAtFirst?: boolean;
}

const MatchCard = ({ match, bets, openAtFirst }: IProps) => {
  const [isOpen, setIsOpen] = useState(openAtFirst);

  const { t } = useTranslation();
  const { isToday, removeDay } = useDates();

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
          {match.isLive && match.liveMinute !== "undefined" && (
            <div className="minute">{match.liveMinute}'</div>
          )}
          {match.isLive ? (
            <div className="live">LIVE</div>
          ) : (
            <div className="date">
              {isToday(match.datetime)
                ? removeDay(match.datetime)
                : match.datetime}
            </div>
          )}
        </div>
        <div className="teams">
          <div className="home">
            <FlagImage country={match.localTeam} />
          </div>
          <div className="visitor">
            <FlagImage country={match.visitorTeam} />
          </div>
        </div>
        {match.localScore !== "-" && match.visitorScore !== "-" && (
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
