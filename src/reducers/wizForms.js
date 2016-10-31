import { combineForms } from 'react-redux-form'

const initialFormState = [
    {
        firstName: '',
        lastName: ''
    },
    {
        email: ''
    },
    {
        message: '' 
    }
]

const wizForms = combineForms({
    page1: initialFormState[0],
    page2: initialFormState[1],
    page3: initialFormState[2]
}, 'wizForms')

export default wizForms