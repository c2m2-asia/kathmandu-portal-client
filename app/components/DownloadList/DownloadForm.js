import React, { Component } from 'react';
import './DownloadList.css';
import DownloadCheck from './DownloadCheck/downloadCheck';
import DownloadTable from './DownloadTable/DownloadTable';

class downloadForm extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        business: {
          Impact: false,
          Need: false,
          Preparedness: false,
          Outlook: false,
        },
        workforce: {
          Impact: false,
          Need: false,
          Preparedness: false,
          Outlook: false,
        },
      },
      showSublabels: {
        business: true,
        workforce: true,
      },
    };
    this.onSubChangeHandler = this.onSubChangeHandler.bind(this);
    this.onMainChangeHandler = this.onMainChangeHandler.bind(this);
    this.onExpandHandler = this.onExpandHandler.bind(this);
  }

  onSubChangeHandler = event => {
    const { name, checked } = event.target;
    const key = [name][0].split('_');
    const prevState = { ...this.state.form };
    const mainkey = prevState[key[0]];
    mainkey[key[1]] = checked;
    this.setState({
      ['form'[key[0]]]: mainkey,
    });
  };

  onExpandHandler = event => {
    const prevState = { ...this.state.showSublabels };
    prevState[event.currentTarget.id] = !prevState[event.currentTarget.id];
    this.setState({
      showSublabels: prevState,
    });
  };

  onMainChangeHandler = event => {
    const { name, checked } = event.target;
    const prevState = { ...this.state.form };
    const mainkey = prevState[name];
    for (let i = 0; i < Object.keys(this.state.form[name]).length; i++) {
      const key = Object.keys(this.state.form[name])[i];
      mainkey[key] = checked;
    }
    this.setState({
      ['form'[name]]: mainkey,
    });
  };

  render() {
    return (
      <div className=" col-12 Downloads">
        <div className="row">
          <div className="downloadList col-3">
            <h4>Datasets </h4>
            <hr />
            <form className="form-group">
              <div>
                {Object.keys(this.state.form).map((label, index) => (
                  <DownloadCheck
                    key={index}
                    mainChanged={event => {
                      this.onMainChangeHandler(event);
                    }}
                    subChanged={event => {
                      this.onSubChangeHandler(event);
                    }}
                    expandChanged={event => {
                      this.onExpandHandler(event);
                    }}
                    state={this.state}
                    label={label}
                  />
                ))}
              </div>
            </form>
          </div>
          <div className="downloadTable col-8">
            <DownloadTable state={this.state} />
          </div>
        </div>
      </div>
      // </div>
    );
  }
}
export default downloadForm;
