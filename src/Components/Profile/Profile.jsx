import React from 'react'
import ProfileSidebar from './ProfileSidebar'
import PersonalInformation from './PersonalInformation'

function Profile() {
  return (
    <div className='flex justify-center gap-5'>
      <ProfileSidebar/>
      <PersonalInformation/>
    </div>
  )
}

export default Profile
