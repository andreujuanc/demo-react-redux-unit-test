import reducer from './todos'
import * as actions from '../actions'

describe('todos reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual([])
    })

    it('should handle ADD_TODO', () => {
            expect(
                reducer([], {
                    type: actions.addTodo.type,
                    text: 'Run the tests',
                    id: 1
                })
            ).toEqual([
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }
            ])

            expect(
                reducer(
                    [
                        {
                            text: 'Use Redux',
                            completed: false,
                            id: 0
                        }
                    ],
                    {
                        type: actions.addTodo.type,
                        text: 'Run the tests',
                        id:1
                    }
                )
            ).toEqual([
                {
                    text: 'Use Redux',
                    completed: false,
                    id: 0
                },
                {
                    text: 'Run the tests',
                    completed: false,
                    id: 1
                }
            ])
    })
})