// import React from 'react'
// import { useDispatch } from 'react-redux';
// // import { bindActionCreators } from 'redux';
// import { actionCreators } from './State/index';

// const Shop = () => {
//     const dispatch = useDispatch();
//   return (
//     <div>
//         <h2>Deposit/Withdraw Money</h2>
//        <button className='btn btn-primary mx-2' onClick={()=>dispatch(actionCreators.WithdrawMoney(100))}>-</button>
//        Update Balance
//        <button className='btn btn-primary mx-2' onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button>
//     </div>
//   )
// }

// export default Shop




// // use bindactioncreators

// import React from 'react'
// import { useDispatch } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { actionCreators } from './State/index';

// const Shop = () => {
//     const dispatch = useDispatch();
//     const actions = bindActionCreators(actionCreators,dispatch);
//   return (
//     <div>
//         <h2>Deposit/Withdraw Money</h2>
//        {/* <button className='btn btn-primary mx-2' onClick={()=>dispatch(actionCreators.WithdrawMoney(100))}>-</button> */}
//        <button className='btn btn-primary mx-2' onClick={()=>{actions.WithdrawMoney(100)}}>-</button>
//        Update Balance
//        {/* <button className='btn btn-primary mx-2' onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button> */}
//        <button className='btn btn-primary mx-2' onClick={()=>{actions.depositMoney(100)}}>+</button>
//     </div>
//   )
// }

// export default Shop



// some changes

import React from 'react'
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './State/index';

const Shop = () => {
    const dispatch = useDispatch();
    const {WithdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch);
  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
       {/* <button className='btn btn-primary mx-2' onClick={()=>dispatch(actionCreators.WithdrawMoney(100))}>-</button> */}
       <button className='btn btn-primary mx-2' onClick={()=>{WithdrawMoney(100)}}>-</button>
       Update Balance
       {/* <button className='btn btn-primary mx-2' onClick={()=>dispatch(actionCreators.depositMoney(100))}>+</button> */}
       <button className='btn btn-primary mx-2' onClick={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop

