import React from 'react'
import { InlineWidget, PopupWidget } from "react-calendly";
function Calender() {
  return (
    <div className="App">
    <PopupWidget
      url="https://calendly.com/digify_/30min"
      /*
       * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
       * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
       */
      rootElement={document.getElementById("root")}
     
    />
  </div>
  )
}

export default Calender