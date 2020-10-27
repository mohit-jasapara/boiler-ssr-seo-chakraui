import React from 'react';
import ReactDOM from 'react-dom';
import BASE_URL from './common/BaseUrl.js';
import GenPrint from './common/GenPrint';

const STATUS = {
  FETCHING: 'FETCHING',
  SUCCESS: 'SUCCESS',
  FAILED: 'FAILED',
  NOT_STARTED: 'NOT_STARTED',
  INVALID: 'INVALID'
};

export default STATUS;

export const PRINT_TYPE = {
  ADMISSION_FORM: 1,
  CAREER_FORM: 2
};

export const printHelper = (type, data) => {
  document.getElementById('print').innerHTML = '';
  ReactDOM.render(
    <GenPrint type={type} data={data} />,
    document.getElementById('print')
  );
};
