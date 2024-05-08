import React, { useState, } from 'react'
import OtpInput from './Otp-Input'

const PhoneOtpFrom = () => {
    const [phonenumber, setPhoneNumber] = useState('')
    const [showotpinput, setShowOtpInput] = useState(false)
    const handlePhoneNumber = (event) => {
        setPhoneNumber(event.target.value)

    }
    const handlePhoneSubmite = (event) => {
        event.preventDefault()
        //  phone validations
        const regex = /[^0-9]/g;
        if (phonenumber.length < 10 || regex.test(phonenumber)) {
            alert("Invalid Phone number")
            return;
        } else {
            //  call BE API 
            // show otp field
            setShowOtpInput(true)

        }

    }

    const onOtpSubmit = (otp) => {
        console.log('Login successful', otp)
    }
    return (
        <div>
            {!showotpinput ? <form onSubmit={handlePhoneSubmite}>
                <input
                    type="text"
                    value={phonenumber}
                    onChange={handlePhoneNumber}
                    placeholder='Enter phone number'
                />
                <button type="submit">Submite</button>
            </form> : <div>
                <p>Enter otp sent to you {phonenumber}</p>
                <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
            </div>
            }
        </div>
    )
}

export default PhoneOtpFrom
