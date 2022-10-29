import React from 'react'
import PropTypes from "prop-types";

const ToggleSwitch = (props:any) => {
    const {checked, onChange } = props; 
    return (
        <div className="pricing-switcher font-bold text-lg lg:text-xl" >
            <div className="fieldset mnt-ac">
                <input type="radio" name="duration-1" value="monthly" id="onId"
                        onClick={(e)=> onChange('on')}
                 />
                <label htmlFor="onId" id ="rsmnt" className="rs-mnt ">Online  </label>
                <input type="radio" name="duration-1" value="yearly" id="offId"
                    onClick={(e)=> onChange('off')}
                />
                <label htmlFor="offId" id ="rsyrs" className="rs-yrs">Offline  </label>
                <span className="switch"></span>
            </div>
        </div>
    );
}


export default ToggleSwitch