import * as actions from './index'

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs'
    const expectedAction = {
      id: 0,
      type: actions.addTodo.type,
      text
    }
    expect(actions.addTodo(text)).toEqual(expectedAction)
  })
})