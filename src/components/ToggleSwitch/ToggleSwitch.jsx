import "./ToggleSwitch.css"
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function ToggleSwitch({onToggleSwitch}){
    return <label className="toggle-switch">
        <input type="checkbox" className="toggle-switch__checkbox" onClick={() => onToggleSwitch(CurrentTemperatureUnitContext)}/>
        <span className="toggle-switch__circle"></span>
        <span className="toggle-switch__text toggle-switch__text_F">F</span>
        <span className="toggle-switch__text toggle-switch__text_C">C</span>
    </label>
    
}

export default ToggleSwitch;