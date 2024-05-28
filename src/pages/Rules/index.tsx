import PageWithTopbar from "components/PageWithTopbar";

import "./style.scss";

const Rules = () => {
  return (
    <PageWithTopbar className="Rules" title="Reglas del Torneo">
      <div className="point-rules">
        <ul>
          <li>Por acertar el resultado 1X2 se suma 1 punto.</li>
          <li>Por acertar el resultado exacto se suman 3 puntos.</li>
        </ul>
      </div>

      <div className="deadline">
        <p>El miércoles 12 de junio a las 23:59 se cierran las predicciones.</p>
      </div>
    </PageWithTopbar>
  );
};

export default Rules;
