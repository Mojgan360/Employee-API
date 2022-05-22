import { render, screen, cleanup } from '@testing-library/react'

import FilterState from '../../../../context/filter/FilterState'
import EmployeesState from '../../../../context/employees/EmployeesState'
import GridCard from '../GridCard'

const MockSearchContainer = (props) => {
  return (
    <EmployeesState>
      <FilterState>
        <GridCard {...props} />
      </FilterState>
    </EmployeesState>
  )
}

const gridCardProps = {
  name: 'Agron Kabashi',
  email: 'agron.kabashi@1337.tech',
  office: 'Lund',
  gitHub: 'AgronKabashi',
  twitter: '_agronkabashi',
  linkedIn: '/pub/agron-kabashi/54/6a8/4a6',
  imagePortraitUrl: 'https://i.1337co.de/profile/agron-kabashi',
}
afterEach(() => {
  cleanup()
})
describe('GridCard', () => {
  it('should show image of employee with correct src', async () => {
    render(<MockSearchContainer {...gridCardProps} />)
    const image = screen.getByAltText(/agron.kabashi@1337.tech/i)
    expect(image.src).toBe('https://i.1337co.de/profile/agron-kabashi')
  })

  it('should show name of employee', async () => {
    render(<MockSearchContainer {...gridCardProps} />)
    expect(
      screen.getByRole('heading', { name: /Agron Kabashi/i })
    ).toBeInTheDocument()
  })

  it('should be email of employee', async () => {
    render(<MockSearchContainer {...gridCardProps} />)
    expect(screen.getByAltText(/agron.kabashi@1337.tech/i)).toBeInTheDocument()
  })
  it('should show office of employee', async () => {
    render(<MockSearchContainer {...gridCardProps} />)
    expect(screen.getByText(/Lund/i)).toBeInTheDocument()
  })

  //SocialMedia
  describe('SocialMedia', () => {
    //Twitter
    it('should show link to twitter icone of employee', async () => {
      render(<MockSearchContainer {...gridCardProps} />)

      expect(
        screen.getByTestId('twitter-link', {
          twitter: /_agronkabash/i,
          href: 'https://twitter.com/_agronkabashi',
        })
      ).toBeInTheDocument()
    })

    test('should navigate to employees twitter account when link is clicked', () => {
      render(<MockSearchContainer {...gridCardProps} />)

      expect(
        screen.getByTestId('twitter-link', {
          twitter: /_agronkabash/i,
          href: 'https://twitter.com/_agronkabashi',
        })
      ).toHaveAttribute('href', 'https://twitter.com/_agronkabashi')
    })
    //Linkedin
    it('should show link to Linkedin icone of employee', async () => {
      render(<MockSearchContainer {...gridCardProps} />)

      expect(
        screen.getByTestId('linkedIn-link', {
          linkedIn: '/pub/agron-kabashi/54/6a8/4a6',
          href: 'https://linkedin.com/pub/agron-kabashi/54/6a8/4a6',
        })
      ).toBeInTheDocument()
    })

    it('should navigate to employees Linkedin account when link is clicked', () => {
      render(<MockSearchContainer {...gridCardProps} />)

      expect(
        screen.getByTestId('linkedIn-link', {
          linkedIn: '/pub/agron-kabashi/54/6a8/4a6',
          href: 'https://www.linkedin.com/pub/agron-kabashi/54/6a8/4a6',
        })
      ).toHaveAttribute(
        'href',
        'https://www.linkedin.com/pub/agron-kabashi/54/6a8/4a6'
      )
    })

    //Github
    it('should show link to Github account of employee', async () => {
      render(<MockSearchContainer {...gridCardProps} />)

      expect(
        screen.getByTestId('gitHub-link', {
          gitHub: '/AgronKabashi/i',
          href: 'https://linkedin.com/pub/agron-kabashi/54/6a8/4a6',
        })
      ).toBeInTheDocument()
    })

    test('should navigate to employees GitHub account when link is clicked', () => {
      render(<MockSearchContainer {...gridCardProps} />)

      expect(
        screen.getByTestId('gitHub-link', {
          gitHub: '/AgronKabashi/i',
          href: 'https://github.com/AgronKabashi',
        })
      ).toHaveAttribute('href', 'https://github.com/AgronKabashi')
    })
  })
})
