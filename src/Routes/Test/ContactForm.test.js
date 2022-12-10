import {  render, screen } from '@testing-library/react'
import { expect, test } from "@jest/globals";
import ContactForm from '../ContactForm'
import user from '@testing-library/user-event';

test('El formulario se llena correctamente', () => {
        render(<ContactForm />)
        const inputName = screen.getByTitle(/nameinput/i)
        expect(inputName).toBeInTheDocument
        user.type(inputName, 'Juan Perez')
        const inputEmail = screen.getByPlaceholderText(/email/i)
        expect(inputEmail).toBeInTheDocument
        user.type(inputEmail, 'juanperez@gmail.com')
        const submitButton = screen.getByRole('button', {
                name: /enviar/i
        })
        user.click(submitButton)
        const serverRespone = screen.getByText("Gracias Juan Perez, te contactaremos cuanto antes via mail.")


})

test('El formulario se llena incorrectamente', () => {
        render(<ContactForm />)
        const inputName = screen.getByTitle(/nameinput/i)
        expect(inputName).toBeInTheDocument
        user.type(inputName, 'as')
        const inputEmail = screen.getByPlaceholderText(/email/i)
        expect(inputEmail).toBeInTheDocument
        user.type(inputEmail, 'juanperezgmail.com')
        const submitButton = screen.getByRole('button', {
                name: /enviar/i
        })
        user.click(submitButton)
        const serverRespone = screen.getByText("Algo salió mal, verifique sus datos e ingréselos nuevamente.")


}) 






