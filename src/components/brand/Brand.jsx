import React from 'react'
import './Brand.css'
import {google,atlassian,dropbox,slack,shopify} from './imports'

const Brand = () => {
  return (
    <div className="brand section__padding section__margin ">
      <div>
        <img src={google} alt={google} />
      </div>
      <div>
        <img src={dropbox} alt={dropbox} />
      </div>
      <div>
        <img src={slack} alt={slack} />
      </div>
      <div>
        <img src={shopify} alt={shopify} />
      </div>
      <div>
        <img src={atlassian} alt={atlassian} />
      </div>
    </div>
  )
}

export default Brand