import React from 'react';
import "../App.scss"

function Menu() {
    const handlebtn = () => {
        console.log("kkkkkkkkk")
    }
    return (
        <div>
            <nav>
                <ul>
                    <li><a href="#">Menu Item 1</a>
                        <ul>
                            <li><a href="#">Submenu Item 1</a>
                                <ul>
                                    <li><a href="#">Sub-submenu Item 1</a></li>
                                    <li><a href="#">Sub-submenu Item 2</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Submenu Item 2</a></li>
                            <li><a href="#">Submenu Item 3</a>
                                <ul>
                                    <li><a href="#">Sub-submenu Item 3</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#">Menu Item 2</a>
                        <ul>
                            <li><a href="#">Submenu Item 4</a></li>
                            <li><a href="#">Submenu Item 5</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Menu Item 3</a>
                        <ul>
                            <li><a href="#">Submenu Item 1</a>
                                <ul>
                                    <li><a href="#">Sub-submenu Item 1</a></li>
                                    <li><a href="#">Sub-submenu Item 2</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Submenu Item 2</a></li>
                            <li><a href="#">Submenu Item 3</a>
                                <ul>
                                    <li><a href="#">Sub-submenu Item 3</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Menu;