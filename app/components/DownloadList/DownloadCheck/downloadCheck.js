/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import '../DownloadList.css';
import labelsInfo from '../static/labelsInfo';

const downloadCheck = props => {
  const allChecked = Object.values(props.state.form[props.label]).every(
    v => v === true,
  );
  return (
    <div className="eachForm">
      <div className="row">
        <div className="form-check col-10">
          <label className="form-check-label mainLabel">
            <input
              type="checkbox"
              name={props.label}
              className="form-check-input form-check-input-lg"
              checked={allChecked}
              onChange={props.mainChanged}
            />
            <i
              className={
                props.label === 'business'
                  ? 'fa fa-building'
                  : 'fas fa-user-tie'
              }
            />
            {props.label}{' '}
            {/* <i className="fa fa-info-circle info" aria-hidden="true" /> */}
          </label>
        </div>
        <div className="col-1 expand">
          <i
            id={props.label}
            onClick={props.expandChanged}
            className={
              props.state.showSublabels[props.label]
                ? 'fas fa-caret-up expand-icon'
                : 'fas fa-caret-down expand-icon'
            }
          />
        </div>
      </div>
      <div
        className={
          props.state.showSublabels[props.label]
            ? 'col-11 form-check'
            : 'col-11 noDisplay form-check'
        }
      >
        {Object.keys(props.state.form[props.label]).map((sublabel, index) => {
          return (
            <div className="row">
              <div className="form-check col-10" key={index}>
                <label className="form-check-label subLabel">
                  <input
                    type="checkbox"
                    name={`${props.label}_${sublabel}`}
                    className="form-check-input form-check-input-lg"
                    checked={props.state.form[props.label][sublabel]}
                    onChange={props.subChanged}
                  />
                  {sublabel}
                </label>
              </div>
              <div className="col-2">
                <i
                  className="fa fa-info-circle info"
                  title={labelsInfo[props.label + sublabel]}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default downloadCheck;
