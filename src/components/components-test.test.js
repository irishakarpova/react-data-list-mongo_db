import React from 'react'
import { Provider } from 'react-redux'
import Enzyme, {render, mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import InfinityList from './infinity-list'
import Header from './header'
import articles from '../fixtures'
import store from '../store'

Enzyme.configure({ adapter: new Adapter() })

describe('InfinityList', () => {

  it ('should render N li', () => {
    const container = render(<Provider store={store}><InfinityList articles={articles} /></Provider>);
    expect(container.find('.test_article_li').length).toEqual(articles.length)
  });
  it ('should render all li closed by default', () =>{
    const container = render(<Provider store={store}><InfinityList articles={articles} /></Provider>);
    expect (container.find('.test_data').length).toEqual(0)
  });
  it ('should open li on click', () =>{
    const container = mount(<Provider store={store}><InfinityList articles={articles} /></Provider>);

    expect (container.find('.test_data').length).toEqual(0)
    container.find('.test_open_data').at(0).simulate('click')
    expect (container.find('.test_data').length).toEqual(1)
  })

  describe('Header', () => {

    it ('should open select component on click', () =>{
      const container = mount(<Provider store={store}><Header/></Provider>);

      expect (container.find('.test_select_open').length).toEqual(0)
      container.find('.test_select_btn').at(0).simulate('click')
      expect (container.find('.test_select_open').length).toEqual(1)
    })

    it ('should open create component on click', () =>{
      const container = mount(<Provider store={store}><Header/></Provider>);

      expect (container.find('.test_create_open').length).toEqual(0)
      container.find('.test_create_btn').at(0).simulate('click')
      expect (container.find('.test_create_open').length).toEqual(1)
    })

  })

})
