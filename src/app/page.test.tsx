import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import VerificationsTable from '../components/verificationsTable';

test('VerificationsTable: renders and displays table data', () => {
  render(<VerificationsTable />);

  expect(screen.getByText('Requests')).toBeDefined();
  expect(screen.getByText('Send')).toBeDefined();
  expect(screen.getByText('Respond')).toBeDefined();

  // Table headings
  expect(screen.getByText('Employee Name')).toBeDefined();
  expect(screen.getByText('Verifier Name')).toBeDefined();
  expect(screen.getByText('Request Type')).toBeDefined();
  expect(screen.getByText('Requested Date ↑')).toBeDefined();
  expect(screen.getByText('Deadline date for response')).toBeDefined();
  expect(screen.getByText('Assignee')).toBeDefined();
  expect(screen.getByText('Status')).toBeDefined();

  // Check some of the mock values
  expect(screen.getByText('TestUserHsLsQCkMmM TestUserHsLsQCkMmM')).toBeDefined();
  expect(screen.getAllByText('0TestCompany E2EVerifier')).toBeDefined();
  expect(screen.getByText('Visa Reference')).toBeDefined();
  expect(screen.getByText('Filled By Employer')).toBeDefined();
});
