import "./ViscosityCurve.scss";
import { useState } from "react";

function ViscosityCurve() {
  const [intensificationRatio, setIntensificationRatio] = useState(0);

  const handleIntensificationRatioChange = (event) => {
    setIntensificationRatio(event.target.value);
  };

  return (
    <div className="Viscositycurve">
      <h2 className="study-title">Viscosity Curve</h2>
      <div>
        <form>
          <div>
            <label>Intensification Ratio</label>
            <input
              type="text"
              value={intensificationRatio}
              onChange={handleIntensificationRatioChange}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default ViscosityCurve;
