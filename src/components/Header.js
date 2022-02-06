import React from 'react'
import styled from 'styled-components'
// import MenuIcon from '@mui/icons-material/Menu';
// import MenuOpenIcon from '@mui/icons-material/MenuOpen';
// import CloseIcon from '@material-ui/icons-material/Close';
import {selectCars} from '../features/car/Carslice';
import {useSelector} from 'react-redux';


function Header() {
  const cars=useSelector(selectCars);
  console.log(cars);
  return (
    <Container>
     <a>
<img src="/images/logo.svg" alt=""  />
     </a>

     <Menu>
     {cars && cars.map((car,index)=>(
      <a key={index} href="#">{car}</a>
     ))}

     </Menu>
     <RightMenu>

<a href="#">Shop</a>

<a href="#">Account</a>
<a href="#">Menu</a>




     </RightMenu>
     {/* <BurgerNav > */}
     {/* <CustomClose /> */}
{/* <li><a href="#">Existing Inventory</a></li>
<li><a href="#">Used Inventory</a></li>
<li><a href="#">Trade-In</a></li>
<li><a href="#">Test Drive</a></li>
<li><a href="#">Cybertruck</a></li>
<li><a href="#">Roadster</a></li>
<li><a href="#">Semi</a></li>
<li><a href="#">Charging</a></li>
<li><a href="#">Powerwall</a></li>
<li><a href="#">Commercial Energy</a></li>
<li><a href="#">Utilities</a></li>
<li><a href="#">Find Us</a></li>
<li><a href="#">Support</a></li>
<li><a href="#">Investor Relations</a></li> */}
     {/* </BurgerNav> */}


    </Container>
  )
}

export default Header
const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
top:0;
left:0;
right:0;
z-index:1;
`
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
font-family: var(--tds-font-family--combined);
a{
  font-weight:600;
  padding:0 15px;
  margin-left:15px;
  margin-right:15px;
  flex-wrap:nowrap;
}
@media(max-width:768px){
    display:none;
}
`
const RightMenu=styled.div`
a{
  font-weight:600;
 margin-right:10px;
 padding:0 5px;
  flex-wrap:nowrap;
}

`
// const BurgerNav=styled.div`
// position:fixed;
// top:0;
// bottom:0;
// right:0;
// background:white;
// width:300px;
// z-index:16;
// list-style:none;
// padding:20px;
// display:flex;
// text-align:start;
// flex-direction:column;
// li{
//   padding:15px 0;
//   border-bottom:1px solid rgba(0,0,0,.2);
// }
// a{
//   font-weight:600;
// }
// `
// const CustomClose=styled(CloseIcon)`

// `



