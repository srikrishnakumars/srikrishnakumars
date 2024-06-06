// render.js

import { renderLoginPage } from './loginPage';
import { renderItineraryPage } from './itineraryPage';

export const renderLandingPage = () => {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = '';
  const landingPageDiv = document.createElement('div');
  landingPageDiv.innerHTML = require('./landingPage.html');
  appDiv.appendChild(landingPageDiv);
  const loginLink = document.getElementById('loginLink');
  loginLink.innerHTML = '<a href="#">Login</a>';
  loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    renderLoginPage();
  });
};

export const renderLoginPage = () => {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = '';
  const loginPageDiv = document.createElement('div');
  loginPageDiv.innerHTML = require('./loginPage.html');
  appDiv.appendChild(loginPageDiv);
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    try {
      await Auth.signIn(username, password);
      renderItineraryPage();
    } catch (error) {
      console.error('Error logging in:', error);
    }
  });
};

export const renderItineraryPage = () => {
  const appDiv = document.getElementById('app');
  appDiv.innerHTML = '';
  const itineraryPageDiv = document.createElement('div');
  itineraryPageDiv.innerHTML = require('./itineraryPage.html');
  appDiv.appendChild(itineraryPageDiv);
  // Your code for rendering the itinerary page
};
