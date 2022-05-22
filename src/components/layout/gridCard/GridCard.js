import React, { useEffect } from 'react'
import Aos from 'aos'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'

import { GridCardContainer } from './gridCard-style'
import defaultImage from '../../../assest/images/bg-image.svg'

const EmployeeGridCard = ({
  name,
  email,
  office,
  imagePortraitUrl,
  linkedIn,
  gitHub,
  twitter,
}) => {
  useEffect(() => {
    Aos.init({ disable: 'mobile' })
  }, [])

  return (
    <GridCardContainer data-aos='zoom-in' data-aos-duration='3000'>
      <header>
        <img
          alt={email}
          className='image'
          src={imagePortraitUrl || defaultImage}
        />
      </header>
      <footer>
        <div className='info'>
          <h5>{name}</h5>
          <ul className='icone'>
            <li>
              <a
                data-testid='linkedIn-link'
                href={`https://www.linkedin.com${linkedIn}`}
                target='_blank'
                rel='noreferrer'
              >
                <ImLinkedin
                  size='20'
                  color='#fff'
                  style={{
                    borderRadius: '50%',
                  }}
                />
              </a>
            </li>
            <li>
              <a
                data-testid='gitHub-link'
                href={`https://github.com/${gitHub}`}
                target='_blank'
                rel='noreferrer'
              >
                <FaGithub size='20' color='#fff' />
              </a>
            </li>
            <li>
              <a
                data-testid='twitter-link'
                href={`https://twitter.com/${twitter}`}
                target='_blank'
                rel='noreferrer'
              >
                <FaTwitter size='20' color='#fff' />
              </a>
            </li>
          </ul>
        </div>
        <div className='office'>
          <h5>Office: {office}</h5>
        </div>
      </footer>
    </GridCardContainer>
  )
}

export default EmployeeGridCard
