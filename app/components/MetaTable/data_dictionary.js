const metaData = {
  businessImpact: [
    {
      colName: 'id',
      desc: 'An identifier variable that uniquely identifies each response',
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
      desc:
        'For how long did you have to stop your business due to COVID-19 pandemic?',
      type: 'Categorical',
    },
    {
      colName: 'business_effect_by_reduced_vol_business',
      desc:
        'Flag variable that indicates whether the respondent observed reduced volume of business',
      type: 'Boolean',
    },
    {
      colName: 'business_effect_by_increased_covid_cases',
      desc:
        'Flag variable that indicates whether the respondent observed increased COVID-19 cases in their area',
      type: 'Boolean',
    },
    {
      colName: 'business_effect_by_emplys_covid_situation',
      desc:
        'Flag variable that indicates whether the respondent observed their employees were affected by COVID-19',
      type: 'Boolean',
    },
    {
      colName: 'business_effect_by_human_resources_shortage',
      desc:
        'Flag variable that indicates whether the respondent observed shortage of human resources',
      type: 'Boolean',
    },
    {
      colName: 'business_effect_by_supply_chain_disruption',
      desc:
        'Flag variable that indicates whether the respondent observed supply chain disruption',
      type: 'Boolean',
    },
    {
      colName: 'business_effect_by_lack_sevices_access',
      desc:
        'Flag variable that indicates whether the respondent observed lack of access to services due to government-imposed lockdown',
      type: 'Boolean',
    },
    {
      colName: 'business_effect_by_lack_mobility',
      desc:
        'Flag variable that indicates whether the respondent observed lack of mobility due to government-imposed lockdown',
      type: 'Boolean',
    },
    {
      colName: 'business_effect_by_patners_disagrmnt',
      desc:
        'Flag variable that indicates whether the respondent observed disagreement with partners/fallout',
      type: 'Boolean',
    },
    {
      colName: 'business_effect_by_lack_fin_resources',
      desc:
        'Flag variable that indicates whether the respondent observed  lack of adequate financial resources',
      type: 'Boolean',
    },
    {
      colName: 'business_effect_by_other',
      desc:
        'Flag variable that indicates whether the respondent observed  any other impacts  due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'business_no_effect',
      desc:
        "Flag variable that indicates whether the respondent didn't observed any affect in their business operations",
      type: 'Boolean',
    },
    {
      colName: 'most_significant_effect_business',
      desc:
        'We also asked businesses to rank order their choices for the above multiselect question. This column captures what each respondent chose as their first option.',
      type: 'Categorical',
    },
    {
      colName: 'wrkfrc_actn_reduced_temporary_workers',
      desc:
        'Flag variable that indicates whether the respondent had to reduced the number of temporary workers',
      type: 'Boolean',
    },
    {
      colName: 'wrkfrc_actn_reduced_permanent_workers',
      desc:
        'Flag variable that indicates whether the respondent had to reduced the number of permanent workers',
      type: 'Boolean',
    },
    {
      colName: 'wrkfrc_actn_reduced_working_hours',
      desc:
        'Flag variable that indicates whether the respondent had to reduce the working hours',
      type: 'Boolean',
    },
    {
      colName: 'wrkfrc_actn_introduced_rotational_employment',
      desc:
        'Flag variable that indicates whether the respondent had to introduce rotational employment',
      type: 'Boolean',
    },
    {
      colName: 'wrkfrc_actn_asked_workers_paid_leave',
      desc:
        'Flag variable that indicates whether the respondent had to ask workers to take paid leave',
      type: 'Boolean',
    },
    {
      colName: 'wrkfrc_actn_asked_workers_unpaid_leave',
      desc:
        'Flag variable that indicates whether the respondent had to ask workers to take unpaid leave',
      type: 'Boolean',
    },
    {
      colName: 'wrkfrc_actn_asked_workers_reduced_pay',
      desc:
        'Flag variable that indicates whether the respondent had to ask workers to work for reduced pay',
      type: 'Boolean',
    },
    {
      colName: 'wrkfrc_actn_decreased_employee_benefits',
      desc:
        'Flag variable that indicates whether the respondent had to decrease or remove employee benefits (like perks, bonus, etc.)',
      type: 'Boolean',
    },
    {
      colName: 'wrkfrc_actn_other',
      desc:
        'Flag variable that indicates whether the respondent had to take other workforce related actions beside given options',
      type: 'Boolean',
    },
    {
      colName: 'no_wrkfrc_actn',
      desc:
        "Flag variable that indicates whether the respondent didn't had to take any workforce-related actions",
      type: 'Boolean',
    },
    {
      colName: 'loan_impact_took_loan_easily',
      desc:
        'Flag variable that indicates whether the respondent took loan(s) quite easily to continue their business',
      type: 'Boolean',
    },
    {
      colName: 'loan_impact_couldnt_take_loan',
      desc:
        'Flag variable that indicates whether the respondent tried but could not take loans',
      type: 'Boolean',
    },
    {
      colName: 'loan_impact_took_loan_difficultly',
      desc:
        'Flag variable that indicates whether the respondent took loans but faced significant difficulties in taking loans',
      type: 'Boolean',
    },
    {
      colName: 'loan_impact_difficult_paying_existing_loan',
      desc:
        'Flag variable that indicates whether the respondent faced difficulty in paying back existing loans',
      type: 'Boolean',
    },
    {
      colName: 'loan_impact_other',
      desc:
        'Flag variable that indicates whether the respondent faced any other loan related impacts',
      type: 'Boolean',
    },
    {
      colName: 'no_loan_impact',
      desc:
        'Flag variable that indicates whether the respondent faced none of the provided loan related impacts',
      type: 'Boolean',
    },
    {
      colName: 'asset_impact_sold_assets',
      desc:
        'Flag variable that indicates whether the respondent sold some of their assets (e.g. vehicles, equipment, buildings, land)',
      type: 'Boolean',
    },
    {
      colName: 'asset_impact_couldnt_sell_assets',
      desc:
        'Flag variable that indicates whether the respondent could not find buyers when wanted to sell their assets',
      type: 'Boolean',
    },
    {
      colName: 'asset_impact_rented_assets',
      desc:
        'Flag variable that indicates whether the respondent rented out some of their assets',
      type: 'Boolean',
    },
    {
      colName: 'asset_impact_other',
      desc:
        'Flag variable that indicates whether the respondent faced any other assest related impacts',
      type: 'Boolean',
    },
    {
      colName: 'no_asset_impact',
      desc:
        'Flag variable that indicates whether the respondent faced none of the provided assests related impacts',
      type: 'Boolean',
    },
    {
      colName: 'cost_impact_couldnt_cover_operating_cost',
      desc:
        'Flag variable that indicates whether the respondent could not cover their operating costs (e.g. rent, electricity, etc.)',
      type: 'Boolean',
    },
    {
      colName: 'cost_impact_cancelled_investment_plans',
      desc:
        'Flag variable that indicates whether the respondent cancelled or postponed their investment plans',
      type: 'Boolean',
    },
    {
      colName: 'cost_impact_made_visit_nepal_investments',
      desc:
        'Flag variable that indicates whether the respondent had made significant investments specifically targeting Visit Nepal 2020',
      type: 'Boolean',
    },
    {
      colName: 'cost_impact_other',
      desc:
        'Flag variable that indicates whether the respondent faced any other cost related impacts',
      type: 'Boolean',
    },
    {
      colName: 'no_cost_impact',
      desc:
        'Flag variable that indicates whether the respondent faced none of the provided costs related impacts',
      type: 'Boolean',
    },
    {
      colName: 'location_impact_moved_business',
      desc:
        'Flag variable that indicates whether the respondent moved their business/office to a different location',
      type: 'Boolean',
    },
    {
      colName: 'location_impact_closed_branches',
      desc:
        'Flag variable that indicates whether the respondent closed down some of their offices/branches',
      type: 'Boolean',
    },
    {
      colName: 'location_impact_tried_couldnt_move_business',
      desc:
        "Flag variable that indicates whether the respondent tried to move their business/office but couldn't move",
      type: 'Boolean',
    },
    {
      colName: 'location_impact_other',
      desc:
        'Flag variable that indicates whether the respondent  faced any other location related impacts',
      type: 'Boolean',
    },
    {
      colName: 'no_location_impact',
      desc:
        'Flag variable that indicates whether the respondent  faced none of the provided location related impacts',
      type: 'Boolean',
    },
    {
      colName: 'eqty_ownrshp_impact_sold_entire_business',
      desc:
        'Flag variable that indicates whether the respondent sold their entire business',
      type: 'Boolean',
    },
    {
      colName: 'eqty_ownrshp_impact_tried_couldnt_sell_business',
      desc:
        'Flag variable that indicates whether the respondent tried to sell their entire business but could not find buyers',
      type: 'Boolean',
    },
    {
      colName: 'eqty_ownrshp_impact_sold_some_business_equity',
      desc:
        'Flag variable that indicates whether the respondent sold some equity (ownership) of their business',
      type: 'Boolean',
    },
    {
      colName: 'eqty_ownrshp_impact_tried_couldnt_sell_some_equity',
      desc:
        'Flag variable that indicates whether the respondent tried to sell some of their equity but could not find buyers',
      type: 'Boolean',
    },
    {
      colName: 'eqty_ownrshp_impact_other',
      desc:
        'Flag variable that indicates whether the respondent  faced any other equity and ownership related impacts',
      type: 'Boolean',
    },
    {
      colName: 'no_eqty_ownrshp_impact',
      desc:
        'Flag variable that indicates whether the respondent faced none of the provided equity and ownership related impacts',
      type: 'Boolean',
    },
    {
      colName: 'fin_effect_other',
      desc:
        'Flag variable that indicates if the respondent faced any other finiancial impatcs',
      type: 'Boolean',
    },
    {
      colName: 'n_employes_pre_covid',
      desc: 'How many people did your business employ before the pandemic?',
      type: 'Categorical',
    },
    {
      colName: 'wrkfrc_size_chng_2020_v_2019',
      desc:
        'Compared to 2019, how has the size of your workforce changed in 2020 (During the pandemic)?',
      type: 'Categorical',
    },
    {
      colName: 'revenue_chng_2020_v_2019',
      desc:
        'Compared to 2019, how have your business revenues changed in 2020 (During the pandemic)?',
      type: 'Categorical',
    },
    {
      colName: 'savings_chng_2020_v_2019',
      desc:
        "Compared to 2019, how has your business's savings changed in 2020 (During the pandemic)?",
      type: 'Categorical',
    },
    {
      colName: 'accomondation_service_offered_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent used to provide Accommodation services (overnight stay) before the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'adventure_equipment_service_offered_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent used to provide Adventure equipments renting services before the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'adventure_sports_service_offered_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent used to provide Adventure sports (rafting, bungee, etc.) services before the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'bar_service_offered_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent used to provide Bar services before the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'flight_booking_service_offered_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent used to provide Flight booking services before the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'food_delivery_service_offered_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent used to provide Food delivery services before the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'gymnasium_service_offered_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent used to provide Gymnasium services before the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'hotel_booking_service_offered_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent used to provide Hotel booking services before the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'online_service_offered_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent used to provide Online services (booking, order management, delivery) before the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'restaurant_service_offered_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent used to provide Restaurant services before the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'souvenir_shop_service_offered_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent used to provide Souvenirs and/or shops services before the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'spa_services_offered_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent used to provide Spa services before the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'swimming_pool_service_offered_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent used to provide Swimming pool services before the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'tour_package_service_offered_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent used to provide Tour packages services before the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'travel_guide_porter_service_offered_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent used to provide Travel guides and/or porters services before the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'vehicle_booking_service_offered_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent used to provide Vehicle booking services before the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'other_service_offered_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent used to provide any other services before the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'accomondation_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Accommodation services (overnight stay) after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'restaurant_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Restaurant services after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'bar_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Bar services after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'gymnasium_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Gymnasium services after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'spa_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Spa services after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'swimming_pool_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Swimming pool services after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'flight_booking_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Flight booking services after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'travel_guide_porter_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Travel guides and/or porters services after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'adventure_sport_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Adventure sports services (rafting, bungee, etc.) after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'adventure_equipment_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Adventure equipments renting services after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'tour_package_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Tour packages services after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'vehicle_booking_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Vehicle booking services after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'hotel_booking_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Hotel booking services after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'souvenir_shop_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Souvenirs and/or shops services after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'food_delivery_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Food delivery services after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'online_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Online services (booking, order management, delivery) after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'isolation_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Isolation services after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'quarantine_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provides Quarantine services after the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'other_service_offered_post_covid',
      desc:
        'Flag variable that indicates whether the respondent provide any other services after the pandemic.',
      type: 'Boolean',
    },
  ],
  businessPreparedness: [
    {
      colName: 'id',
      desc: 'An identifier variable that uniquely identifies each response',
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
      colName: 'hhs_measures_placed_sanitizers',
      desc:
        'Flag variable that indicates whether the respondent placed sanitizers at prominent locations as a part of health and sanitation measures duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'hhs_measures_trained_employes_on_hhs',
      desc:
        'Flag variable that indicates whether the respondent trained their employees on HHS (Health, hygiene and sanitation) as a part of health and sanitation measures duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'hhs_measures_placed_thermal_screening',
      desc:
        'Flag variable that indicates whether the respondent placed thermal screening and disinfection as a part of health and sanitation measures duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'hhs_measures_maintained_social_distancing',
      desc:
        'Flag variable that indicates whether the respondent maintained social distancing at their business premises as a part of health and sanitation measures duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'hhs_measures_implemented_cashless_payment',
      desc:
        'Flag variable that indicates whether the respondent Introduced/Implemented cashless payments as a part of health and sanitation measures duirng the pandemic',
      type: 'Boolean',
    },
    {
      colName: 'hhs_measures_discontinued_buffed_services',
      desc:
        'Flag variable that indicates whether the respondent discontinued buffet services (applicable for hotels and restaurants only) as a part of health and sanitation measures duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'hhs_measures_added_covid_friendly_marketing',
      desc:
        'Flag variable that indicates whether the respondent added COVID-19 friendly marketing messages as a part of health and sanitation measures duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'hhs_measures_outsourced_services',
      desc:
        'Flag variable that indicates whether the respondent Outsourced certain services like order management, delivery, etc. as a part of health and sanitation measures duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'other_hhs_measures',
      desc:
        'Flag variable that indicates whether the respondent employ any other actions as a part of health and sanitation measures duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'no_hhs_measures',
      desc:
        "Flag variable that indicates if the respondent didn't employ any health and sanitation related measures duirng the pandemic",
      type: 'Boolean',
    },
    {
      colName: 'wrkrs_hlth_informed_covid_saftey_measures',
      desc:
        'Flag variable that indicates whether the respondent implemented saftey measures for workers by Informing them on Covid-19 transmission and prevention measures duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'wrkrs_hlth_encouraged_home_stay_if_sick',
      desc:
        'Flag variable that indicates whether the respondent implemented saftey measures for workers by Encouraging them to stay home when they feel sick duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'wrkrs_hlth_maintained_social_distancing',
      desc:
        'Flag variable that indicates whether the respondent implemented saftey measures for workers by maintaining social distancing between them duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'wrkrs_hlth_implemented_working_shifts',
      desc:
        'Flag variable that indicates whether the respondent implemented saftey measures for workers by working in shifts to reduce congestion duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'wrkrs_hlth_implemented_remote_working',
      desc:
        'Flag variable that indicates whether the respondent provided saftey measures for workers by teleworking (remote working, work from home, etc.) duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'wrkrs_hlth_performed_temperature_checks',
      desc:
        'Flag variable that indicates whether the respondent implemented saftey measures for workers by performing temperature checks duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'wrkrs_hlth_provided_ppe',
      desc:
        'Flag variable that indicates whether the respondent implemented saftey measures for workers by providing personal protection equipment like masks duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'wrkrs_hlth_provided_paid_sick_leave',
      desc:
        'Flag variable that indicates whether the respondent implemented saftey measures for workers by providing/extending paid sick leave duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'wrkrs_hlth_provided_covid_insurance',
      desc:
        'Flag variable that indicates whether the respondent implemented saftey measures for workers by Providing Covid-19 insurance duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'other_wrkrs_hlth_measures',
      desc:
        'Flag variable that indicates whether the respondent implemented any other saftey measures for workers duirng the pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'no_wrkrs_hlth_measures',
      desc:
        "Flag variable that indicates if the respondent didn't implement any saftey measures for workers duirng the pandemic.",
      type: 'Boolean',
    },
    {
      colName: 'internl_recvry_strategy_reduce_prdocution',
      desc:
        'Flag variable that indicates whether the respondent reduced production of goods or services compared to 2019 as a strategic action due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'internl_recvry_strategy_increase_production',
      desc:
        'Flag variable that indicates whether the respondent increase production due to increased demand compared to Dec 2020 as a strategic action due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'internl_recvry_strategy_diversify_offerings',
      desc:
        'Flag variable that indicates whether the respondent diversified service offerings as a response to new demands (producing masks, sanitizer, etc.).',
      type: 'Boolean',
    },
    {
      colName: 'internl_recvry_strategy_start_different_business',
      desc:
        'Flag variable that indicates whether the respondent has started(or planning to start) a different business as a strategic action due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'internl_recvry_strategy_diversify_sales_channels',
      desc:
        'Flag variable that indicates whether the respondent has diversified(or planning to diversify) its sales channels \u2013 online marketing, sales, delivery, etc. as a strategic action due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'internl_recvry_strategy_retrain_workers',
      desc:
        'Flag variable that indicates whether the respondent have implemented re-training of their workers as a strategic action due to Covid-19 pandemic',
      type: 'Boolean',
    },
    {
      colName: 'other_internl_recvry_strategy',
      desc:
        'Flag variable that indicates whether the respondent have implemented any other strategic action as a response to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'no_internl_recvry_strategy',
      desc:
        "Flag variable that indicates if the respondent haven't taken any strategic action due to Covid-19 pandemic.",
      type: 'Boolean',
    },
    {
      colName: 'externl_recvry_strategy_negotiate_bank_paymnts',
      desc:
        'Flag variable that indicates whether the respondent is negotiating (or planning to negotiate) payment terms with banks and suppliers as a response to impacts brought by Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'externl_recvry_strategy_lobby_support_trade_unions',
      desc:
        'Flag variable that indicates whether the respondent is providing (or planning to provide) lobbying support to trade unions and associations as a response to impacts brought by Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'externl_recvry_strategy_negotiate_with_wrkrs_union',
      desc:
        'Flag variable that indicates whether the respondent is negotiating (or planning to negotiate) with workers\u2019 unions as a response to impacts brought by Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'externl_recvry_strategy_negotiate_with_property_owner',
      desc:
        'Flag variable that indicates whether the respondent is negotiating (or planning to negotiate) with property owners, house owners, renters, landowners, etc. as a response to impacts brought by Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'externl_recvry_strategy_partner_with_other_business',
      desc:
        'Flag variable that indicates whether the respondent is partnering (or planning to partner) with other businesses as a response to impacts brought by Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'externl_recvry_strategy_increase_shareholders',
      desc:
        'Flag variable that indicates whether the respondent is Increasing (or planning to Increase) the number of shareholders as a response to impacts brought by Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'externl_recvry_strategy_share_assets_other_business',
      desc:
        'Flag variable that indicates whether the respondent is sharing (or planning to share) property and assets with other businesses as a response to impacts brought by Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'other_externl_recvry_strategy',
      desc:
        'Flag variable that indicates whether the respondent is undertaking any other actions as a response to impacts brought by Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'no_externl_recvry_strategy',
      desc:
        'Flag variable that indicates whether the respondent is not undertaking (or planning to undertake) any actions as a response to impacts brought by Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'has_dedictd_covid_desk',
      desc: 'Does your business have a dedicated COVID-19 desk or personnel?',
      type: 'Boolean',
    },
  ],
  businessNeed: [
    {
      colName: 'id',
      desc: 'An identifier variable that uniquely identifies each response',
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
      colName: 'preferred_gov_rcvry_policy_establish_covid_info_source',
      desc:
        'Flag variable that indicates whether the respondent observed the need of establishment of an authentic source of information for government\u2019s COVID-related communications (e.g. health advisories, directives, etc.) for their business',
      type: 'Boolean',
    },
    {
      colName: 'preferred_gov_rcvry_policy_regulate_entry_ports',
      desc:
        'Flag variable that indicates whether the respondent observed the need of regulation of port of entries such as borders, airports for their business',
      type: 'Boolean',
    },
    {
      colName: 'preferred_gov_rcvry_policy_establish_trsm_protection_fund',
      desc:
        'Flag variable that indicates whether the respondent observed the need of establishment of government\u2019s tourism protection fund for their business',
      type: 'Boolean',
    },
    {
      colName: 'preferred_gov_rcvry_policy_establish_job_retention_fund',
      desc:
        'Flag variable that indicates whether the respondent observed the need of establishment of job retention fund for their business',
      type: 'Boolean',
    },
    {
      colName: 'preferred_rcvry_gov_policy_provision_finance_assistance',
      desc:
        'Flag variable that indicates whether the respondent observed the need of provision of financial assistance (e.g. no-collateral loans, subsidized loans, etc.) for their business',
      type: 'Boolean',
    },
    {
      colName: 'preferred_rcvry_gov_policy_categorize_safe_unsafe_business',
      desc:
        'Flag variable that indicates whether the respondent observed the need of government provision to categorize safe and unsafe businesses (e.g. red, green, yellow stickers)',
      type: 'Boolean',
    },
    {
      colName: 'preferred_gov_rcvry_policy_skill_enhancement_training',
      desc:
        'Flag variable that indicates whether the respondent observed the need of skill enhancement training to human resources for their business',
      type: 'Boolean',
    },
    {
      colName: 'preferred_gov_rcvry_policy_training_on_hhs',
      desc:
        'Flag variable that indicates whether the respondent observed the need of training or TOT (Training of Trainers) on Health, Hygiene and Sanitation from the government for their business',
      type: 'Boolean',
    },
    {
      colName: 'other_preferred_gov_rcvry_policy',
      desc:
        'Flag variable that indicates whether the respondent observed the need of any other policy level support from the government for their business',
      type: 'Boolean',
    },
    {
      colName: 'problms_next_6_mnths_pay_existing_loans',
      desc:
        'Flag variable that indicates whether the respondent observed their business will have difficulties in paying back existing loans within next six months.',
      type: 'Boolean',
    },
    {
      colName: 'problms_next_6_mnths_acquire_add_funds',
      desc:
        'Flag variable that indicates whether the respondent observed their business will have difficulties to acquire additional loans or funds within next six months.',
      type: 'Boolean',
    },
    {
      colName: 'problms_next_6_mnths_acquire_pay_taxes',
      desc:
        'Flag variable that indicates whether the respondent observed their business will have difficulties in paying its taxes within next six months.',
      type: 'Boolean',
    },
    {
      colName: 'problms_next_6_mnths_cover_operating_costs',
      desc:
        'Flag variable that indicates whether the respondent observed their business will have difficulties in covering its operating costs within next six months.',
      type: 'Boolean',
    },
    {
      colName: 'problms_next_6_mnths_labor_related_issues',
      desc:
        'Flag variable that indicates whether the respondent observed that their business will most likely face labor-related issues within next six months.',
      type: 'Boolean',
    },
    {
      colName: 'problms_next_6_mnths_attract_enough_costumers',
      desc:
        'Flag variable that indicates whether the respondent observed that their business will have difficulties in getting enough customers required for its survival within next six months.',
      type: 'Boolean',
    },
    {
      colName: 'no_problms_next_6_mnths',
      desc:
        'Flag variable that indicates whether the respondent observed that their business will not have any of the above difficulties within next six months.',
      type: 'Boolean',
    },
    {
      colName: 'preferred_loan_pybck_incntv',
      desc:
        'Which of the following loan payback-related assistance will be most helpful to you?',
      type: 'Categorical',
    },
    {
      colName: 'preferred_fund_aprvl_incntv',
      desc:
        'Which of the following funds-related assistance will be most helpful to you?',
      type: 'Categorical',
    },
    {
      colName: 'preferred_fin_asstnc_source',
      desc:
        'What is your preferred source (first choice) of financial assistance that is most appropriate for your business?',
      type: 'Categorical',
    },
    {
      colName: 'preferred_tax_asstnc',
      desc:
        'Which of the following tax-related assistance will be most helpful to you? (Choose your first priority)',
      type: 'Categorical',
    },
    {
      colName: 'preferred_cost_asstnc',
      desc:
        'Which of the following operating costs-related assistance will be most helpful to you? (Choose one)',
      type: 'Categorical',
    },
    {
      colName: 'preferred_labor_asstnc',
      desc:
        'Which of the following labor-related assistance will be most helpful to you? (Choose one)',
      type: 'Categorical',
    },
    {
      colName: 'preferred_outreach_asstnc',
      desc:
        'Which of the following business outreach-related assistance will be most helpful to you?',
      type: 'Categorical',
    },
    {
      colName: 'do_u_know_of_gov_schemes',
      desc:
        'The government has announced different schemes for the revival of the tourism businesses. Have you used any of such schemes?',
      type: 'Categorical',
    },
    {
      colName: 'gov_schemes_difficult_to_understand',
      desc:
        'Flag variable that indicates whether the respondent observed that government announced schemes are difficult to understand .',
      type: 'Boolean',
    },
    {
      colName: 'gov_schemes_hard_to_use',
      desc:
        'Flag variable that indicates whether the respondent observed that government announced schemes are not easy to use .',
      type: 'Boolean',
    },
    {
      colName: 'gov_schemes_not_sufficient',
      desc:
        'Flag variable that indicates whether the respondent observed that government announced schemes are not sufficient .',
      type: 'Boolean',
    },
  ],
  businessOutlook: [
    {
      colName: 'id',
      desc: 'An identifier variable that uniquely identifies each response',
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
      colName: 'how_lng_covid_dsrupt_last',
      desc:
        'How much longer do you expect the disruption due to COVID-19 to last?',
      type: 'Categorical',
    },
    {
      colName: 'revenue_gen_21_v_19',
      desc:
        'Compared to 2019, how much revenues does your business expect to earn in 2021?',
      type: 'Categorical',
    },
    {
      colName: 'wrkfrc_size_chng_21_v_19',
      desc:
        'Compared to 2019, what percentage of workforce will your business employ in 2021?',
      type: 'Categorical',
    },
    {
      colName: 'rcvry_diffclty_winning_tourist_confidence',
      desc:
        'Flag variable that indicates whether the respondent thinks that winning the confidence of tourists and guests in the context of COVID-19 will be one of their biggest difficulties in 2021.',
      type: 'Boolean',
    },
    {
      colName: 'rcvry_diffclty_understanding_source_markets',
      desc:
        'Flag variable that indicates whether the respondent thinks that understanding and meeting the demands of source markets (source markets are foreign or domestic places from where the tourists arrive) will be one of their biggest difficulties in 2021.',
      type: 'Boolean',
    },
    {
      colName: 'rcvry_diffclty_ensuring_tourist_health_saftey',
      desc:
        'Flag variable that indicates whether the respondent thinks that ensuring health and safety measures for the guests and tourists will be one of their biggest difficulties in 2021.',
      type: 'Boolean',
    },
    {
      colName: 'rcvry_diffclty_ensuring_workers_health_saftey',
      desc:
        'Flag variable that indicates whether the respondent thinks that ensuring health and safety measures for the workforce will be one of their biggest difficulties in 2021.',
      type: 'Boolean',
    },
    {
      colName: 'rcvry_diffclty_goods_shortage',
      desc:
        'Flag variable that indicates whether the respondent thinks that shortage of goods, supplies / input materials will be one of their biggest difficulties in 2021.',
      type: 'Boolean',
    },
    {
      colName: 'rcvry_diffclty_human_resource_shortage',
      desc:
        'Flag variable that indicates whether the respondent thinks that shortage of human resource will be one of their biggest difficulties in 2021.',
      type: 'Boolean',
    },
    {
      colName: 'rcvry_diffclty_cash_flow_shortage',
      desc:
        'Flag variable that indicates whether the respondent thinks that shortage of cash flow will be one of their biggest difficulties in 2021.',
      type: 'Boolean',
    },
    {
      colName: 'rcvry_diffclty_additional_fund_shortage',
      desc:
        'Flag variable that indicates whether the respondent thinks that shortage of additional loans or funds will be one of their biggest difficulties in 2021.',
      type: 'Boolean',
    },
    {
      colName: 'other_rcvry_diffclty',
      desc:
        'Flag variable that indicates whether the respondent thinks any other issues will be one of their biggest difficulties in 2021.',
      type: 'Boolean',
    },
    {
      colName: 'most_significant_rcvry_difficulty',
      desc:
        'We also asked businesses to rank order their choices for the above multiselect question. This column captures what each respondent chose as their first option.',
      type: 'Categorical',
    },
    {
      colName: 'biggest_support_rcvry',
      desc:
        'Who do you think will be the biggest support for your business in 2021?',
      type: 'Categorical',
    },
    {
      colName: 'perm_stopped_not_started_new_business',
      desc:
        "Flag variable that indicates whether the respondent haven't started any other businesses.",
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_new_trsm_business',
      desc:
        'Flag variable that indicates whether the respondent have started a new business in the tourism sector',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_new_non_trsm_business',
      desc:
        'Flag variable that indicates whether the respondent have started a new business in a non-tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_will_retrn_to_trsm_business',
      desc: 'Do you intend to return to the tourism business in the future?',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_hotel_accommodation_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism business in  Hotel and accommodation sub-sector',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_restaurant_bar_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism business in  Restaurant and Bar sub-sector',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_travel_tours_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism business in Travel and Tours sub-sector',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_trekking_mountaineering_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism business in  Trekking or Mountaineering sub-sector',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_adventure_sports_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism business in Adventure Sports sub-sector',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_other_trsm_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism business in any other sub-sector',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_accountancy_finance_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business in Accountancy, banking, finance sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_consulting_management_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business in Business, consulting and management sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_charity_voluntary_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business in Charity and voluntary works sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_art_design_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business in Creative arts and designsector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_energy_utillities_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business in Energy and utilities sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_engineering_manufacturing_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business in Engineering and manufacturing sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_environment_agriculture_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business in Environment and agriculture sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_healthcare_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business inHealthcare sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_information_technology_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business in Information Technology sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_law_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business in Law .',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_marketing_pr_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business in Marketing, advertising and Public Relations sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_internet_media_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business in Media and Internet sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_construction_property_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business in Property and construction sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_public_services_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business in Public services and administration sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_retail_sales_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business in retail and sales sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_teaching_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business in Teaching/Education  sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_logistics_transport_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business in Transport and logistics sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_other_non_tourism_business',
      desc:
        'Flag variable that indicates whether the respondent has strated new business in any other sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_new_job',
      desc: 'Have you started a new job?',
      type: 'Categorical',
    },
    {
      colName: 'perm_stopped_started_shopkeeper_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism job as a shopkeeper',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_tour_guide_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism job as a tour guide',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_trekking_guide_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism job as a trekking guide',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_rafting_guide_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism job as a rafting guide ',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_mountain_guide_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism job as a mountain guide ',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_driver_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism job as a driver',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_travel_agent_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism job as a travel agent',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_flight_attendant_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism job as a flight attendant',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_pilot_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism job as a pilot',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_chef_cook_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism job as a chef/cook',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_hotel_manager_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism job as a hotel manager',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_hotel_staff_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism job as a hotel staff',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_waiter_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism job as a waiter',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_bartender_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism job as a bartender',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_other_tourism_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new tourism job in any other position.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_accountancy_finance_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job in Accountancy, banking, finance sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_consulting_management_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job in Business, consulting and management sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_charity_voluntary_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job in Charity and voluntary works sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_art_design_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job in Creative arts and designsector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_energy_utillities_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job in Energy and utilities sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_engineering_manufacturing_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job in Engineering and manufacturing sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_environment_agriculture_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job in Environment and agriculture sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_healthcare_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job inHealthcare sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_information_technology_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job in Information Technology sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_law_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job in Law sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_marketing_pr_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job in Marketing, advertising and Public Relations sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_internet_media_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job in Media and Internet sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_construction_property_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job in Property and construction sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_public_services_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job in Public services and administration sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_sales_retail_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job in retail and sales sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_teaching_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job in Teaching/Education  sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_logistics_transport_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job in Transport and logistics sector.',
      type: 'Boolean',
    },
    {
      colName: 'perm_stopped_started_other_non_trsm_job',
      desc:
        'Flag variable that indicates whether the respondent has strated new job in any other sector.',
      type: 'Boolean',
    },
  ],
  workforceImpact: [
    {
      colName: 'id',
      desc: 'An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'submission_date',
      desc: 'Date when the respondent submittied the survey',
      type: 'Timestamp',
    },
    {
      colName: 'gender_individual',
      desc: 'Gender of respondent',
      type: 'Categorical',
    },
    {
      colName: 'age_individual',
      desc: 'Age of respondent',
      type: 'Categorical',
    },
    {
      colName: 'education_level_individual',
      desc: 'Education level of respondent',
      type: 'Categorical',
    },
    {
      colName: 'years_of_experience_individual',
      desc: 'Years of experience of respondent',
      type: 'Categorical',
    },
    {
      colName: 'permanent_district_individual',
      desc: 'Permanent dictrict of residence of the respondent.',
      type: 'Text',
    },
    {
      colName: 'temporary_district_individual',
      desc: 'Temporary dictrict of residence of the respondent.',
      type: 'Text',
    },
    {
      colName: 'occpatn_shopkeeper_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondant was shopkeeper before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_tour_guide_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was tour guide before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_trekking_guide_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was trekking guide before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_rafting_guide_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was rafting guide before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_mountain_guide_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was mountain guide before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_driver_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was driver before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_travel_agent_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was travel agent before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_flight_attendent_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was flight attendant before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_pilot_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was pilot before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_cook_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was chef/cook before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_hotel_manager_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was hotel manager before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_hotel_staff_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was hotel staff before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_waiter_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was waiter before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_bartender_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was bartender before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_porter_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was porter before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'other_occpatn_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent had any other main occupation before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'had_frml_employment_contract_pre_covid',
      desc:
        'Did you have a formal employment contract with your employer while working in the tourism sector before COVID-19?',
      type: 'Boolean',
    },
    {
      colName: 'had_pan_pre_covid',
      desc: 'Did you have a PAN(Personal Account Number) number before covid?',
      type: 'Boolean',
    },
    {
      colName: 'wrk_type_seasonal_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent employment type was seasonal work.',
      type: 'Boolean',
    },
    {
      colName: 'wrk_type_daily_wages_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent employment type was daily wages.',
      type: 'Boolean',
    },
    {
      colName: 'wrk_type_monthly_salary_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent employment type was monthly salary.',
      type: 'Boolean',
    },
    {
      colName: 'other_wrk_type_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent employment was any other type.',
      type: 'Boolean',
    },
    {
      colName: 'sesonal_work_period',
      desc:
        'On average, how many months (in a year) did you used to work in the tourism sector?',
      type: 'Categorical',
    },
    {
      colName: 'trsm_major_work_district',
      desc:
        'Text variable that containes name of districts where respondent does major tourism work.',
      type: 'Text',
    },
    {
      colName: 'prsnt_job_status',
      desc: 'Are you still working in the tourism sector?',
      type: 'Categorical',
    },
    {
      colName: 'had_to_change_job_in_trsm',
      desc: 'Did you have to change your profession within the tourism sector?',
      type: 'Boolean',
    },
    {
      colName: 'job_in_trsm_changed_to_shopkeeper',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is shopkeeper in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'job_in_trsm_changed_to_tour_guide',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is tour guide in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'job_in_trsm_changed_to_trekking_guide',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is trekking guide in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'job_in_trsm_changed_to_rafting_guide',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is rafting guide in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'job_in_trsm_changed_to_mountain_guide',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is mountain guide in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'job_in_trsm_changed_to_driver',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is driver in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'job_in_trsm_changed_to_travel_agent',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is travel agent in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'job_in_trsm_changed_to_flight_attendent',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is flight attendant in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'job_in_trsm_changed_to_pilot',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is pilot in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'job_in_trsm_changed_to_cook',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is chef/cook in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'job_in_trsm_changed_to_hotel_manager',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is hotel manager in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'job_in_trsm_changed_to_hotel_staff',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is hotel staff in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'job_in_trsm_changed_to_waiter',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is waiter in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'job_in_trsm_changed_to_bartender',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is bartender in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'job_in_trsm_changed_to_porter',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is porter in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'job_in_trsm_changed_to_other',
      desc:
        'Flag variable that indicates whether the respondent currently has any other main occupation in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'had_to_change_employer_in_trsm',
      desc: 'Did you have to change the employer in the tourism sector?',
      type: 'Boolean',
    },
    {
      colName: 'has_frml_employment_contract_current_trsm_job',
      desc: 'Have you signed a written contract for current employment?',
      type: 'Boolean',
    },
    {
      colName: 'have_to_pay_tax_current_trsm_job',
      desc:
        'Do you have to pay taxes on your income in your current employment?',
      type: 'Boolean',
    },
    {
      colName: 'additional_occpatn_agriculture_animal_husbandry',
      desc:
        'Flag variable that indicates whether the respondent is also working on agriculture and animal husbandry  sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_occpatn_daily_wages',
      desc:
        'Flag variable that indicates whether the respondent is also working on daily wages sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_occpatn_business_occupation',
      desc:
        'Flag variable that indicates whether the respondent is also working on Business / Occupation  sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_occpatn_job_estate',
      desc:
        'Flag variable that indicates whether the respondent is also working on Job / estate sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_occpatn_professional_work',
      desc:
        'Flag variable that indicates whether the respondent is also working on Professional work (journalist, lawyer, consultant, contractor, priest, etc.) sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_occpatn_other',
      desc:
        'Flag variable that indicates whether the respondent is also working on any other sectors.',
      type: 'Boolean',
    },
    {
      colName: 'also_had_to_change_additional_trsm_job',
      desc: 'Did you have to change your tourism-related occupation?',
      type: 'Boolean',
    },
    {
      colName: 'additional_trsm_job_changed_to_shopkeeper',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is shopkeeper in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_trsm_job_changed_to_tour_guide',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is tour guide in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_trsm_job_changed_to_trekking_gude',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is trekking guide in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_trsm_job_changed_to_rafting_guide',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is rafting guide in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_trsm_job_changed_to_mountain_guide',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is mountain guide in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_trsm_job_changed_to_driver',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is driver in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_trsm_job_changed_to_travel_agent',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is travel agent in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_trsm_job_changed_to_flight_attendant',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is flight attendant in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_trsm_job_changed_to_pilot',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is pilot in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_trsm_job_changed_to_cook',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is chef/cook in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_trsm_job_changed_to_hotel_manager',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is hotel manager in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_trsm_job_changed_to_hotel_staff',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is hotel staff in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_trsm_job_changed_to_waiter',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is waiter in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_trsm_job_changed_to_bartender',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is bartender in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'additionald_trsm_job_changed_to_porter',
      desc:
        'Flag variable that indicates whether the current main occupation of the respondant is porter in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'additional_trsm_job_changed_to_other',
      desc:
        'Flag variable that indicates whether the respondent currently has any other main occupation in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'had_to_change_employer_add_trsm_job',
      desc: 'Did you have to change the employer in the tourism sector?',
      type: 'Boolean',
    },
    {
      colName: 'has_frml_employment_contract_current_add_trsm_job',
      desc:
        'Do you have a formal employment contract in your current job/occupation?',
      type: 'Boolean',
    },
    {
      colName: 'have_to_pay_tax_current_add_trsm_job',
      desc:
        'Do you have to pay taxes to the state for your current employment in the tourism sector?',
      type: 'Boolean',
    },
    {
      colName: 'left_trsm_havent_got_new_job',
      desc:
        "Flag variable that indicates whether respondant didn't get a new job after leaving tourism sector",
      type: 'Boolean',
    },
    {
      colName: 'left_trsm_working_on_agriculture_animal_husbandry',
      desc:
        'Flag variable that indicates whether respondant started working on agriculture and animal husbandry after leaving tourism sector',
      type: 'Boolean',
    },
    {
      colName: 'left_trsm_working_on_daily_wages',
      desc:
        'Flag variable that indicates whether respondant started working on daily wages after leaving tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'left_trsm_working_on_busniess_occupation',
      desc:
        'Flag variable that indicates whether respondant started working on business / occupation after leaving tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'left_trsm_working_on_job_estate',
      desc:
        'Flag variable that indicates whether respondant started working on Job / estate  after leaving tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'left_trsm_working_on_professional_job',
      desc:
        'Flag variable that indicates whether respondant started working on professional work (journalist, lawyer, consultant, contractor, priest, etc.) after leaving tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'left_trsm_working_on_other_sector',
      desc:
        'Flag variable that indicates whether respondant started working on any other sector after leaving tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'self_had_to_migrate_to_different_location',
      desc: 'Due to COVID-19, did you have to migrate to a different location?',
      type: 'Categorical',
    },
    {
      colName: 'duration_self_temporary_migration',
      desc: 'For how long did you have to migrate to this location?',
      type: 'Categorcal',
    },
    {
      colName: 'self_migrated_to_district',
      desc: 'Which district have you migrated to?',
      type: 'Text',
    },
    {
      colName: 'family_had_to_migrate_to_different_location',
      desc:
        'Due to COVID-19, did your family have to migrate to a different location?',
      type: 'Categorical',
    },
    {
      colName: 'family_migrated_to_district',
      desc:
        'In which disctrict is your family staying now, i.e. where have they migrated to?',
      type: 'Text',
    },
    {
      colName: 'covid_infectn_self',
      desc: 'Have you ever been infected by COVID-19?',
      type: 'Boolean',
    },
    {
      colName: 'covid_infectn_self_time',
      desc: 'When did you contract COVID-19?',
      type: 'Categorical',
    },
    {
      colName: 'covid_infectn_family',
      desc: 'Have any other family members been infected by COVID-19?',
      type: 'Boolean',
    },
    {
      colName: 'lost_job_due_covid',
      desc:
        'Flag variable that indicates whether respondant lost job due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'lost_employment_due_covid',
      desc:
        'Flag variable that indicates whether respondant lost self-employment due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'took_low_esteem_job_due_covid',
      desc:
        'Flag variable that indicates whether respondant took up uninterested job (low self-esteem job) due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'worked_on_reduced_salary_due_covid',
      desc:
        'Flag variable that indicates whether respondant  had to work on reduced salary  due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'worrked_on_rotational_employment_due_covid',
      desc:
        'Flag variable that indicates whether respondant had to work on rotational employment due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'could_not_renew_licence_permit_due_covid',
      desc:
        "Flag variable that indicates whether respondant couldn't renew licences or permits due to Covid-19 pandemic.",
      type: 'Boolean',
    },
    {
      colName: 'suffered_other_impact_due_covid',
      desc:
        'Other Flag variable that indicates whether respondant suffer any other impact due to economic downturn brought by Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'did_not_suffer_impact_due_covid',
      desc:
        "Flag variable that indicates if the respondant didn't suffer any impact due to economic downturn brought by Covid-19 pandemic.",
      type: 'Boolean',
    },
    {
      colName: 'full_salary_last_date',
      desc:
        'When was the last time you received your full salary (or full income)?',
      type: 'Categorical',
    },
    {
      colName: 'took_loan_financial_instutions_due_covid',
      desc:
        'Flag variable that indicates whether respondant had to take loan from financial institutions due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'took_loan_friends_family_due_covid',
      desc:
        'Flag variable that indicates whether respondant had to take loan from friends and family due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'stopped_family_education_due_covid',
      desc:
        'Flag variable that indicates whether respondant stopped education of a family member  due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'stopped_family_health_services_due_covid',
      desc:
        'Flag variable that indicates whether respondant had to stop health services for family members due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'sold_personal_assets_due_covid',
      desc:
        'Flag variable that indicates whether respondant had to sell personal assets due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'sold_professional_assets_due_covid',
      desc:
        'Flag variable that indicates whether respondant had to sell professional assets, gears, equipments (camera, etc.) due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'sold_land_property_due_covid',
      desc:
        'Flag variable that indicates whether respondant had to sell land or property due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'suffered_other_econ_impact_due_covid',
      desc:
        'Flag variable that indicates whether respondant had to suffer any other impact due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'did_not_suffer_econ_impact_due_covid',
      desc:
        'Flag variable that indicates whether respondant did not suffer any impact due to Covid-19 pandemic.',
      type: 'Boolean',
    },
    {
      colName: 'self_incm_chng_2020_v_2019',
      desc: 'How did your total income change in 2020 compared to 2019?',
      type: 'Categorical',
    },
    {
      colName: 'thought_hard_about_covid_effects',
      desc:
        'Do you have to try hard (force yourself) not to think about the effects of COVID-19 on your livelihood?',
      type: 'Boolean',
    },
    {
      colName: 'felt_alert_frightened_due_covid_effects',
      desc:
        'Do you find yourself being unnaturally alert, frightened or terrified thinking about the effects of COVID-19 on your livelihood?',
      type: 'Boolean',
    },
    {
      colName: 'felt_isolated_from_people_environment',
      desc:
        'Do you feel isolated from the people, activities and environment around you?',
      type: 'Boolean',
    },
    {
      colName: 'had_bad_dreams_about_covid_effects',
      desc:
        'Do you have bad dreams (or find yourself worrying unwillingly) about the ill effects of COVID-19?',
      type: 'Boolean',
    },
    {
      colName: 'blamed_self_others_for_hardships_due_covid',
      desc:
        'For the hardships caused by COVID-19, do you often find yourself blaming others or yourself?',
      type: 'Boolean',
    },
    {
      colName: 'felt_increased_social_pressure_due_covid',
      desc:
        'Have you felt that family or social pressure has increased due to Covid-19?',
      type: 'Boolean',
    },
    {
      colName: 'felt_animosity_within_family_due_covid',
      desc:
        'Has Covid-19 caused animosity or strife among your family members?',
      type: 'Boolean',
    },
    {
      colName: 'took_mental_health_counselling_due_covid',
      desc:
        'Have you taken any kind of health counseling service for the mental stress brought by Covid-19?',
      type: 'Boolean',
    },
  ],
  workforcePreparedness: [
    {
      colName: 'id',
      desc: 'An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'submission_date',
      desc: 'Date when the respondent submittied the survey',
      type: 'Timestamp',
    },
    {
      colName: 'gender_individual',
      desc: 'Gender of respondent',
      type: 'Categorical',
    },
    {
      colName: 'age_individual',
      desc: 'Age of respondent',
      type: 'Categorical',
    },
    {
      colName: 'education_level_individual',
      desc: 'Education level of respondent',
      type: 'Categorical',
    },
    {
      colName: 'years_of_experience_individual',
      desc: 'Years of experience of respondent',
      type: 'Categorical',
    },
    {
      colName: 'permanent_district_individual',
      desc: 'Permanent dictrict of residence of the respondent.',
      type: 'Text',
    },
    {
      colName: 'temporary_district_individual',
      desc: 'Temporary dictrict of residence of the respondent.',
      type: 'Text',
    },
    {
      colName: 'occpatn_shopkeeper_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondant was shopkeeper before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_tour_guide_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was tour guide before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_trekking_guide_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was trekking guide before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_rafting_guide_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was rafting guide before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_mountain_guide_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was mountain guide before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_driver_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was driver before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_travel_agent_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was travel agent before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_flight_attendent_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was flight attendant before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_pilot_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was pilot before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_cook_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was chef/cook before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_hotel_manager_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was hotel manager before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_hotel_staff_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was hotel staff before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_waiter_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was waiter before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_bartender_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was bartender before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_porter_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was porter before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'other_occpatn_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent had any other main occupation before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'had_frml_employment_contract_pre_covid',
      desc:
        'Did you have a formal employment contract with your employer while working in the tourism sector before COVID-19?',
      type: 'Boolean',
    },
    {
      colName: 'had_pan_pre_covid',
      desc: 'Did you have a PAN(Personal Account Number) number before covid?',
      type: 'Boolean',
    },
    {
      colName: 'wrk_type_seasonal_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent employment type was seasonal work.',
      type: 'Boolean',
    },
    {
      colName: 'wrk_type_daily_wages_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent employment type was daily wages.',
      type: 'Boolean',
    },
    {
      colName: 'wrk_type_monthly_salary_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent employment type was monthly salary.',
      type: 'Boolean',
    },
    {
      colName: 'other_wrk_type_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent employment was any other type.',
      type: 'Boolean',
    },
    {
      colName: 'sesonal_work_period',
      desc:
        'On average, how many months (in a year) did you used to work in the tourism sector?',
      type: 'Categorical',
    },
    {
      colName: 'trsm_major_work_district',
      desc:
        'Text variable that containes name of districts where respondent does major tourism work.',
      type: 'Text',
    },
    {
      colName: 'have_alternative_income_source',
      desc:
        'Do you or your family have an alternative source of income other than tourism?',
      type: 'Boolean',
    },
    {
      colName: 'alternate_income_source_agriculture_animal_husbandry',
      desc:
        'Flag variable that indicates whether respondant has agriculture and animal husbandry as alternative source of income.',
      type: 'Boolean',
    },
    {
      colName: 'alternate_income_source_daily_wages',
      desc:
        'Flag variable that indicates whether respondant has daily wages as alternative source of income.',
      type: 'Boolean',
    },
    {
      colName: 'alternate_income_source_business_occupation',
      desc:
        'Flag variable that indicates whether respondant has business / occupation as alternative source of income.',
      type: 'Boolean',
    },
    {
      colName: 'alternate_income_source_job_estate',
      desc:
        'Flag variable that indicates whether respondant has job / estate as alternative source of income.',
      type: 'Boolean',
    },
    {
      colName: 'alternate_income_source_professional_work',
      desc:
        'Flag variable that indicates whether respondant has professional work (journalist, lawyer, consultant, contractor, priest, etc.) as alternative source of income.',
      type: 'Boolean',
    },
    {
      colName: 'other_alternate_income_source',
      desc:
        'Flag variable that indicates whether respondant has any other alternative source of income.',
      type: 'Boolean',
    },
    {
      colName: 'self_savings_chng_today_v_19',
      desc: 'Compared to the end of 2019, how much savings do you have now?',
      type: 'Categorical',
    },
    {
      colName: 'had_land_assets_pre_covid',
      desc:
        'Flag variable that indicates whether respondant had Land asests before Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'had_television_pre_covid',
      desc:
        'Flag variable that indicates whether respondant had Television before Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'had_cable_tv_pre_covid',
      desc:
        'Flag variable that indicates whether respondant had Cable TV connection before Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'had_computer_pre_covid',
      desc:
        'Flag variable that indicates whether respondant had Computer / laptop before Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'had_internet_pre_covid',
      desc:
        'Flag variable that indicates whether respondant had Internet before Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'had_telephone_pre_covid',
      desc:
        'Flag variable that indicates whether respondant had Telephone before Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'had_mobile_phone_pre_covid',
      desc:
        'Flag variable that indicates whether respondant had Mobile phone before Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'had_referigerator_pre_covid',
      desc:
        'Flag variable that indicates whether respondant had Refrigerator before Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'had_motorcycle_pre_covid',
      desc:
        'Flag variable that indicates whether respondant had Motorcycle before Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'had_personal_use_four_wheeler_pre_covid',
      desc:
        'Flag variable that indicates whether respondant had Four wheeler for self/family use before Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'had_professional_use_four_wheeler_pre_covid',
      desc:
        'Flag variable that indicates whether respondant had Four wheeler for commercial use before Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'did_not_have_mentioned_assets_pre_covid',
      desc:
        'Flag variable that indicates whether respondant had none of the above mentioned asests before Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'has_land_assets_post_covid',
      desc:
        'Flag variable that indicates whether respondant has Land asests after Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'has_television_post_covid',
      desc:
        'Flag variable that indicates whether respondant has Television after Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'has_cable_tv_post_covid',
      desc:
        'Flag variable that indicates whether respondant has Cable TV connection after Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'has_computer_post_covid',
      desc:
        'Flag variable that indicates whether respondant has Computer / laptop after Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'has_internet_post_covid',
      desc:
        'Flag variable that indicates whether respondant has Internet after Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'has_telephone_post_covid',
      desc:
        'Flag variable that indicates whether respondant has Telephone after Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'has_mobile_phone_post_covid',
      desc:
        'Flag variable that indicates whether respondant has Mobile phone after Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'has_referigerator_post_covid',
      desc:
        'Flag variable that indicates whether respondant has Refrigerator after Covid-19',
      type: 'Boolean',
    },
    {
      colName: 'has_motorcycle_post_covid',
      desc:
        'Flag variable that indicates whether respondant has Motorcycle after Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'has_personal_use_four_wheeler_post_covid',
      desc:
        'Flag variable that indicates whether respondant has Four wheeler for self/family use after Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'has_professional_use_four_wheeler_post_covid',
      desc:
        'Flag variable that indicates whether respondant has Four wheeler for commercial use after Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'do_not_have_mentioned_assets_post_covid',
      desc:
        'Flag variable that indicates whether respondant has none of the above mentioned asests after Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'has_outstanding_debt',
      desc: 'Do you have an outstanding debt?',
      type: 'Boolean',
    },
    {
      colName: 'num_depndnt_fml_membrs_pre_covid',
      desc:
        'How many family members, including yourself, depended on your income before Covid-19?',
      type: 'Categorical',
    },
    {
      colName: 'num_depndnt_fml_membrs_post_covid',
      desc:
        'How many family members, including yourself, depend on your income after Covid-19?',
      type: 'Categorical',
    },
    {
      colName: 'num_depndnt_fml_membrs_needs_post_covid',
      desc:
        'How many of your family members\u2019 basic needs can be met by your current income?',
      type: 'Categorical',
    },
    {
      colName: 'is_vaccinated_against_covid',
      desc: 'Have you been vaccinated against Covid-19?',
      type: 'Boolean',
    },
    {
      colName: 'has_received_covid_hhs_training',
      desc:
        'Have you received any health and safety training related to Covid-19?',
      type: 'Boolean',
    },
    {
      colName: 'received_hhs_training_from_goverment',
      desc:
        'Flag variable that indicates whether respondant recieved health and saftey training from Government.',
      type: 'Boolean',
    },
    {
      colName: 'received_hhs_training_from_ngo',
      desc:
        'Flag variable that indicates whether respondant recieved health and saftey training from NGO.',
      type: 'Boolean',
    },
    {
      colName: 'received_hhs_training_from_employer',
      desc:
        'Flag variable that indicates whether respondant recieved health and saftey training from Employer.',
      type: 'Boolean',
    },
    {
      colName: 'received_hhs_training_from_hotel_worker_association',
      desc:
        'Flag variable that indicates whether respondant recieved health and saftey training from Hotel / workers associations.',
      type: 'Boolean',
    },
    {
      colName: 'received_hhs_training_from_other_source',
      desc:
        'Flag variable that indicates whether respondant recieved health and saftey training from any other sources.',
      type: 'Boolean',
    },
    {
      colName: 'major_covid_info_source_is_family_friends',
      desc:
        'Flag variable that indicates whether respondant uses Family and friends to get information about Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'major_covid_info_source_is_social_media',
      desc:
        'Family and friends Flag variable that indicates whether respondant uses Social media to get information about Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'major_covid_info_source_is_radio',
      desc:
        'Flag variable that indicates whether respondant uses Radio to get information about Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'major_covid_info_source_is_television',
      desc:
        'Flag variable that indicates whether respondant uses Television to get information about Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'major_covid_info_source_is_newspapers',
      desc:
        'Flag variable that indicates whether respondant uses Newspapers to get information about Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'major_covid_info_source_is_nearby_health_service',
      desc:
        'Flag variable that indicates whether respondant uses Nearby health service provider to get information about Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'uses_other_major_covid_info_source',
      desc:
        'Flag variable that indicates whether respondant uses any other sources to get information about Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'learned_new_skills_during_pandemic',
      desc:
        'Did you learn any new skills when the your tourism-related job/profession was halted due to Covid-19?',
      type: 'Boolean',
    },
  ],
  workforceNeed: [
    {
      colName: 'id',
      desc: 'An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'submission_date',
      desc: 'Date when the respondent submittied the survey',
      type: 'Timestamp',
    },
    {
      colName: 'gender_individual',
      desc: 'Gender of respondent',
      type: 'Categorical',
    },
    {
      colName: 'age_individual',
      desc: 'Age of respondent',
      type: 'Categorical',
    },
    {
      colName: 'education_level_individual',
      desc: 'Education level of respondent',
      type: 'Categorical',
    },
    {
      colName: 'years_of_experience_individual',
      desc: 'Years of experience of respondent',
      type: 'Categorical',
    },
    {
      colName: 'permanent_district_individual',
      desc: 'Permanent dictrict of residence of the respondent.',
      type: 'Text',
    },
    {
      colName: 'temporary_district_individual',
      desc: 'Temporary dictrict of residence of the respondent.',
      type: 'Text',
    },
    {
      colName: 'occpatn_shopkeeper_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondant was shopkeeper before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_tour_guide_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was tour guide before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_trekking_guide_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was trekking guide before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_rafting_guide_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was rafting guide before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_mountain_guide_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was mountain guide before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_driver_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was driver before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_travel_agent_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was travel agent before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_flight_attendent_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was flight attendant before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_pilot_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was pilot before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_cook_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was chef/cook before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_hotel_manager_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was hotel manager before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_hotel_staff_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was hotel staff before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_waiter_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was waiter before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_bartender_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was bartender before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_porter_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was porter before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'other_occpatn_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent had any other main occupation before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'had_frml_employment_contract_pre_covid',
      desc:
        'Did you have a formal employment contract with your employer while working in the tourism sector before COVID-19?',
      type: 'Boolean',
    },
    {
      colName: 'had_pan_pre_covid',
      desc: 'Did you have a PAN(Personal Account Number) number before covid?',
      type: 'Boolean',
    },
    {
      colName: 'wrk_type_seasonal_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent employment type was seasonal work.',
      type: 'Boolean',
    },
    {
      colName: 'wrk_type_daily_wages_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent employment type was daily wages.',
      type: 'Boolean',
    },
    {
      colName: 'wrk_type_monthly_salary_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent employment type was monthly salary.',
      type: 'Boolean',
    },
    {
      colName: 'other_wrk_type_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent employment was any other type.',
      type: 'Boolean',
    },
    {
      colName: 'sesonal_work_period',
      desc:
        'On average, how many months (in a year) did you used to work in the tourism sector?',
      type: 'Categorical',
    },
    {
      colName: 'trsm_major_work_district',
      desc:
        'Text variable that containes name of districts where respondent does major tourism work.',
      type: 'Text',
    },
    {
      colName: 'needs_health_training_for_recovery',
      desc:
        'Flag variable that indicates whether respondant observed the need of Health training or retraining to reduce the effects of Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'needs_employment_related_training_for_recovery',
      desc:
        'Flag variable that indicates whether respondant observed the need of Employment-related training or retraining to reduce the effects of Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'needs_skills_learning_opportunity_for_recovery',
      desc:
        'Flag variable that indicates whether respondant observed the need of Opportunity to learn new skills to reduce the effects of Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'needs_new_employment_opportunity_for_recovery',
      desc:
        'Flag variable that indicates whether respondant observed the need of New employment opportunities to reduce the effects of Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'needs_subsidized_loans_for_recovery',
      desc:
        'Flag variable that indicates whether respondant observed the need of Subsidized loans to reduce the effects of Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'needs_interest_rate_discount_for_recovery',
      desc:
        'Flag variable that indicates whether respondant observed the need of Special discounts on interest rate to reduce the effects of Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'needs_tax_discount_for_recovery',
      desc:
        'Flag variable that indicates whether respondant observed the need of Tax discount to reduce the effects of Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'needs_emi_periods_extension_for_recovery',
      desc:
        'Flag variable that indicates whether respondant observed the need of Deferral or extension of EMI periods  to reduce the effects of Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'needs_provision_of_social_security_for_recovery',
      desc:
        'Flag variable that indicates whether respondant observed the need of Provision of social security system to reduce the effects of Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'needs_grant_for_recovery',
      desc:
        'Flag variable that indicates whether respondant observed the need of Grant to reduce the effects of Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'need_health_counselling_for_recovery',
      desc:
        'Flag variable that indicates whether respondant observed the need of Health counseling to reduce mental stres to reduce the effects of Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'need_other_incentives_for_recovery',
      desc:
        'Flag variable that indicates whether respondant observed the need of any other actions to reduce the effects of Covid-19.',
      type: 'Boolean',
    },
    {
      colName: 'no_need_of_any_recovery_incentives',
      desc:
        'Flag variable that indicates whether respondant was not affected by Covid-19 in any way',
      type: 'Boolean',
    },
    {
      colName: 'most_significant_recovery_incentive',
      desc:
        'We also asked respondants to rank order their choices for the above multiselect question. This column captures what each respondent chose as their first option.',
      type: 'Categorical',
    },
  ],
  workforceOutlook: [
    {
      colName: 'id',
      desc: 'An identifier variable that uniquely identifies each response',
      type: 'Text',
    },
    {
      colName: 'submission_date',
      desc: 'Date when the respondent submittied the survey',
      type: 'Timestamp',
    },
    {
      colName: 'gender_individual',
      desc: 'Gender of respondent',
      type: 'Categorical',
    },
    {
      colName: 'age_individual',
      desc: 'Age of respondent',
      type: 'Categorical',
    },
    {
      colName: 'education_level_individual',
      desc: 'Education level of respondent',
      type: 'Categorical',
    },
    {
      colName: 'years_of_experience_individual',
      desc: 'Years of experience of respondent',
      type: 'Categorical',
    },
    {
      colName: 'permanent_district_individual',
      desc: 'Permanent dictrict of residence of the respondent.',
      type: 'Text',
    },
    {
      colName: 'temporary_district_individual',
      desc: 'Temporary dictrict of residence of the respondent.',
      type: 'Text',
    },
    {
      colName: 'occpatn_shopkeeper_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondant was shopkeeper before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_tour_guide_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was tour guide before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_trekking_guide_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was trekking guide before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_rafting_guide_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was rafting guide before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_mountain_guide_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was mountain guide before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_driver_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was driver before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_travel_agent_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was travel agent before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_flight_attendent_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was flight attendant before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_pilot_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was pilot before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_cook_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was chef/cook before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_hotel_manager_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was hotel manager before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_hotel_staff_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was hotel staff before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_waiter_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was waiter before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_bartender_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was bartender before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'occpatn_porter_pre_covid',
      desc:
        'Flag variable that indicates whether the main occupation of the respondent was porter before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'other_occpatn_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent had any other main occupation before Covid-19 in the tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'had_frml_employment_contract_pre_covid',
      desc:
        'Did you have a formal employment contract with your employer while working in the tourism sector before COVID-19?',
      type: 'Boolean',
    },
    {
      colName: 'had_pan_pre_covid',
      desc: 'Did you have a PAN(Personal Account Number) number before covid?',
      type: 'Boolean',
    },
    {
      colName: 'wrk_type_seasonal_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent employment type was seasonal work.',
      type: 'Boolean',
    },
    {
      colName: 'wrk_type_daily_wages_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent employment type was daily wages.',
      type: 'Boolean',
    },
    {
      colName: 'wrk_type_monthly_salary_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent employment type was monthly salary.',
      type: 'Boolean',
    },
    {
      colName: 'other_wrk_type_pre_covid',
      desc:
        'Flag variable that indicates whether the respondent employment was any other type.',
      type: 'Boolean',
    },
    {
      colName: 'sesonal_work_period',
      desc:
        'On average, how many months (in a year) did you used to work in the tourism sector?',
      type: 'Categorical',
    },
    {
      colName: 'trsm_major_work_district',
      desc:
        'Text variable that containes name of districts where respondent does major tourism work.',
      type: 'Text',
    },
    {
      colName: 'estimated_fml_income_chng_21_v_19',
      desc:
        'What is the estimated income of your family in 2021 compared to 2019?',
      type: 'Categorical',
    },
    {
      colName: 'how_long_covid_effect_livelihood',
      desc:
        'How much longer will COVID-19 affect your livelihood? Provide your best estimate.',
      type: 'Categorical',
    },
    {
      colName: 'how_long_employment_return_normal',
      desc:
        'How long will it take for your employment to return to normal after the tourism sector is up and running again? Provide your best estimate.',
      type: 'Categorical',
    },
    {
      colName: 'major_trsm_challenge_winning_tourist_confidence',
      desc:
        "Flag variable that indicates whether respondant thinks Winning tourists' confidence can be one of the major challenges for the revival of tourism sector they are working in.",
      type: 'Boolean',
    },
    {
      colName: 'major_trsm_challenge_ensuring_hhs_compliance',
      desc:
        'Flag variable that indicates whether respondant thinks Ensuring HHS Compliance can be one of the major challenges for the revival of tourism sector they are working in.',
      type: 'Boolean',
    },
    {
      colName: 'major_trsm_challenge_overcoming_financial_challenge',
      desc:
        'Flag variable that indicates whether respondant thinks Overcoming financial challenges can be one of the major challenges for the revival of tourism sector they are working in.',
      type: 'Boolean',
    },
    {
      colName: 'major_trsm_challenge_decreased_tourist_numbers',
      desc:
        'Flag variable that indicates whether respondant thinks Decreased number of tourists can be one of the major challenges for the revival of tourism sector they are working in.',
      type: 'Boolean',
    },
    {
      colName: 'major_trsm_challenge_understanding_market_demands',
      desc:
        'Flag variable that indicates whether respondant thinks Understanding the demands and needs of the source market correctly can be one of the major challenges for the revival of tourism sector they are working in.',
      type: 'Boolean',
    },
    {
      colName: 'other_major_trsm_challenge',
      desc:
        'Flag variable that indicates whether respondant thinks of any other factors that can be one of the major challenges for the revival of tourism sector.',
      type: 'Boolean',
    },
    {
      colName: 'no_any_major_trsm_challenge',
      desc:
        'Flag variable that indicates whether respondant thinks there are no any challenges in the tourism sector that they are involved in .',
      type: 'Boolean',
    },
    {
      colName: 'most_significant_trsm_recovery_challenge',
      desc:
        'We also asked respondants to rank order their choices for the above multiselect question. This column captures what each respondent chose as their first option.',
      type: 'Categorical',
    },
    {
      colName: 'can_not_pay_rent_partially_if_same_situation_nxt_6_mnths',
      desc:
        "Flag variable that indicates whether respondant Won't be able to pay house / room rent (partially)  if the current situation continues for the next 6 months.",
      type: 'Boolean',
    },
    {
      colName: 'can_not_pay_rent_fully_if_same_situation_nxt_6_mnths',
      desc:
        "Flag variable that indicates whether respondant Won't be able to pay house / room rent (full) if the current situation continues for the next 6 months.",
      type: 'Boolean',
    },
    {
      colName: 'can_not_afford_health_expenses_if_same_situation_nxt_6_mnths',
      desc:
        "Flag variable that indicates whether respondant Won't be able to meet necessary health care expenses if the current situation continues for the next 6 months.",
      type: 'Boolean',
    },
    {
      colName:
        'can_not_afford_education_expenses_if_same_situation_nxt_6_mnths',
      desc:
        "Flag variable that indicates whether respondant Won't be able to afford necessary educational services if the current situation continues for the next 6 months.",
      type: 'Boolean',
    },
    {
      colName: 'can_not_afford_food_expenses_if_same_situation_nxt_6_mnths',
      desc:
        "Flag variable that indicates whether respondant Won't be able to meet fooding expenses if the current situation continues for the next 6 months.",
      type: 'Boolean',
    },
    {
      colName: 'can_not_acquire_loans_if_same_situation_nxt_6_mnths',
      desc:
        "Flag variable that indicates whether respondant Won't be able to acquire additional loans and borrowings  if the current situation continues for the next 6 months.",
      type: 'Boolean',
    },
    {
      colName: 'can_not_pay_existing_loans_if_same_situation_nxt_6_mnths',
      desc:
        "Flag variable that indicates whether respondant Won't be able to pay off existing loans if the current situation continues for the next 6 months.",
      type: 'Boolean',
    },
    {
      colName: 'will_suffer_other_problems_if_same_situation_nxt_6_mnths',
      desc:
        'Flag variable that indicates whether respondant will suffer any other problems if the current situation continues for the next 6 months.',
      type: 'Boolean',
    },
    {
      colName: 'will_not_suffer_any_problem_if_same_situation_nxt_6_mnths',
      desc:
        "Flag variable that indicates whether respondant won't have to suffer from Covid-19 in any way if the current situation continues for the next 6 months.",
      type: 'Boolean',
    },
    {
      colName: 'most_significant_problem_if_same_situation_nxt_6_months',
      desc:
        'We also asked respondants to rank order their choices for the above multiselect question. This column captures what each respondent chose as their first option.',
      type: 'Categorical',
    },
    {
      colName: 'has_assets_for_addtnl_loan',
      desc:
        'Do you have the necessary collateral/securities to secure additional loans?',
      type: 'Boolean',
    },
  ],
};

export default metaData;
