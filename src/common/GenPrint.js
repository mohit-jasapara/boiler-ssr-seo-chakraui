import React, { Component } from 'react';
import { PRINT_TYPE } from '../Constants';
// import { AdmissionFormPrint } from './AdmissionFormPrint';
// import { PrintCareerForm } from './PrintCareerForm';
import _ from 'lodash';

export default class GenPrint extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.focus();
    setTimeout(() => window.print(), 200);
  }

  render() {
    return (
      <div>
        {/* {this.props.type == PRINT_TYPE.ADMISSION_FORM ? (
          <div>
            <AdmissionFormPrint data={this.props.data} />
          </div>
        ) : this.props.type == PRINT_TYPE.CAREER_FORM ? (
          <div>
            <PrintCareerForm data={this.props.data} />
          </div>
        ) : null} */}
      </div>
    );
  }
}
