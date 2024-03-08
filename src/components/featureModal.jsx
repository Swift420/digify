import React from 'react';
import { PopupButton } from 'react-calendly';

const FeatureModal = ({isVisible, onClose, children, imageUrl, modalContent, title, chips}) => {
  const isMobileView = window.innerWidth <= 768; // Set your desired mobile viewport width

  if(!isVisible || (isMobileView && isVisible)) return null;

  const handleClose = (e) => {
    if(e.target.id === 'wrapper') onClose();
  }

  return (
    <div onClick={handleClose} className={`fixed inset-0 flex justify-center items-center bg-black bg-opacity-25 backdrop-blur-sm z-50`}>
      <div className="absolute pt-10 inset-0 flex justify-center items-center" id='wrapper'>
        <div className=' w-8/12 flex flex-col '>
          <div className="bg-white p-2 rounded">
            <div className='p-6 flex flex-col items-center'>
              <h3 className='text-4xl font-bold mb-2 leading-relaxed text-primary '>{title}</h3>
              <div className="flex flex-wrap">
                {chips.map((text, index) => (
                  <div className="bg-blue-800 p-2 rounded-md overflow-hidden mb-2 mr-2" key={index}>
                    <p className="text-white">{text}</p>
                  </div>
                ))}
              </div>
              <div className='pb-5 pl-5 pt-10 pr-5 flex'>
                <div className='w-1/2 pr-6 flex flex-col justify-center'>
                  <p className='mb-5 font-normal text-gray-500 text-xl'>{modalContent}</p>
                </div>
                <div className='w-1/2 flex items-center'>
                  <div className="h-52 w-full flex items-center justify-center">
                    <img src={imageUrl} className='max-h-full max-w-full' alt='Validation' />
                  </div>
                </div>
              </div>
              <div className='pt-10 pb-5'>
                <PopupButton
                  className='btnPrimary'
                  url="https://calendly.com/digify_/30min"
                  rootElement={document.getElementById("root")}
                  text="Book An Appointment"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeatureModal;
