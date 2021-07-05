/**
 *
 * MetaTable
 *
 */

import React, { memo } from 'react';
import { uid } from 'react-uid';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const metaData = {
  businessesImpact: [
    {
      colName: 'id',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'submission_date',
      desc: 'Timestamp that determines when the data was recieved',
      type: 'Timestamp',
    },
    {
      colName: 'business_dist',
      desc: 'Dictrict of residence of the business',
      type: 'Text',
    },
    {
      colName: 'business_coodinates',
      desc: 'Coordinates of residence of the business',
      type: '(latitude, longitude)',
    },
    {
      colName: 'business_type',
      desc: 'Type of business',
      type: 'Categorical',
    },
    {
      colName: 'business_yrs_in_operation',
      desc: 'How long business has been in operation for?',
      type: 'Categorical',
    },
    {
      colName: 'stop_business',
      desc: 'Did you have to stop your business due to COVID-19 pandemic?',
      type: 'Categorical',
    },
    {
      colName: 'how_lng_stop_business',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'business_effect_by_reduced_vol_business',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'business_effect_by_increased_covid_cases',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'business_effect_by_emplys_covid_situation',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'business_effect_by_human_resources_shortage',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'business_effect_by_supply_chain_disruption',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'business_effect_by_lack_sevices_access',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'business_effect_by_lack_mobility',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'business_effect_by_patners_disagrmnt',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'business_effect_by_lack_fin_resources',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'business_effect_by_other',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'business_no_effect',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'most_significant_effect_business',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'wrkfrc_actn_reduced_temporary_workers',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'wrkfrc_actn_reduced_permanent_workers',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'wrkfrc_actn_reduced_working_hours',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'wrkfrc_actn_introduced_rotational_employment',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'wrkfrc_actn_asked_workers_paid_leave',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'wrkfrc_actn_asked_workers_unpaid_leave',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'wrkfrc_actn_asked_workers_reduced_pay',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'wrkfrc_actn_decreased_employee_benefits',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'wrkfrc_actn_other',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'no_wrkfrc_actn',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'loan_impact_took_loan_easily',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'loan_impact_couldnt_take_loan',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'loan_impact_took_loan_difficultly',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'loan_impact_difficult_paying_existing_loan',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'loan_impact_other',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'no_loan_impact',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'asset_impact_sold_assets',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'asset_impact_couldnt_sell_assets',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'asset_impact_rented_assets',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'asset_impact_other',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'no_asset_impact',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'cost_impact_couldnt_cover_operating_cost',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'cost_impact_cancelled_investment_plans',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'cost_impact_made_visit_nepal_investments',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'cost_impact_other',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'no_cost_impact',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'location_impact_moved_business',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'location_impact_closed_branches',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'location_impact_tried_couldnt_move_business',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'location_impact_other',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'no_location_impact',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'eqty_ownrshp_impact_sold_entire_business',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'eqty_ownrshp_impact_tried_couldnt_sell_business',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'eqty_ownrshp_impact_sold_some_business_equity',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'eqty_ownrshp_impact_tried_couldnt_sell_some_equity',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'eqty_ownrshp_impact_other',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'no_eqty_ownrshp_impact',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'fin_effect_other',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'n_employes_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'wrkfrc_size_chng_2020_v_2019',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'revenue_chng_2020_v_2019',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'savings_chng_2020_v_2019',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'accomondation_service_offered_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'adventure_equipment_service_offered_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'adventure_sports_service_offered_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'bar_service_offered_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'flight_booking_service_offered_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'food_delivery_service_offered_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'gymnasium_service_offered_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'hotel_booking_service_offered_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'online_service_offered_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'restaurant_service_offered_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'souvenir_shop_service_offered_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'spa_services_offered_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'swimming_pool_service_offered_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'tour_package_service_offered_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'travel_guide_porter_service_offered_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'vehicle_booking_service_offered_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'other_service_offered_pre_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'accomondation_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'restaurant_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'bar_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'gymnasium_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'spa_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'swimming_pool_service_offered_post_covid',
      desc: 'An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'flight_booking_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'travel_guide_porter_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'adventure_sport_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'adventure_equipment_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'tour_package_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'vehicle_booking_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'hotel_booking_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'souvenir_shop_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'food_delivery_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'online_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'isolation_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'quarantine_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'other_service_offered_post_covid',
      desc: ' An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
  ],
  businessesNeed: [
    {
      colName: 'code_lg',
      desc: 'Kera of residence of the household',
      type: 'Text',
    },
    {
      colName: 'code_ward',
      desc: 'Ward Number of residence of the household',
      type: 'Text',
    },
  ],
};

function MetaTable({ tableName }) {
  const classes = useStyles();

  console.log('tableName', tableName);
  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{ borderBottom: 'none' }}>Variable</TableCell>
            <TableCell style={{ borderBottom: 'none' }} align="right">
              Description
            </TableCell>
            <TableCell style={{ borderBottom: 'none' }} align="right">
              Type
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {metaData[tableName].map(row => (
            <TableRow
              key={uid(row)}
              style={{ borderTop: '1px solid rgb(224, 224, 224)' }}
            >
              <TableCell
                style={{ borderBottom: 'none' }}
                component="th"
                scope="row"
              >
                {row.colName}
              </TableCell>
              <TableCell style={{ borderBottom: 'none' }} align="right">
                {row.desc}
              </TableCell>
              <TableCell style={{ borderBottom: 'none' }} align="right">
                {row.type}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

MetaTable.propTypes = {
  tableName: PropTypes.string.isRequired,
};

export default memo(MetaTable);
