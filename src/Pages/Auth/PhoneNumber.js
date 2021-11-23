  import "intl-tel-input/build/css/intlTelInput.css";
  import ReactIntlTelInput from 'react-intl-tel-input-v2';
  
import React, { useState } from 'react'
import { Button, useRadioGroup } from '@material-ui/core';
import { useHistory, useRouteMatch } from 'react-router';
import {Auth} from "aws-amplify"
import {v4} from "uuid"
import { useDispatch } from 'react-redux';
import { SET_USER } from '../../Constants/actions';

export default function PhoneNumber() {
    const [value,setValue]=useState({iso2:"ca",dialCode:"1",phone:""});
    const history = useHistory();
    const dispatch = useDispatch();
    const submit = async()=>{
        const phone = `+${value.dialCode}${value.phone}`;
        console.log(phone)

        
        try{
           await Auth.signUp({username:phone,password:v4()})
        }catch(e){
            console.log("Account exists... logging in")
        }
        const user = await Auth.signIn(phone);
        // console.log(user)
        dispatch({ type: SET_USER,payload:user});
        history.push("/verify")
    }
    const updateValue = (e)=>{
        setValue(e);
        console.log(e)
    }
    return (
      <div>
        <ReactIntlTelInput value={value} onChange={updateValue} />
        <Button onClick={submit}>Submit</Button>
      </div>
    );
}
