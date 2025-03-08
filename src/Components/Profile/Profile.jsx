import React from 'react'
import ProfileSidebar from './ProfileSidebar'
import PersonalInformation from './PersonalInformation'

function Profile() {
  return (
    <div className='flex my-5 justify-center gap-5'> 
      <ProfileSidebar/>
      <PersonalInformation/>
    </div>
  )
}

export default Profile
