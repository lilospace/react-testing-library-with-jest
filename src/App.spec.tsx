import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'



describe('testing list', () => {

    it('should be cars list', () => {
        const { getByText } = render(<App />)
        expect(getByText('A4')).toBeInTheDocument()
        expect(getByText('Golf')).toBeInTheDocument()
        expect(getByText('accord')).toBeInTheDocument()

    })

    it('should be render list of cars', async () => {
        const { getByText, debug } = render(<App />)

        const add = getByText('Add');
        debug()
        userEvent.click(add);
        await (waitFor(() => {
            debug()
            expect(getByText('Jetta')).toBeInTheDocument()
        }))
    })
})