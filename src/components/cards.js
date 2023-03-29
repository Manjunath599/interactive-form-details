import React, { useState } from "react";
import Thankyou from "./thankyou";
import cardFront from "../images/bg-card-front.png"
import cardBack from "../images/bg-card-back.png"
import bgMobile from "../images/bg-main-mobile.png"
import logo from "../images/card-logo.svg"

export default function Cards() {
  const [nameInput, setNameInput] = useState('Jane Appleseed')
  const [numberInput, setNumberInput] = useState('0000 0000 0000 0000')
  const [monthInput, setMonthInput] = useState("00")
  const [yearInput, setYearInput] = useState("00")
  const [CVInput, setCVInput] = useState("000")
  const [alert, setAlert] = useState(false)
  const [alert2, setAlert2] = useState(false)
  const [alert3,setAlert3] = useState(false)
  const [complete, setComplete] = useState(false)
  const [error, setError] = useState(false)

  const nameChange = (e) => {
    const name = e.target.value
    setNameInput(name)
    if (isNaN(+name) === false) {
      setAlert3(true)
      setTimeout(() => {
        setAlert3(false)
      }, 2000);
    }

  }

  const numberChange = (e) => {
    let numbers = e.target.value
    const finalNumber = numbers.slice(0, 4) + " " + numbers.slice(4, 8) + " " +
      numbers.slice(8, 12) + " " + numbers.slice(12, 16)
    setNumberInput(finalNumber)
    if (!isNaN(+numbers) === false) {
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 2000);
    }

  }

  const monthChange = (e) => {
    const { value } = e.target
    setMonthInput(value)
    if (!isNaN(+value) === false) {
      setAlert2(true)
      setTimeout(() => {
        setAlert2(false)
      }, 2000);
    }
  }


  const yearChange = (e) => {
    const { value } = e.target
    setYearInput(value)
    if (!isNaN(+value) === false) {
      setAlert2(true)
      setTimeout(() => {
        setAlert2(false)
      }, 2000);
    }
  }

  const cvChange = (e) => {
    setCVInput(e.target.value)
    if (!isNaN(+e.target.value) === false) {
      setAlert2(true)
      setTimeout(() => {
        setAlert2(false)
      }, 2000);
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const name = document.forms["form"]["naming"].value
    const number = document.forms["form"]["number"].value
    const month = document.forms["form"]["month"].value
    const year = document.forms["form"]["year"].value
    const cv = document.forms["form"]["cv"].value
    if (name === "" || name === null ){
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000);
    }
    else if(number === "" || number === null){
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000);
    }
    else if(month === "" || month === null , cv === "" || cv === null){
      setError(true)
      setTimeout(() => {
        setError(false)
      }, 2000);
    }
   else if( year === "" || year === null ){
    setError(true)
    setTimeout(() => {
      setError(false)
    }, 2000);
   }
    else {
      setComplete(true);
    }
  }

  return (
    <section className="font-body lg:flex lg:items-center lg:justify-between">
      <div className="desktop relative bg-no-repeat bg-cover p-6 flex flex-col items-center
          lg:h-screen lg:w-1/4 lg:flex-col-reverse"
        style={{
          backgroundImage: `url(${bgMobile})`
        }}
      >
        <div className="bg-no-repeat bg-cover rounded-md h-44 w-80 lg:mb-40 lg:-mr-80"
          style={{
            backgroundImage: `url(${cardBack})`
          }}
        >
          <p className="ml-60 text-white pt-[4.5rem]">{CVInput}</p>
        </div>

        <div className="bg-no-repeat p-5 rounded-md h-44 w-80 absolute left-8 top-[8.5rem] sm:left-32 z-20"
          style={{
            backgroundImage: `url(${cardFront})`
          }}
        >
          <img src={logo} className="h-8 " alt="logo" />
          <p className="text-white text-2xl mt-14">{numberInput}</p>
          <span className="uppercase text-white text-[12px]">{nameInput}</span>
          <span className="text-white text-sm ml-28">{monthInput}/{yearInput}</span>
        </div>
      </div>

      {complete ? <Thankyou complete={complete} setComplete={setComplete} /> :
        <form name="form" className="mt-32 flex flex-col items-center lg:mr-80 lg:mb-28" onSubmit={handleSubmit}>
          <p className="uppercase mr-40">Cardholder Name</p>
          <input onChange={nameChange}
            name="naming"
            maxLength="17"
            className={`border-2 rounded-lg w-80 p-2 ${alert3 ? 'focus:border-red-700 border-4 focus:bg-red-100' : 'border-gray-400 border'}`}
            placeholder="e.g. Jane Appleseed" />
          {error && <p className="text-red-700 text-[12px] mr-52">can't be blank</p>}
          {alert3 && <p className="text-red-700 text-[12px] mr-40">wrong format,letters only</p>}
          <p className="uppercase mr-48 mt-4">Card Number</p>
          <input onChange={numberChange}
            name="number"
            className={`border-2 rounded-lg w-80 p-2 ${alert ? 'focus:border-red-700 border-4 focus:bg-red-100' : 'border-gray-400 border'}`}
            maxLength="16"
            placeholder="e.g. 1234 5678 9123 0000" />
          {error && <p className="text-red-700 text-[12px] mr-52">can't be blank</p>}
          {alert && <p className="text-red-700 text-[12px] mr-40">wrong format,numbers only</p>}
          <div className="flex mt-4">
            <div>
              <p>Exp. Date (MM/YY)</p>
              <input onChange={monthChange}
                name="month"
                className={`rounded-lg w-16 p-2 ${alert2 ? 'focus:border-red-700 border-4 focus:bg-red-100' : 'border-gray-400 border'}`}
                maxLength="2"
                placeholder="MM" />
              <input onChange={yearChange}
                name="year"
                className={`rounded-lg w-16 p-2 ml-3 ${alert2 ? 'focus:border-red-700 border-4 focus:bg-red-100' : 'border-gray-400 border'}`}
                maxLength="2"
                placeholder="yy" />
            </div>
            <div className="ml-10">
              <p className="">CVC</p>
              <input onChange={cvChange}
                name="cv"
                className={`rounded-lg w-32 p-2 ${alert2 ? 'focus:border-red-700 border-4 focus:bg-red-100' : 'border-gray-400 border'}`}
                maxLength="3"
                placeholder="e.g. 123" />
            </div>
          </div>
          {error && <p className="text-red-700 text-[12px] mr-52">can't be blank</p>}
          {alert2 && <p className="text-red-700 text-[12px] mr-40">wrong format,numbers only</p>}
          <button type="submit" className="border bg-[#21092f] rounded-lg w-80 p-2 mt-6 text-white">Confirm</button>
        </form>
      }
    </section>
  )
}