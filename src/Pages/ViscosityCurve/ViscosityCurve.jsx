import "./ViscosityCurve.scss";
import { useState } from "react";

function ViscosityCurve() {
  const [intensificationRatio, setIntensificationRatio] = useState(0);

  const handleIntensificationRatioChange = (event) => {
    setIntensificationRatio(event.target.value);
  };

  return (
    <div className="viscositycurve">
      <h2 className="study-title">Viscosity Curve</h2>
      <div>
        <form className='viscositycurve__study'>
          <div>
            <label className='viscositycurve__study-label' >Intensification Ratio</label>
            <input
              className='viscositycurve__study-input'
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
