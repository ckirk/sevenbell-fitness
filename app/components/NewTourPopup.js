// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react'

import {
  Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle,
  TextField
} from '@mui/material';

import { loadHealcode, removeHealcode } from './healcode.js';

import PhoneIcon from '@mui/icons-material/Phone';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const TourPopup = (props) => {
  const [ mode, setMode] = useState(false) // 'prospect', 'schedule', false

  const prospectForm = '<healcode-widget data-type="prospects" data-widget-partner="object" data-widget-id="7f420327cf6" data-widget-version="0" ></healcode-widget>'
  const scheduleForm = '<healcode-widget data-type="appointments" data-widget-partner="object" data-widget-id="7f923857cf6" data-widget-version="0" ></healcode-widget>'

  const handleBack = () => {
    setMode(false)
  }

  const SchedulingOptions = () => (
    <React.Fragment>
      <DialogTitle id="alert-dialog-title">
        Schedule A Tour
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Tours take place by appointment only. Please choose an option below.
        </DialogContentText>
        <div className='options'>
          <div className='option' onClick={() => setMode('prospect')}>
            <PhoneIcon />
            <h3>Contact Me</h3>
          </div>
          <div className='option' onClick={() => setMode('schedule')}>
            <LaptopMacIcon />
            <h3>Schedule Online</h3>
          </div>
        </div>
      </DialogContent>
    </React.Fragment>
  )

  const findForm = () => {
    if (document.querySelector("#hc-prospect-7f420327cf6")) {
      return true
    } else {
      return false
    }
  }

  const ProspectForm = () => {
    const [ formLoaded, setFormLoaded ] = useState(false)

    useEffect(() => {
      // inject mindBody prospect form on load
      document.getElementById("injectProspect").innerHTML = prospectForm

      let intervalId

      const checkForForm = () => {
        if (!intervalId) {
          intervalId = setInterval(() => {
            console.log('checking for form...')
            let mindBodyForm = document.querySelector("#prospect_form_7f420327cf6")
            if (mindBodyForm) {
              console.log('MindBody form found!')
              mindBodyForm.addEventListener("submit", (e) => {
                e.preventDefault()
                console.log('MindBody form submitted!')
              })
              // mindBodyForm.addEventListener("click", (e) => {
              //   e.preventDefault()
              //   console.log('MindBody form clicked!')
              // })
              // document.querySelector("#test3").addEventListener("submit", (e) => {
              //   console.log('test button sumbitted!')
              // })
              clearInterval(intervalId)
              setFormLoaded(true)
            } else {
              console.log('no form found')
            }
          }, 100)
        }
      }

      checkForForm()
    }, [])

    return (
      <React.Fragment>
        <DialogTitle>
          Schedule A Tour
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ marginBottom: '10px' }}>
            Complete the fields below and a membership advisor will reach out to you in the next 24 hours to schedule your visit.
          </DialogContentText>
          <div id='injectProspect'></div>
        </DialogContent>
        <DialogActions className='leftBack'>
          <Button onClick={handleBack} startIcon={<ArrowBackIosIcon />}>
            Back
          </Button>
        </DialogActions>
      </React.Fragment>
    )
  }

  const ScheduleForm = () => {

    useEffect(() => {
      document.getElementById("injectSchedule").innerHTML = scheduleForm
    }, [])

    return (
      <React.Fragment>
        <DialogTitle>
          Schedule A Tour
        </DialogTitle>
        <DialogContent id='injectSchedule'>
        </DialogContent>
        <DialogActions className='leftBack'>
          <Button onClick={handleBack} startIcon={<ArrowBackIosIcon />}>
            Back
          </Button>
        </DialogActions>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <Dialog
        className='tourPopup'
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        { mode === false && <SchedulingOptions /> }
        { mode === 'prospect' && <ProspectForm /> }
        { mode === 'schedule' && <ScheduleForm /> }
      </Dialog>
    </React.Fragment>
  );
}

export default TourPopup;
