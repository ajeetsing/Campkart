import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { customrig } from '../actions/userActions';


function CustomRigScreen() {
    const [cpu, setName] = useState('');
    const [screen, setEmail] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();


    }
    return <div className='form'>
        <form onSubmit={submitHandler}>
            <ul className='form-container'>
                <li>
                    <h2>
                        Create Your Customize CPU
                    </h2>
                </li>

                <li>
                    <label htmlFor="cpu">
                        CPU
          </label>
                    <select name="cpu" id="cpu" onChange={(e) => setName(e.target.value)}>
                        <option value="cpuone">cpuone</option>
                        <option value="cputwo">cputwo</option>
                        <option value="cputhree">cputhree</option>
                        <option value="cpufour">cpufour</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="screen">
                        PROCESSER
          </label>
                    <select name="screen" id="screen" onChange={(e) => setName(e.target.value)}>
                        <option value="screenone">screenone</option>
                        <option value="screentwo">screentwo</option>
                        <option value="screenthree">screenthree</option>
                        <option value="screenfour">screenfour</option>
                    </select>

                </li>
                <li>
                    <label htmlFor="cpu">
                        RAM
          </label>
                    <select name="cpu" id="cpu" onChange={(e) => setName(e.target.value)}>
                        <option value="cpuone">cpuone</option>
                        <option value="cputwo">cputwo</option>
                        <option value="cputhree">cputhree</option>
                        <option value="cpufour">cpufour</option>
                    </select>
                </li>
                <li>
                    <label htmlFor="cpu">
                        HARDDISK
          </label>
                    <select name="cpu" id="cpu" onChange={(e) => setName(e.target.value)}>
                        <option value="cpuone">cpuone</option>
                        <option value="cputwo">cputwo</option>
                        <option value="cputhree">cputhree</option>
                        <option value="cpufour">cpufour</option>
                    </select>
                </li>
                <li>
                    <button type="submit" className="button primary">submit</button>
                </li>



            </ul>
        </form>
    </div>
}

export default CustomRigScreen;