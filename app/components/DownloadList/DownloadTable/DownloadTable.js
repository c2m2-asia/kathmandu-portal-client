/* eslint-disable no-plusplus */
/* eslint-disable react/prop-types */
import React from 'react';
import '../DownloadList.css';
import labelsInfo from '../static/labelsInfo';

const downloadTable = props => {
  const checkedState = [];
  for (let i = 0; i < Object.keys(props.state.form).length; i++) {
    const mainLabel = Object.keys(props.state.form)[i];
    for (let j = 0; j < Object.keys(props.state.form[mainLabel]).length; j++) {
      const subLabel = Object.keys(props.state.form[mainLabel])[j];
      if (props.state.form[mainLabel][subLabel]) {
        checkedState.push(
          `${mainLabel} ${Object.keys(props.state.form[mainLabel])[j]}`,
        );
      }
    }
  }
  return (
    <div>
      {checkedState.length > 0 ? (
        <div className="float">
          <i className="fa fa-download my-float" />
        </div>
      ) : null}
      {checkedState.length > 0 ? (
        <table className="table text-white table-sm table-striped">
          <thead>
            <tr>
              <th>Dataset</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {checkedState.map((item, index) => (
              <tr key={index}>
                <td className="label">{item}</td>
                <td className="info">{labelsInfo[item.split(' ').join('')]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="notSelected">Please Select Dataset</div>
      )}
    </div>
  );
};
//   return (
//     <div>
//       {checkedState.length > 0 ? (
//         <div className="float">
//           <i className="fa fa-download my-float" />
//         </div>
//       ) : null}
//       {checkedState.map((item, index) => (
//         <div className="itemList" key={index}>
//           <h4>{item}</h4>
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit
//             amet eros in justo mattis convallis.
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

export default downloadTable;
