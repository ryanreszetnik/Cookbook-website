import { Button } from '@material-ui/core';
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { SET_USER,SET_AUTH_STATUS } from '../../Constants/actions';
import { LOGGEDOUT } from '../../Constants/states';
import {Auth} from "aws-amplify"
import './Header.css'

export default function Header() {
  const dispatch = useDispatch();
  const signout =async()=>{
    await Auth.signOut();
    dispatch({ type: SET_USER, payload: null });
    dispatch({ type: SET_AUTH_STATUS, payload: LOGGEDOUT });
  }
    return (
      <div className="header">
        <Link to="/" className="header-link">
          <div className="header-option">Home</div>
        </Link>
        <Link to="/create" className="header-link">
          <div className="header-option">Create</div>
        </Link>
        <Link to="/schedule" className="header-link">
          <div className="header-option">Schedule</div>
        </Link>
        <Button color="primary" variant="contained" onClick={signout}>
          Sign out
        </Button>
      </div>
    );
}
