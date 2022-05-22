import React, { useEffect } from 'react'
import styled from 'styled-components'
import Aos from 'aos'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'

import defaultImage from '../../../assest/images/bg-image.svg'
import { mobile, mobileLandscape, tablet } from '../../../utils/responsive'

const ListView = ({ data: employees }) => {
  useEffect(() => {
    Aos.init({ disable: 'mobile' })
  }, [])
  const regex = /(<([^>]+)>)/gi

  return (
    <Wrapper>
      <div className='container'>
        {employees &&
          employees.map((employee) => {
            const {
              name,
              office,
              mainText,
              linkedIn,
              gitHub,
              twitter,
              imageWallOfLeetUrl,
            } = employee
            return (
              <article
                key={employee.email}
                data-aos='slide-right'
                data-aos-duration='2000'
              >
                <ImageDiv
                  bg={imageWallOfLeetUrl ? imageWallOfLeetUrl : defaultImage}
                ></ImageDiv>
                <header>
                  <div className='info'>
                    <div className='person-row'>
                      <div className='person'>
                        <h4>{name}</h4>
                      </div>
                      <ul className='icone'>
                        <li>
                          <a
                            href={`https://www.linkedin.com/${linkedIn}`}
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
                            href={`https://github.com/${gitHub}`}
                            target='_blank'
                            rel='noreferrer'
                          >
                            <FaGithub size='20' color='#fff' />
                          </a>
                        </li>
                        <li>
                          <a
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
                      <h5>{office}</h5>
                    </div>
                  </div>

                  <div className='desc'>
                    <p>
                      {mainText &&
                        mainText.replace(regex, '').substring(0, 150)}
                      <span>.... Read more</span>
                    </p>
                  </div>
                </header>
              </article>
            )
          })}
      </div>
    </Wrapper>
  )
}
const ImageDiv = styled.div`
  flex: 1;
  width: 150px;
  height: 150px;
  background-color: black;
  background-image: url(${(props) => props.bg});
  background-attachment: scroll, local;
  background-position: left;
  background-repeat: no-repeat;
  background-size: contain;
`
const Wrapper = styled.section`
  width: 100vw;
  display: grid;
  row-gap: 3rem;
  margin-bottom: 50px;
  margin: 50px auto;
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  article {
    display: grid;
    gap: 0px;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 0.1rem;
    align-items: center;
    background-color: var(--blue-dark--800);
    margin: 1rem 0;

    ${mobile({
      'column-gap': '.1rem',
    })};

    ${mobileLandscape({
      'column-gap': '.5rem',
    })};
    ${tablet({
      'column-gap': '1rem',
    })};
  }

  .info {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
    color: var(--blue-light-100);

    ${mobile({
      'flex-direction': 'column',
      ' margin-right': '0',
      '  align-items': 'flex-end',
    })};
    ${tablet({
      'flex-direction': 'row',
      '  align-items': 'flex-end',
    })};
    ${mobileLandscape({
      'flex-direction': 'row',
    })};

    .person-row {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      ${mobile({
        ' width': ' 100%',
        'flex-direction': 'column',
        'justify-content': 'flex-start',
        ' margin-right': '0',
      })};

      ${mobileLandscape({
        'flex-direction': 'row',
        'align-items': 'center',
      })};
      ${tablet({
        'flex-direction': 'row',
        'align-items': 'center',
      })};
    }
  }
  .person {
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    margin-top: 1.5rem;
    margin-right: 0;
    ${mobileLandscape({
      'flex-direction': 'row',
      'align-items': 'center',
      '  margin-top': '0',
    })};
    ${tablet({
      'flex-direction': 'row',
      'justify-content': 'center',
      'align-items': 'center',
      '  margin-top': '0',
      'margin-righ': '5rem',
    })};

    h4 {
      font-weight: 700;
      margin-right: 5rem;
      font-size: 0.8rem;

      ${mobile({
        'font-size': '0.9rem',
      })};

      ${mobileLandscape({
        'font-size': '1rem',
      })};

      ${tablet({
        'font-size': '1.1rem',
        'margin-top': '0',
        'margin-righ': '5rem',
      })};
    }
  }
  .icone {
    width: 100px;
    display: flex;
    justify-content: center;
    li {
      margin: 0 10px;
    }
  }

  .office {
    background-color: var(--primary-green-500);
    color: var(--primary-blue-500);
    height: 30px;
    width: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom-left-radius: 0px;
    align-self: right;
    ${mobile({
      width: '130px',
      'justify-content': 'center',
    })};
    ${mobileLandscape({
      width: '130px',
      'border-bottom-left-radius': '7px',
    })};
    ${tablet({
      ' border-bottom-left-radius': '7px',
    })};
    h5 {
      font-size: 10px;
      margin: 10px;
      letter-spacing: 2px;

      ${mobileLandscape({
        'letter-spacing': ' 1px',
      })};
    }
  }

  .desc {
    margin-bottom: 2rem;

    p {
      color: var(--primary-green-500);
      letter-spacing: 2px;
      max-width: 45em;
      font-size: 0.7rem;
      margin-bottom: 0.2rem;
      margin-right: 2rem;
      ${mobile({
        'font-size': '0.8rem',
      })};

      ${mobileLandscape({
        'font-size': '0.8rem',
      })};

      ${tablet({
        'font-size': '.9rem',
      })};
    }
    span {
      font-size: 0.7rem;
      font-style: italic;
      color: var(--blue-light-100);
    }
  }
`

export default ListView
/*

  ${mobile({
      '  grid-template-columns': ' repeat(2, 1fr)',
    })};
    ${mobileLandscape({
      '  grid-template-columns': ' repeat(3, 1fr)',
    })};
    ${tablet({
      '  grid-template-columns': ' repeat(4, 1fr)',
    })};
  }




*/
