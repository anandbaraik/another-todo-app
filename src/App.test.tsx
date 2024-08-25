import { describe, expect, test } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
    test('Should render input field and add button', () => {
        render(<App />);

        const input = screen.getByLabelText('Add Task:');
        const button = screen.getByRole('button', { name: /Add/i });

        expect(input).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });

    test('should add task to list when add button is clicked', async () => {
        const user = userEvent.setup();

        render(<App />);

        const input = screen.getByLabelText('Add Task:');
        const button = screen.getByRole('button', { name: /Add/i });

        await user.type(input, 'New Task');
        await user.click(button);

        await waitFor(() => {
            expect(screen.getByText('New Task')).toBeInTheDocument();
        });
    });

    test('should clear the input field after adding a task', async () => {
        const user = userEvent.setup();

        render(<App />);

        const input = screen.getByLabelText('Add Task:');
        const button = screen.getByRole('button', { name: /Add/i });

        await user.type(input, 'New Task');
        await user.click(button);

        await waitFor(() => {
            expect(input).toHaveValue('');
        });
    });

    test('should not add an empty task', async () => {
        const user = userEvent.setup();

        render(<App></App>);

        const input = screen.getByLabelText('Add Task:');
        const button = screen.getByRole('button', { name: /Add/i });

        await user.type(input, '    ');
        await user.click(button);

        await waitFor(() => {
            expect(screen.queryAllByRole('listitem')).toHaveLength(0);
        });
    });

    test('should add a task by pressing the enter key', async () => {
        const user = userEvent.setup();

        render(<App />);

        const input = screen.getByLabelText('Add Task:');

        await user.type(input, 'New Task {enter}');

        await waitFor(() => {
            expect(screen.getByText('New Task')).toBeInTheDocument();
            expect(screen.queryAllByRole('listitem')).toHaveLength(1);
        });
    });
});
