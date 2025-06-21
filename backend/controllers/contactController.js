const Contact = require('../models/Contact');

const contactController = {
  // Submit a new contact
  submitContact: async (req, res) => {
    try {
      const { name, email, message } = req.body;

      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({
          success: false,
          message: 'Name, email, and message are required'
        });
      }

      // Create new contact
      const newContact = new Contact({
        name,
        email,
        message,
        status: 'new'
      });

      await newContact.save();

      res.status(201).json({
        success: true,
        message: 'Contact submitted successfully',
        data: newContact
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error submitting contact',
        error: error.message
      });
    }
  },

  // Get all contacts (admin only)
  getAllContacts: async (req, res) => {
    try {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      res.json({
        success: true,
        data: contacts
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error fetching contacts',
        error: error.message
      });
    }
  },

  // Update contact status (admin only)
  updateContactStatus: async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      // Validate status
      const validStatuses = ['new', 'read', 'replied'];
      if (!validStatuses.includes(status)) {
        return res.status(400).json({
          success: false,
          message: 'Invalid status. Must be one of: new, read, replied'
        });
      }

      const updatedContact = await Contact.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );

      if (!updatedContact) {
        return res.status(404).json({
          success: false,
          message: 'Contact not found'
        });
      }

      res.json({
        success: true,
        message: 'Contact status updated successfully',
        data: updatedContact
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: 'Error updating contact status',
        error: error.message
      });
    }
  }
};

module.exports = contactController; 