import { useState } from "react";

import Button from "components/Button";
import { goals } from "types/goals";

import "./style.scss";

interface IProps {
  handleSaveGoals: (goals: goals) => void;
}

const PredictionsForm = ({ handleSaveGoals }: IProps) => {
  const [goals, setGoals] = useState<{
    localGoals: string;
    visitorGoals: string;
  }>({
    localGoals: "0",
    visitorGoals: "0",
  });

  const handleLocalGoalClick = (value: string) => {
    setGoals((prevGoals) => ({
      ...prevGoals,
      localGoals: value,
    }));
  };

  const handleVisitorGoalClick = (value: string) => {
    setGoals((prevGoals) => ({
      ...prevGoals,
      visitorGoals: value,
    }));
  };

  const handleSubmit = () => {
    handleSaveGoals(goals);
  };

  return (
    <div onSubmit={handleSubmit} className="PredictionsForm">
      <div className="PredictionsForm__content">
        <div className="PredictionsForm__goals">
          {["0", "1", "2", "3", "+"].map((value) => (
            <div
              key={value}
              onClick={() => handleLocalGoalClick(value)}
              className={`goalsButton ${
                goals.localGoals === value ? "active" : ""
              } `}
            >
              {value}
            </div>
          ))}
        </div>
        <div className="PredictionsForm__goals">
          {["0", "1", "2", "3", "+"].map((value) => (
            <div
              key={value}
              onClick={() => handleVisitorGoalClick(value)}
              className={`goalsButton ${
                goals.visitorGoals === value ? "active" : ""
              } `}
            >
              {value}
            </div>
          ))}
        </div>
      </div>

      <Button text="Guardar" onClick={() => handleSubmit()} />
    </div>
  );
};

export default PredictionsForm;