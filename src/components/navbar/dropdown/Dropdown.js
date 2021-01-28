import React,{ Component } from "react";
import { Link } from "react-router-dom";
import * as AiIcons from "react-icons/ai";
import './Dropdown.css';
import {DropdownData} from './DropdownData';

class Dropdown extends Component {

    render(){

        return (
                    <div className="nav">
                        <div className="left">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </div>
                        <div className="center">
                            <Link to="#" className="menu-bars">
                                <AiIcons.AiOutlineClose />
                            </Link>
                        </div>
                        <div className='right' >
                            {DropdownData.map((item,index) => {
                                return (
                                        <Link  key={index} to='#'>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                )
                            })}
                        </div>
                    </div>
        )
    }
}

export default Dropdown;