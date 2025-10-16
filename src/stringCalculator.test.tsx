//rename to tsx file because wanted to render react components
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('test cases for stringCalulator', () => {
    //wrote this testcase to check if page is rendering properly
    it('page must be rendered',async () => {
        render(<App />);
        const element = await screen.findAllByText('String Calculator')
        expect(element).toBeTruthy();
    })
    //now in green state scenario
    it('button click should call handleCalculate', async () => {
        render(<App />);
        const button = await screen.findAllByTestId('Calculate');
        button[0].click();
        const validationText = await screen.findAllByText('Error: Invalid input');
        expect(validationText).toBeTruthy();
    })
    //testcase before string calculator logic is implemented
    it('Test case for normal input', async () => {
        render(<App/>);
        const inputField = await screen.findAllByTestId('input-field');
        fireEvent.change(inputField[0], { target: { value: '1*2nM3.4' } });
        const button = await screen.findAllByTestId('Calculate');
        button[0].click();
        const element = await screen.findAllByText('Result: 10');
        expect(element).toBeDefined();
    });
    it('Test case for custom input edgecase', async () => {
        render(<App/>);
        const inputField = await screen.findAllByTestId('input-field');
        fireEvent.change(inputField[0], { target: { value: '1\n24)(9*1509po10' } });
        const button = await screen.findAllByTestId('Calculate');
        button[0].click();
        const element = await screen.findAllByText('Result: 1553');
        expect(element).toBeDefined();
    });
})