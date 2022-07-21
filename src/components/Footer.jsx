import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='w-full h-[240px] text-gray-400 px-96 mt-24'>
           <div className='flex items-center'>
           <div className='mr-8'>
                <p>Audio and Subtitle</p>
                <p>Media Center</p>
                <p>Security</p>
            </div>
            <div className='mr-8'>
                <p>Audio Description</p>
                <p>Investor Relation</p>
                <p>Legal Provisions</p>
            </div>
            <div className='mr-8'>
                <p>Help Center</p>
                <p>Jobs</p>
                <p>Cookie Preferences</p>
            </div>
            <div className='mr-8'>
                <p>Gift Card</p>
                <p>Term of use</p>
                <p>Corporate Informastion</p>
            </div>
           </div>
            <div className='text-center mt-12'>&copy; 2022 Irfan Maulana - DTS Mini Projects</div>
        </div>
    </>
  )
}

export default Footer