import React, { Component } from 'react'
import Link from 'gatsby-link'
import { slide as Menu } from 'react-burger-menu'
import { Collapse, UncontrolledCollapse } from 'reactstrap'
import _ from 'lodash'

class BurgerMenu extends Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.onExited = this.onExited.bind(this)
    this.onEntered = this.onEntered.bind(this)
    this.state = {
      AboutUsCollapse: false,
      AboutUsStatus: '+',
      ProgramsCollapse: false,
      ProgramsStatus: '+',
      AdmissionCollapse: false,
      AdmissionStatus: '+',
      menuOpen: false,
    }
  }

  onEntered(status) {
    this.setState({ [status]: '-' })
  }

  onExited(status) {
    this.setState({ [status]: '+' })
  }

  toggle(collapse) {
    this.setState({ [collapse]: !this.state[collapse] })
  }

  handleStateChange({ isOpen }) {
    if (isOpen) {
      this.setState({ menuOpen: true })
      document.getElementById('x-content').setAttribute(
        'style',
        `
        height: 100%;
        width: 100%;
        position: absolute;
        overflow-y: hidden;
        z-index: -9999;
      `
      )
    } else {
      this.setState({ menuOpen: false })
      document
        .getElementById('x-content')
        .setAttribute('style', 'height: 100%;')
    }
  }
  closeMenu() {
    this.setState({ menuOpen: false })
  }
  render() {
    console.log(this.props)
    if (!this.props.menu) {
      return null
    }
    return (
      <div className=" burgerText" style={{}}>
        <Menu
          styles={styles}
          right
          customBurgerIcon={this.state.menuOpen ? false : null}
          isOpen={this.state.menuOpen}
          onStateChange={isOpen => this.handleStateChange(isOpen)}
        >
          {/* <img
            src={require('../images/burgerMenuLogo.png')}
            style={{
              width: 250,
              height: 'auto',
              padding: 0,
              paddingTop: 0,
              paddingBottom: 20,
            }}
          /> */}

          <div style={{ padding: '0px', margin: '0px', width: '100%' }}>
            {_.map(this.props.menu, (main_menu, idx0) => {
              const main_menu_slug = createSlug(main_menu)
              const main_main_url = `/${main_menu_slug}`

              if (main_menu.wordpress_children) {
                return (
                  <div key={main_menu.object_slug}>
                    <div //AboutUs
                      id={main_menu_slug}
                      className="default-link burgerSpread burgerHeight"
                      style={{ width: '100%',height:"auto",background:"#00000001" }}
                    >
                        <div className="hd4">{main_menu.title}</div>
                        <div className="hd4">
                          <img
                            src={require('../images/arrow-down.png')}
                            style={{
                              height: 'auto',
                              width: 15,
                              marginBottom: null,
                            }}
                          />
                        </div>
                    </div>
                    <hr style={customStyle.hr} />
                    <UncontrolledCollapse toggler={main_menu_slug}>
                      {_.map(
                        main_menu.wordpress_children,
                        (sub_menu_1, idx1) => {
                          const sub_menu_1_slug = createSlug(sub_menu_1)
                          const sub_menu_1_url = `/${sub_menu_1_slug}`

                          if (sub_menu_1.wordpress_children) {
                            return (
                              <div>
                                <div style={{ paddingLeft: '10px' }}>
                                  <div //AboutUs
                                    id={'toggler_1_' + idx1}
                                    className="default-link burgerSpread burgerHeight"
                                  >
                                    <div className="hd4">
                                      {sub_menu_1.title}
                                    </div>
                                    <div className="hd4">
                                      {main_menu.wordpress_children.length ==
                                      1 ? null : (
                                        <img
                                          src={require('../images/arrow-down.png')}
                                          style={{
                                            height: 'auto',
                                            width: 15,
                                            marginBottom: null,
                                          }}
                                        />
                                      )}
                                    </div>
                                  </div>
                                  <hr style={customStyle.hr} />
                                  <UncontrolledCollapse
                                    isOpen={
                                      main_menu.wordpress_children.length == 1
                                    }
                                    toggler={'#toggler_1_' + idx1}
                                  >
                                    {_.map(
                                      sub_menu_1.wordpress_children,
                                      (sub_menu_2, idx2) => {
                                        const sub_menu_2_slug = createSlug(
                                          sub_menu_2
                                        )
                                        const sub_menu_2_url = `/${sub_menu_2_slug}`

                                        if (sub_menu_2.wordpress_children) {
                                          return (
                                            <div>
                                              <div
                                                style={customStyle.subContainer}
                                              >
                                                <div //AboutUs
                                                  id={'toggler_2_' + idx2}
                                                  className="default-link burgerSpread burgerHeight"
                                                >
                                                  <div className="">
                                                    {sub_menu_2.title}
                                                  </div>
                                                  <div className="">
                                                    <img
                                                      src={require('../images/arrow-down.png')}
                                                      style={{
                                                        height: 'auto',
                                                        width: 15,
                                                        marginBottom: null,
                                                      }}
                                                    />
                                                  </div>
                                                </div>
                                                {/* <hr style={customStyle.hr} /> */}
                                                <UncontrolledCollapse
                                                  toggler={'#toggler_2_' + idx2}
                                                >
                                                  <hr
                                                    style={{
                                                      ...customStyle.hr,
                                                      marginBottom: 6,
                                                    }}
                                                  />
                                                  <div
                                                    style={{
                                                      paddingLeft: '5px',
                                                    }}
                                                  >
                                                    {_.map(
                                                      sub_menu_2.wordpress_children,
                                                      sub_menu_3 => {
                                                        const sub_menu_3_slug = createSlug(
                                                          sub_menu_3
                                                        )
                                                        const sub_menu_3_url = `/${sub_menu_3_slug}`

                                                        return (
                                                          <Link
                                                            to={sub_menu_3_url}
                                                            className="default-link burgerSpread burgerHeight"
                                                            style={{
                                                              lineHeight: 0.9,
                                                            }}
                                                            onClick={() => {
                                                              this.setState({
                                                                menuOpen: false,
                                                              })
                                                            }}
                                                          >
                                                            <h4>
                                                              -{' '}
                                                              {sub_menu_3.title}
                                                            </h4>
                                                          </Link>
                                                        )
                                                      }
                                                    )}
                                                  </div>
                                                </UncontrolledCollapse>
                                              </div>
                                            </div>
                                          )
                                        } else {
                                          return (
                                            <div
                                              style={customStyle.subContainer}
                                            >
                                              <Link
                                                to={sub_menu_2_url}
                                                className="default-link burgerSpread burgerHeight"
                                                onClick={() => {
                                                  this.setState({
                                                    menuOpen: false,
                                                  })
                                                }}
                                              >
                                                {sub_menu_2.title}
                                              </Link>
                                            </div>
                                          )
                                        }
                                      }
                                    )}
                                  </UncontrolledCollapse>
                                </div>
                              </div>
                            )
                          } else {
                            return (
                              <div style={customStyle.subContainer}>
                                <Link
                                  to={sub_menu_1_url}
                                  onClick={() => {
                                    this.setState({ menuOpen: false })
                                  }}
                                  className="default-link burgerSpread burgerHeight"
                                >
                                  {sub_menu_1.title}
                                </Link>
                              </div>
                            )
                          }
                        }
                      )}
                    </UncontrolledCollapse>
                  </div>
                )
              } else {
                return (
                  <div key={main_menu.object_slug}>
                    <Link
                      to={main_main_url}
                      className="default-link burgerSpread hd4 burgerHeight"
                      onClick={() => {
                        this.setState({ menuOpen: false })
                      }}
                    >
                      {main_menu.title}
                    </Link>
                    <hr style={customStyle.hr} />
                  </div>
                )
              }
            })}
          </div>
        </Menu>
      </div>
    )
  }
}

