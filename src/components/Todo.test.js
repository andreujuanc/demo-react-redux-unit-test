import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Todo from './Todo'

Enzyme.configure({ adapter: new Adapter() })

function setup() {
    const props = {
        onClick: jest.fn(),
        completed: false,
        text: 'testing'
    }

    const enzymeWrapper = shallow(<Todo {...props} />)

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('Todo', () => {
        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup()
            expect(enzymeWrapper.find('li').text()).toBe('testing');
        })

        it('should call onclick when clicked on the li element', () => {
            const { enzymeWrapper, props } = setup()
            const input = enzymeWrapper.find('li')
            expect(props.onClick.mock.calls.length).toBe(0)
            input.simulate('click');
            expect(props.onClick.mock.calls.length).toBe(1)
          })
    })
})