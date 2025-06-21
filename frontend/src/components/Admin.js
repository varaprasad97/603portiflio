import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/contact/admin/contacts`);
      setContacts(response.data.data);
      setLoading(false);
    } catch (error) {
      setError('Failed to fetch contacts');
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await axios.patch(`${API_BASE_URL}/contact/admin/contacts/${id}`, {
        status: newStatus
      });
      setStatus({
        type: 'success',
        message: 'Status updated successfully'
      });
      fetchContacts(); // Refresh the list
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to update status'
      });
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 p-4">
        {error}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Contact Submissions</h1>

      {status.message && (
        <div className={`mb-6 p-4 rounded-md ${
          status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
        }`}>
          {status.message}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact List */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">All Submissions</h2>
          <div className="space-y-4">
            {contacts.map((contact) => (
              <motion.div
                key={contact._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg cursor-pointer transition-colors ${
                  selectedContact?._id === contact._id
                    ? 'bg-blue-50 border-2 border-blue-900'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedContact(contact)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold">{contact.name}</h3>
                    <p className="text-sm text-gray-600">{contact.email}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDate(contact.createdAt)}
                    </p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    contact.status === 'new'
                      ? 'bg-blue-100 text-blue-800'
                      : contact.status === 'read'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {contact.status}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-white rounded-lg shadow-md p-6">
          {selectedContact ? (
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact Details</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <p className="mt-1">{selectedContact.name}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <p className="mt-1">{selectedContact.email}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Message</label>
                  <p className="mt-1 whitespace-pre-wrap">{selectedContact.message}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Status</label>
                  <div className="mt-2 flex space-x-2">
                    <button
                      onClick={() => handleStatusUpdate(selectedContact._id, 'new')}
                      className={`px-3 py-1 rounded-md text-sm ${
                        selectedContact.status === 'new'
                          ? 'bg-blue-900 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      New
                    </button>
                    <button
                      onClick={() => handleStatusUpdate(selectedContact._id, 'read')}
                      className={`px-3 py-1 rounded-md text-sm ${
                        selectedContact.status === 'read'
                          ? 'bg-blue-900 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Read
                    </button>
                    <button
                      onClick={() => handleStatusUpdate(selectedContact._id, 'replied')}
                      className={`px-3 py-1 rounded-md text-sm ${
                        selectedContact.status === 'replied'
                          ? 'bg-blue-900 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      Replied
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Received</label>
                  <p className="mt-1">{formatDate(selectedContact.createdAt)}</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-8">
              Select a contact to view details
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Admin; 