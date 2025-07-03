import "./ToggleSwitch.css"
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch({onToggleSwitch}){
    const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
    
    return <label className="toggle-switch">
        <input 
            type="checkbox" 
            className="toggle-switch__checkbox" 
            onClick={() => onToggleSwitch(currentTemperatureUnit)}
        />
        <span className="toggle-switch__circle"></span>
        <span className="toggle-switch__text toggle-switch__text_F">F</span>
        <span className="toggle-switch__text toggle-switch__text_C">C</span>
    </label>
}

export default ToggleSwitch;    