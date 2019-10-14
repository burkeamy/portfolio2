import React from "react";
import Col from '../Col';
import Row from '../Row';
//import AboutAmy from '../AboutAmy';


//menu or site navigation
function Menu(props) {
    /*const handleClick1 = () => {
        return (
            <AboutAmy/>        
        )}*/

    return (
        <Row>
        <Col size = 'md-4'>
           <div className = 'menu'>
               <button onClick= {() => props.handleClick1(props.id)}>About Amy</button>
               <button onClick={() => props.handleClick2(props.id)}>Portfolio</button>
           </div>
        </Col>
        </Row>
    )
}

export default Menu;