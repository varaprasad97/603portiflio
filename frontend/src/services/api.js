import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const getSummary = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/portfolio/summary`);
    return response.data;
  } catch (error) {
    console.error('Error fetching summary:', error);
    return null;
  }
};

export const getCompetencies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/portfolio/competencies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching competencies:', error);
    return null;
  }
};

export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/portfolio/projects`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return null;
  }
};

export const getCertifications = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/portfolio/certifications`);
    return response.data;
  } catch (error) {
    console.error('Error fetching certifications:', error);
    return null;
  }
};

export const fetchPortfolio = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/portfolio/summary`);
    if (!response.ok) {
      throw new Error('Failed to fetch portfolio data');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching portfolio:', error);
    throw error;
  }
};

export const submitContact = async (contactData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact/submit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactData),
    });
    if (!response.ok) {
      throw new Error('Failed to submit contact form');
    }
    return await response.json();
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}; 