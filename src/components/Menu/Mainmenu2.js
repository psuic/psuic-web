import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

import _ from 'lodash'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledCollapse,
} from 'reactstrap'

class MainMenu2 extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: true }
  }
  render() {
    if (!this.props.menu) {
      return null
    }

    return (
      <div>
        <Navbar
          className="t1"
          style={{
            background: '#193c6ccc',
            height: '60px',
            position: 'fixed',
            zIndex: 5,
            width: '100%',
            paddingLeft: '5vw',
            paddingRight: '5vw',
          }}
          expand="md"
        >
          <NavbarBrand href="/">
            <img
              src={require('../../images/logoFooter.png')}
              style={{ objectFit: 'contain', margin: 0, height: '40px' }}
            />
          </NavbarBrand>
          <Nav className="ml-auto" navbar>
            {this.props.menu.map(main_menu => {
              const main_menu_slug = createSlug(main_menu)
              const main_main_url = `${main_menu_slug}`

              if (main_menu.wordpress_children) {
                return (
                  <NavItem key={main_menu.title}>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle
                        style={{ color: 'white' }}
                        className="testli"
                        nav
                      >
                        {main_menu.title}
                      </DropdownToggle>
                      <DropdownMenu style={{ width:main_menu.title=="Programs"? '350px':'225px' }} left>
                        {_.map(main_menu.wordpress_children, sub_menu_1 => {
                          const sub_menu_1_slug = createSlug(sub_menu_1)
                          const sub_menu_1_url = `/${main_menu_slug}/${sub_menu_1_slug}`
                          const toggler_1 = _.camelCase(sub_menu_1.title)
                          if (sub_menu_1.wordpress_children) {
                            return (
                              <div key={sub_menu_1.title}>
                                <div
                                  id={'toggler' + toggler_1}
                                  className="dropdown-item "
                                  // style={{ cursor: 'pointer' }}
                                  style={{
                                    marginLeft: '0px',
                                    background: '',
                                    paddingLeft: '10px',
                                    paddingRight: '10px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                  }}
                                >
                                  <div>{sub_menu_1.title}</div>
                                  {main_menu.wordpress_children.length == 1? null:   <div >
                                    <img
                                      src={require('../../images/arrow-down-d.png')}
                                      style={{
                                        height: 'auto',
                                        width: 12,
                                        marginBottom: null,
                                      }}
                                    />
                                  </div>}
                               
                                </div>
                                <div>
                                  <UncontrolledCollapse
                                    isOpen={
                                      main_menu.wordpress_children.length == 1
                                    }
                                    toggler={'#toggler' + toggler_1}
                                  >
                                    <hr style={customStyle.hr} />
                                    {_.map(
                                      sub_menu_1.wordpress_children,
                                      sub_menu_2 => {
                                        const sub_menu_2_slug = createSlug(
                                          sub_menu_2
                                        )
                                        const sub_menu_2_url = sub_menu_2_slug
                                        const toggler_2 = _.camelCase(
                                          sub_menu_2.title
                                        )
                                        if (sub_menu_2.wordpress_children) {
                                          return (
                                            <div key={sub_menu_2.title}>
                                              <div
                                                id={'toggler2' + toggler_2}
                                                className="dropdown-item"
                                                style={{
                                                  cursor: 'pointer',
                                                  paddingRight: '10px',
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    paddingLeft: '0px',
                                                    display: 'flex',
                                                    justifyContent:
                                                      'space-between',
                                                  }}
                                                >
                                                  <div>{sub_menu_2.title}</div>
                                                  <div><img
                                      src={require('../../images/arrow-down-d.png')}
                                      style={{
                                        height: 'auto',
                                        width: 12,
                                        marginBottom: null,
                                      }}
                                    /></div>
                                                </div>
                                              </div>
                                              <UncontrolledCollapse
                                                toggler={
                                                  '#toggler2' + toggler_2
                                                }
                                                // style={{background:"red",width:"100%"}}
                                              >
                                                <hr
                                                  style={{ ...customStyle.hr }}
                                                />

                                                {_.map(
                                                  sub_menu_2.wordpress_children,
                                                  (sub_menu_3, idx) => {
                                                    const sub_menu_3_slug = createSlug(
                                                      sub_menu_3
                                                    )
                                                    const sub_menu_3_url = sub_menu_3_slug

                                                    return (
                                                      <DropdownItem
                                                        key={sub_menu_3.title}
                                                        href={sub_menu_3_slug}
                                                        style={{
                                                          display: 'flex',
                                                          paddingLeft: '42px',
                                                          // backgroundColor:"green",
                                                          // width:"180px",
                                                          // height:"80px", paddingTop: '4.5px',
                                                          //     paddingBottom:
                                                          //       '4.5px',
                                                          paddingTop:
                                                            idx == 0
                                                              ? '12px'
                                                              : '10px',
                                                          paddingBottom: '10px',
                                                          paddingRight: '10px',
                                                          lineHeight: '1rem',
                                                          wordBreak: 'keep-all',
                                                          wordWrap:
                                                            'break-word',
                                                          textAlign: 'left',
                                                          whiteSpace: 'normal',
                                                          opacity:0.75
                                                        }}
                                                      >
                                                        {sub_menu_3.title}
                                                      </DropdownItem>
                                                    )
                                                  }
                                                )}
                                              </UncontrolledCollapse>
                                            </div>
                                          )
                                        } else
                                          return (
                                            <DropdownItem
                                              key={sub_menu_2.title}
                                              href={sub_menu_2_slug}
                                            >
                                              <div
                                              // style={{ paddingLeft: '5px' }}
                                              >
                                                {sub_menu_2.title}
                                              </div>
                                            </DropdownItem>
                                          )
                                      }
                                    )}
                                  </UncontrolledCollapse>
                                </div>
                              </div>
                            )
                          } else
                            return (
                              <DropdownItem
                                href={sub_menu_1_slug}
                                key={sub_menu_1.title}
                                className="t2"
                                style={{
                                  marginLeft: '0px',
                                  background: '',
                                  paddingLeft: '10px',
                                  paddingRight: '10px',
                                }}
                              >
                                <div>{sub_menu_1.title}</div>
                                {/* <hr style={customStyle.hr} /> */}
                              </DropdownItem>
                            )
                        })}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
                )
              } else
                return (
                  <NavItem key={main_menu.title}>
                    <NavLink
                      to={main_main_url}
                      style={{ color: 'white' }}
                      className="testli"
                    >
                      {main_menu.title}
                    </NavLink>
                  </NavItem>
                )
            })}
          </Nav>
          {/* </Collapse> */}
        </Navbar>
      </div>
    )
  }
}

const NavLink = styled(Link).attrs({ className: 'nav-link' })``

function createSlug(item) {
  switch (item.object) {
    case 'general':
      return '/general/' + _.get(item, 'object_slug')
    case 'custom':
      return item.url
    // case 'category':
    //   return '' + _.replace(_.kebabCase(item.title), '/', '')
    default:
      return item.object_slug || ''
  }
}
export default MainMenu2
const customStyle = {
  linkStyle: {
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  subContainer: {
    marginLeft: 20,
    fontSize: 20,
  },
  hr: {
    marginBottom: 0,
    marginTop: 0,
    // borderColor: 'white',
  },
}
