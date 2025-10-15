//rename to tsx file because wanted to render react components
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
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
        const button = await screen.findAllByTestId('calculate-button');
        button[0].click();
        const validationText = await screen.findAllByText('Error: Invalid input');
        expect(validationText).toBeTruthy();
    })
})