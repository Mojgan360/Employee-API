import employeesReducer from '../employeesReducer'

import {
  GET_EMPLOYEES_BEGIN,
  GET_EMPLOYEES_SUCCESS,
  GET_EMPLOYEES_ERROR,
} from '../../../actions'

describe('employeesReducer test', () => {
  it('should loding be true when GET_EMPLOYEES_BEGIN action is disptched', () => {
    const featuresState = {
      employees_loading: false,
    }

    const action = {
      type: GET_EMPLOYEES_BEGIN,
    }

    const updatedState = employeesReducer(featuresState, action)

    expect(updatedState).toEqual({
      employees_loading: true,
    })
  })

  it('should initialize data when GET_EMPLOYEES_SUCCESS action is dispatched', () => {
    const employeeState = {
      employees: [],
      employees_loading: true,
    }

    const action = {
      type: GET_EMPLOYEES_SUCCESS,
      payload: {
        name: 'employees',
        data: [
          {
            name: 'Agron Kabashi',
            email: 'agron.kabashi@1337.tech',
            phoneNumber: '+46725133736',
            office: 'Lund',
            manager: 'lotta.wennolf@1337.tech',
            orgUnit: '/Employees',
            mainText:
              '<p>I have been working in the software industry for over 10 years now, and even though the road has been bumpy, I don’t regret a single second of it! My experiences have been quite varied, from creating games to full blown web-based intranet platforms.</p><p>Because of this variation and these experiences I’ve found that I’ve acquired a thirst for front-end development and anything web related, which can range from mobile apps to web-based SaaS solutions. The fact that you can create ANYTHING with almost nothing is an exhilarating feeling. It’s one of the major reasons that keeps me going; the only limit is my imagination.</p><p>I absolutely love to travel and experience new cultures (and food!) when the opportunity presents itself. My goal in life is to visit as many places and experience as many different cultures as I possibly can. So far I can cross off Europe and half of Asia from my list, and I look forward to many more exciting adventures to come.</p>  ',
            gitHub: 'AgronKabashi',
            twitter: '_agronkabashi',
            stackOverflow: null,
            linkedIn: '/pub/agron-kabashi/54/6a8/4a6',
            imagePortraitUrl: 'https://i.1337co.de/profile/agron-kabashi',
            imageWallOfLeetUrl: 'https://i.1337co.de/wallofleet/agron-kabashi',
            highlighted: false,
            published: true,
          },
        ],
      },
    }

    const updatedState = employeesReducer(employeeState, action)

    expect(updatedState).toEqual({
      employees_loading: false,

      employees: [
        {
          name: 'Agron Kabashi',
          email: 'agron.kabashi@1337.tech',
          phoneNumber: '+46725133736',
          office: 'Lund',
          manager: 'lotta.wennolf@1337.tech',
          orgUnit: '/Employees',
          mainText:
            '<p>I have been working in the software industry for over 10 years now, and even though the road has been bumpy, I don’t regret a single second of it! My experiences have been quite varied, from creating games to full blown web-based intranet platforms.</p><p>Because of this variation and these experiences I’ve found that I’ve acquired a thirst for front-end development and anything web related, which can range from mobile apps to web-based SaaS solutions. The fact that you can create ANYTHING with almost nothing is an exhilarating feeling. It’s one of the major reasons that keeps me going; the only limit is my imagination.</p><p>I absolutely love to travel and experience new cultures (and food!) when the opportunity presents itself. My goal in life is to visit as many places and experience as many different cultures as I possibly can. So far I can cross off Europe and half of Asia from my list, and I look forward to many more exciting adventures to come.</p>  ',
          gitHub: 'AgronKabashi',
          twitter: '_agronkabashi',
          stackOverflow: null,
          linkedIn: '/pub/agron-kabashi/54/6a8/4a6',
          imagePortraitUrl: 'https://i.1337co.de/profile/agron-kabashi',
          imageWallOfLeetUrl: 'https://i.1337co.de/wallofleet/agron-kabashi',
          highlighted: false,
          published: true,
        },
      ],
    })
  })

  test('should error be true when GET_EMPLOYEES_ERROR action is disptched', () => {
    const featuresState = {
      employees_loading: false,
      employees_error: false,
    }

    const action = {
      type: GET_EMPLOYEES_ERROR,
    }

    const updatedState = employeesReducer(featuresState, action)

    expect(updatedState).toEqual({
      employees_loading: false,
      employees_error: true,
    })
  })
})