const styles = {
  item: {
    background: 'none',
    color: '#007bff',
    padding: 0,
    paddingTop: 5,
    paddingBottom: 5,
  },
  bmBurgerButton: {
    position: 'fixed',
    width: '30px',
    height: '25px',
    right: '5vw',
    top: '17.5px',
  },
  bmBurgerBars: {
    background: 'white',
  },
  bmCrossButton: {
    width: '50px',
    height: '50px',
    right: '5vw',
    top: '10px',
  },
  bmCross: {
    height: '33px',
    width: '4px',
    background: 'white',
  },
  bmMenu: {
    background: '#3f6cb3',
    opacity: 0.95,
    padding: '2.5em 1.5em 0',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    //padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    backgroundColor: '#193c6c',
    opacity: 0.4,
  },
}
const customStyle = {
  linkStyle: {
    color: 'white',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  subContainer: {
    marginLeft: 20,
    //fontSize: 20,
  },
  hr: {
    marginBottom: 2,
    marginTop: 2,
    borderColor: 'white',
    borderWidth: '1px',
    opacity: 0.4,
  },
  titleHeight: {
    paddingTop: '10px',
    paddingBottom: '10px',
  },
}
const MenuItem = ({ url, item }) => {
  return (
    <Link to={url} key={item.object_slug}>
      {item.title} | {url}
    </Link>
  )
}

function createSlug(item) {
  switch (item.object) {
    case 'custom':
      return _.replace(item.url, '/', '')
    case 'category':
      return 'category/' + _.replace(_.snakeCase(item.title), '/', '')
    default:
      return item.object_slug || ''
  }
}
export default BurgerMenu
