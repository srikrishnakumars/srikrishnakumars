// app.js

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import { renderLandingPage, renderLoginPage, renderItineraryPage } from './render';

Amplify.configure(awsconfig);

const renderApp = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    renderItineraryPage(user);
  } catch (error) {
    renderLandingPage();
  }
};

renderApp();
