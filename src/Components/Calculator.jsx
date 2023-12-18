import React, { useState } from "react";
import "./Calculator.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
function Calculator() {

  const [amount,setAmount] = useState(0)
  const [discount,setDiscount] = useState(0)

  const [pay,setPay] = useState(0)
  const [price,setPrice] = useState(0)

  console.log(amount,discount);

  const calculate = (e) =>{
    const payableAmount = amount - (amount*discount)/100
    console.log(payableAmount)
    setPay(payableAmount)
    const discountAmount = (discount*amount)/100
    console.log(discountAmount);
    setPrice(discountAmount);
  }

  const reset = (e) =>{
    setAmount(0)
    setDiscount(0)
    setPay(0)
    setPrice(0)

  }


  return (
    <div className="main">
      <div className="row">
        <div className="col-6">
          <h2 className="text-center m-4 text-fade">Discount Calculator</h2>
          <p>
            A discount calculator is a utility tool that shows you the price of
            goods and services after a discount and also the amount you save.
            The discount may be a fixed amount off or a percentage discount. The
            discount calculator consists of a formula box, where you enter the
            price before the discount, the discount as a percentage or an
            amount. The discount calculator shows you the price after the
            discount and the amount you have saved.
          </p>
        </div>
        <div className="col-6">
          <div className="form p-5">
            <div className="input">
              <TextField id="outlined-basic" value={amount || ""} onChange={(e)=>setAmount(e.target.value)} className="bg-light" label="Amount" variant="standard" /> <br />
              <TextField id="filled-basic" value={discount || ""} onChange={(e)=>setDiscount(e.target.value)}  className="bg-light" label="Discount %" variant="standard" /> <br />
            </div>
            <div className="button text-center">
              <Button variant="contained" className="btn mt-2" onClick={(e)=>calculate(e)}>CALCULATE</Button>
              <Button variant="contained" className=" btn mt-2 ms-5" onClick={(e) => reset(e)}>RESET</Button>

            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="result">
            <h3 className="py-3">You Saved &#8377;{price} </h3>
            <h3 className="py-5">Pay only &#8377;{pay} </h3>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default Calculator;
