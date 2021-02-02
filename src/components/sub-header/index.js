import React from 'react'
import { SubHeaderWrapper } from './style'
import { NavLink } from 'react-router-dom'

export default function JGSubHeader () {
  return (
    <SubHeaderWrapper >
      <NavLink to="/home">
        <svg t="1611202526363" className="icon" viewBox="0 0 1134 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1363" ><path d="M220.897507 1024v-145.728532H99.279778A99.279778 99.279778 0 0 1 0 780.055402V415.556787a99.634349 99.634349 0 0 1 99.279778-99.279779H248.199446v70.914128H99.279778a28.365651 28.365651 0 0 0-28.365651 28.365651V780.055402a28.365651 28.365651 0 0 0 28.365651 28.365651h192.531856v87.933518l138.99169-87.933518h179.412742v70.914127h-158.847645z" p-id="1364" fill="#3579a6"></path><path d="M931.102493 910.537396L638.227147 726.160665H332.941828A120.554017 120.554017 0 0 1 212.742382 605.606648V120.554017A120.554017 120.554017 0 0 1 332.941828 0h681.484765A120.908587 120.908587 0 0 1 1134.626039 120.554017v485.052631a120.908587 120.908587 0 0 1-120.554017 120.554017h-82.969529zM332.941828 70.914127A49.639889 49.639889 0 0 0 283.65651 120.554017v485.052631a49.639889 49.639889 0 0 0 49.639889 49.639889h326.204986l200.686981 126.581718v-126.581718h154.238227a49.639889 49.639889 0 0 0 49.639889-49.639889V120.554017a49.639889 49.639889 0 0 0-49.639889-49.63989z" p-id="1365" fill="#3579a6"></path><path d="M976.842105 497.462604h-70.914127v-15.955679l-54.603878-140.764543-54.958449 140.764543v15.955679h-70.914127v-29.074792l98.925207-254.581718h53.540167l98.925207 254.581718v29.074792zM531.855956 496.398892a141.828255 141.828255 0 1 1 141.828255-141.828255 141.828255 141.828255 0 0 1-141.828255 141.828255z m0-212.742382a70.914127 70.914127 0 1 0 70.914127 70.914127 70.914127 70.914127 0 0 0-70.914127-70.914127z" p-id="1366" fill="#3579a6"></path><path d="M581.460388 455.091413l50.100831-50.171745 54.178393 54.142936-50.136288 50.171745z" p-id="1367" fill="#3579a6"></path></svg>
        <span className="web-title">
          有问必答
      </span>
      </NavLink>
    </SubHeaderWrapper>
  )
}