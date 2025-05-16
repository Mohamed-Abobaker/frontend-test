'use client';

import React, { useMemo, useState } from 'react';
import verificationsFile from '../verifications.json';
import { formatDate, formatUnderscoreString } from '../utils/utils';

interface Organization {
  id: number;
  name: string;
}

interface Assignee {
  id: number;
  firstName: string;
  lastName: string;
}

interface Verification {
  id: string;
  firstName: string;
  lastName: string;
  verifierOrganization?: Organization;
  employerOrganization?: Organization;
  createdAt: number;
  deadlineDate: number;
  assignee?: Assignee | null;
  purpose: string;
  state: string;
}

const VerificationsTable: React.FC = () => {
  const [sortAsc, setSortAsc] = useState(true);
  const [activeTab, setActiveTab] = useState('Respond');
  const verifications: Verification[] = verificationsFile.data;

  const sortedData = useMemo(() => {
    return [...verifications].sort((a, b) => {
      const dateA = a.createdAt;
      const dateB = b.createdAt;
      return sortAsc ? dateA - dateB : dateB - dateA;
    });
  }, [sortAsc, verifications]);

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl font-bold">Requests</h1>
          <div className="ml-4 flex bg-gray-800 rounded overflow-hidden">
            <button
              className={`px-4 py-2 text-sm ${
                activeTab === 'Send' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'
              }`}
              onClick={() => setActiveTab('Send')}
            >
              Send
            </button>
            <button
              className={`px-4 py-2 text-sm ${
                activeTab === 'Respond' ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-300'
              }`}
              onClick={() => setActiveTab('Respond')}
            >
              Respond
            </button>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-black font-bold mr-2">
            T
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium">TestUserEmployer</span>
            <span className="text-xs text-gray-400">0TestCompany E2Employee...</span>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto rounded shadow border border-gray-700 max-w-full">
        <table
          className="w-full table-auto text-sm divide-y divide-gray-700"
          data-testid="verifications-table"
        >
          <thead className="bg-gray-800 text-gray-300">
            <tr>
              <th className="px-4 py-3 text-left">Employee Name</th>
              <th className="px-4 py-3 text-left">Verifier Name</th>
              <th className="px-4 py-3 text-left">Request Type</th>
              <th
                className="px-4 py-3 text-left cursor-pointer hover:underline"
                onClick={() => setSortAsc(!sortAsc)}
              >
                Requested Date {sortAsc ? '↑' : '↓'}
              </th>
              <th className="px-4 py-3 text-left">Deadline date for response</th>
              <th className="px-4 py-3 text-left">Assignee</th>
              <th className="px-4 py-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {sortedData.map((v: Verification) => (
              <tr key={v.id} className="hover:bg-gray-900">
                <td className="px-4 py-2 break-words">
                  {v.firstName} {v.lastName}
                </td>
                <td className="px-4 py-2 break-words">{v.verifierOrganization?.name ?? '—'}</td>
                <td className="px-4 py-2">{formatUnderscoreString(v.purpose)}</td>
                <td className="px-4 py-2">{formatDate(v.createdAt)}</td>
                <td className="px-4 py-2">{formatDate(v.deadlineDate)}</td>
                <td className="px-4 py-2  break-words">
                  {v.assignee ? `${v.assignee.firstName} ${v.assignee.lastName}` : 'Unassigned'}
                </td>
                <td className="px-4 py-2">{formatUnderscoreString(v.state)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VerificationsTable;
