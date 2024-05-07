"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import HomeCard from './HomeCard'
import { useRouter } from 'next/navigation'
import MeetingModal from './MeetingModal'

const MeetingTypeList = () => {
    const [meetingstate, setMeetingState] = useState<'isSchedulingMeeting' | 'isInstantMeeting'|'isJoiningMeeting' |undefined>()
    const createMeeting = () =>{
        

    }
    const router = useRouter();
  return (
    <section className='grid grim-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4'>
    <HomeCard 
    img="/icons/add-meeting.svg"
    title="New Meeting"
    description = "Start an instant meeting"
    handleClick={()=>setMeetingState('isInstantMeeting')}
    className="bg-orange-1"

    />  
    <HomeCard 
    img="/icons/schedule.svg"
    title="Schedule Meeting"
    description = "Plan your meeting"
    handleClick={()=>setMeetingState('isSchedulingMeeting')}
    className="bg-blue-1"

    />
 
<HomeCard 
    img="/icons/recordings.svg"
    title="View Recordings"
    description = "Check out your Recordings"
    handleClick={()=>setMeetingState('isJoiningMeeting')}
    className="bg-purple-1"

    />   
<HomeCard 
    img="/icons/add-meeting.svg"
    title="New Meeting"
    description = "Start an instant meeting"
    handleClick={()=>router.push('/recordings')}
    className="bg-yellow-1"

    />
    <MeetingModal
    isOpen = {meetingstate === 'isInstantMeeting'}
    onClose= {() => setMeetingState(undefined)}
    title = "Start an Instant Meeting"
    className = "text-center"
    buttonText="Start Meeting"
    handleClick = {createMeeting}

    
    />
    </section>

  )
}

export default MeetingTypeList