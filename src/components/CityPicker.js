import React, { useState } from 'react'

const CityPicker = () => {

    const [state, updateState] = useState('Amsterdam')
    const options = ['Amsterdam', 'Berlin', 'London']

    return (
        <div className='choose-city'>
            <label>
                Choose the city to connect:
                <select
                    id='city'
                    value={state}
                    onChange={e => updateState(e.target.value)}
                >
                <option />

                {options.map(item => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
                </select>

            </label>
        </div>
    )

}


export default CityPicker;
