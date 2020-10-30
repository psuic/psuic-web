import React, { Component } from 'react'
import Link from 'gatsby-link'
import _ from 'lodash'

class MainMenu extends Component {
  render() {
    if (!this.props.menu) {
      return null
    }

    return (
      <div>
        <h1>Main Menu</h1>
        <ul>
          {this.props.menu.map(main_menu => {
            const main_menu_slug = createSlug(main_menu)
            const main_main_url = `${main_menu_slug}`

            if (main_menu.wordpress_children) {
              return (
                <React.Fragment>
                  <li>
                    {main_menu.title} | {main_main_url}
                  </li>
                  <ul>
                    {_.map(main_menu.wordpress_children, sub_menu_1 => {
                      const sub_menu_1_slug = createSlug(sub_menu_1)
                      const sub_menu_1_url = sub_menu_1_slug

                      if (sub_menu_1.wordpress_children) {
                        return (
                          <React.Fragment>
                            <li>
                              {sub_menu_1.title} | {sub_menu_1_url}
                            </li>
                            <ul>
                              {_.map(
                                sub_menu_1.wordpress_children,
                                sub_menu_2 => {
                                  const sub_menu_2_slug = createSlug(sub_menu_2)
                                  const sub_menu_2_url = sub_menu_2_slug

                                  if (sub_menu_2.wordpress_children) {
                                    return (
                                      <React.Fragment>
                                        <li>
                                          {sub_menu_2.title} | {sub_menu_2_url}
                                        </li>
                                        <ul>
                                          {_.map(
                                            sub_menu_2.wordpress_children,
                                            sub_menu_3 => {
                                              const sub_menu_3_slug = createSlug(
                                                sub_menu_3
                                              )
                                              const sub_menu_3_url = sub_menu_3_slug

                                              return (
                                                <MenuItem
                                                  item={sub_menu_3_slug}
                                                  url={sub_menu_3_url}
                                                />
                                              )
                                            }
                                          )}
                                        </ul>
                                      </React.Fragment>
                                    )
                                  } else {
                                    return (
                                      <MenuItem
                                        item={sub_menu_2}
                                        url={sub_menu_2_url}
                                      />
                                    )
                                  }
                                }
                              )}
                            </ul>
                          </React.Fragment>
                        )
                      } else {
                        return (
                          <MenuItem item={sub_menu_1} url={sub_menu_1_url} />
                        )
                      }
                    })}
                  </ul>
                </React.Fragment>
              )
            } else {
              return <MenuItem item={main_menu} url={main_main_url} />
            }
          })}
        </ul>
      </div>
    )
  }
}

const MenuItem = ({ url, item }) => {
  return (
    <li key={item.object_slug}>
      <Link to={url}>
        {item.title} | {url}
      </Link>
    </li>
  )
}

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
export default MainMenu
