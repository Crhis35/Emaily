import React from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './surveyForm.component';
import SurveyReview from './suervey-form-review.component';

class SurveyNew extends React.Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <SurveyReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }

    return (
      <SurveyForm
        onSurveySubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({ form: 'surveyForm' })(SurveyNew);
