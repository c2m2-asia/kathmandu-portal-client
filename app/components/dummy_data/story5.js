import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import ZoomImage from 'components/StoryDetailView/ZoomImage';
import closedBusiness from 'images/closed-business.png';

const redColor = '#AC2020';

const story1 = (
  <Fragment>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      When we asked the 106 Kathmandu-based tourism entrepreneurs who took part
      in our tourism business survey about the kind of policy support that would
      help them recover from the pandemic, here’s what they said:
    </Typography>
    <img src={require('images/PolicySupportMultiples.png')} className="w-100" />
    <Typography
      className="w-50 mt-3"
      variant="caption"
      display="block"
      gutterBottom
      style={{ marginLeft: 'auto' }}
    >
      <b>
        What kind of policy level support from the government would be most
        helpful to your business?
      </b>
    </Typography>
    <Typography
      className="w-50"
      variant="caption"
      display="block"
      gutterBottom
      style={{ color: '#696969', marginLeft: 'auto' }}
    >
      Respondents could select more than one answer for this question. Each pie
      chart represents the percentage of respondents that choose a given option.
    </Typography>
    <Typography
      className="mt-3"
      paragraph
      display="block"
      style={{ color: 'rgba(0, 0, 0, 0.87)' }}
    >
      Unsurprisingly, the two most popular answers deal with financial
      assistance needed to support the economic recovery of tourism businesses.
      The third popular answer – “regulation at port of entries” – is driven by
      the need for improving mechanisms for enhancing tourism mobility in the
      region.
    </Typography>
    <Typography
      variant="h6"
      gutterBottom
      display="block"
      style={{ color: redColor }}
    >
      UNDERSTANDING TOURISM BUSINESSES’ NEED FOR FINANCIAL ASSISTANCE
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      According to our survey respondents, the pandemic has indeed been
      disproportionately harsh to the tourism sector: 18 of our respondents –
      nearly one out of every five – reported their businesses having to shut
      down permanently during the pandemic. Table below shows more details
      around these businesses.
    </Typography>
    <img src={closedBusiness} style={{ width: '100%' }} />
    <Typography
      className="mt-3"
      paragraph
      style={{ color: 'rgba(0, 0, 0, 0.87)' }}
    >
      With the country being closed to tourists for more than a year
      <sup style={{ color: redColor }}>1</sup>, small to medium-sized
      businessesMost of the respondents in our survey were small and
      medium-sized businesses (based on staff size) operating in the travel or
      accommodation segment were among the worst hit.
    </Typography>
    <Typography
      className="w-50"
      variant="caption"
      display="block"
      gutterBottom
      style={{ marginLeft: 'auto' }}
    >
      <span style={{ color: redColor }}>1.</span>&nbsp;
      <a
        style={{ textDecoration: 'none', color: 'inherit' }}
        href="https://www.himalmag.com/silent-squares-kathmandu-photo-essay-2020/"
        target="_blank"
      >
        <u>Silent squares</u>
      </a>{' '}
      , Giacomo D’orlando, Himal Southasian, April 2020
    </Typography>
    <Typography
      className="w-50"
      variant="caption"
      display="block"
      gutterBottom
      style={{ marginLeft: 'auto' }}
    >
      <span style={{ color: redColor }}>2.</span>&nbsp; Most of the respondents
      in our survey were small and medium-sized businesses
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      What’s worse is the fact that 66% (nearly 2 out of every 3) businesses
      that closed had been in operation for at last 6 years or more. They had
      survived the 2015 earthquake, even the economic blockade that followed.
      They couldn’t, however, survive the pandemic.
    </Typography>
    <Typography
      variant="h6"
      gutterBottom
      display="block"
      style={{ color: 'rgba(0, 0, 0, 0.87)' }}
    >
      EVEN THOSE WHO SURVIVED ARE BARELY FUNCTIONING
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      For the remaining 82 businesses that did manage to pull through, the
      situation doesn’t look very promising either. As we can see in the charts
      below, savings have dried up, with a whooping 86% reporting negative
      savings. And, nearly half of our “survivor” businesses are only just
      reopening after having temporarily shut down operations for at least a
      year.
    </Typography>
    <img
      src={require('images/CombineChart1CurrOpBusinesses.png')}
      className="w-100"
    />
    <Typography
      variant="h6"
      gutterBottom
      display="block"
      style={{ color: redColor }}
    >
      THE NEXT SIX MONTHS
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      The present reality of currently operational tourism businesses seems to
      align closely with these businesses’ outlook regarding their respective
      futures. Chart below shows the different kinds of problems our respondents
      reported they are likely to face in the next six months.
    </Typography>
    <img
      src={require('images/NextSixMonthsBusinessProblemsMultiples.png')}
      className="w-100"
    />
    <Typography
      className="w-50 mt-3"
      variant="caption"
      display="block"
      gutterBottom
      style={{ marginLeft: 'auto' }}
    >
      <b>
        Within the next six months, which of the following problems will your
        business face?
      </b>
    </Typography>
    <Typography
      className="w-50"
      variant="caption"
      display="block"
      gutterBottom
      style={{ color: '#696969', marginLeft: 'auto' }}
    >
      Respondents could select more than one answer for this question. Each pie
      chart represents the percentage of respondents that choose a given option.
    </Typography>

    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      As we can see, dwindling savings, near-zero revenues, and lack of
      customers have placed doubts about the survival of the 4 in 5 business who
      have somehow managed to stay afloat through the pandemic. With seven in
      ten businesses worried about not being able to gather funds required to
      keep their businesses running, and more than six out of ten businesses
      worried about not being able to meet their existing financial obligations,
      the situation is very alarming.
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      In fact, it could have already gotten much worse, given the fact that our
      survey was filled right before the second wave of COVID-19 hit Nepal.
    </Typography>
    <Typography
      variant="h6"
      gutterBottom
      display="block"
      style={{ color: redColor }}
    >
      WHAT MEASURES CAN BE TAKEN?
    </Typography>
    <Typography
      variant="h6"
      gutterBottom
      display="block"
      style={{ color: 'inherit' }}
    >
      PROVIDE SUPPORT FOR BUSINESSES TO COPE WITH PILING OPERATIONAL COSTS
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      7 in every 10 respondents that are currently operational (i.e. not
      permanently closed due to the pandemic) cite “covering operational costs”
      as their biggest worries for the next six months.
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      When we asked the 62 respondents who mentioned operational costs as one of
      their concerns about the kind of support they would need, here’s what they
      said:
    </Typography>
    <img src={require('images/PreferredOpsAsstncDist.png')} className="w-100" />
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      Providing subsidies and negotiation support on payment of rents and
      utility bills could help these businesses stay alive for longer.
    </Typography>
    <Typography
      variant="h6"
      gutterBottom
      display="block"
      style={{ color: 'inherit' }}
    >
      MAKE LOAN REPAYMENTS EASIER
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      2 out of every 3 businesses that are currently operational (i.e. not
      permanently closed due to the pandemic) reported concern about not being
      able to repay their existing loans. We asked these 58 respondents about
      the kind of assistance that would be most helpful to them in repaying
      loans, here’s what they replied.
    </Typography>
    <img
      src={require('images/MostHelpfulLoanPaybackDist.png')}
      className="w-100"
    />
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      It appears there is no single preference amongst our respondents, with
      “reduced interest rates in existing” being more popular over the
      “extension of loan periods”.
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      While further analysis could help reveal what the right intervention is
      for businesses belonging to different segments (hospitality, adventure,
      etc.), of different sizes, or of different financial, it is clear that
      there is a need for mechanisms – like the ones mentioned above – that
      would make pre-existing financial burdens a little easier to manage for
      businesses in the tourism industry.
    </Typography>

    <Typography
      variant="h6"
      gutterBottom
      display="block"
      style={{ color: 'inherit' }}
    >
      REDUCE TAX BURDENS
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      Providing support in tax, through mesures such as direct tax reduction,
      VAT return, or tax deferral could be useful. In this note, the 48
      respondents who cited “paying tax” as a concern made the following choices
      when asked about the kind of tax assistance they would need.
    </Typography>
    <img
      src={require('images/PreferredTaxAssistanceDist.png')}
      className="w-100"
    />
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      The above chart gives some indication of what businesses’ would prefer.
      However, further study might be warranted to identify the right kind of
      intervention for businesses on the basis of segment, size, and other
      characteristics.
    </Typography>
    <Typography
      variant="h6"
      gutterBottom
      display="block"
      style={{ color: 'inherit' }}
    >
      EASE BORROWING
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      More than 1 in every 3 of our respondents report that they will have
      difficulty in acquiring loans over the next six months.
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      Our in-person interviews with tourism entrepreneurs revealed that issues
      such lack of necessary collateral needed by small and medium-sized
      enterprises was a major deterrent in borrowing through financial
      institutions (read more here). And our data agrees as well. Refer to the
      chart below.
    </Typography>
    <img
      src={require('images/BizLoanActionsMultiples.png')}
      className="w-100"
    />
    <Typography
      className="w-50 mt-3"
      variant="caption"
      display="block"
      gutterBottom
      style={{ marginLeft: 'auto' }}
    >
      <b>
        Which of the following loan related impacts did your business have to
        face due to the pandemic?
      </b>
    </Typography>
    <Typography
      className="w-50"
      variant="caption"
      display="block"
      gutterBottom
      style={{ color: '#696969', marginLeft: 'auto' }}
    >
      Respondents could select more than one answer for this question. Each pie
      chart represents the percentage of respondents that choose a given option.
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      As we can see, only a small number of businesses could acquire loans with
      ease, with a big percentage finding the process difficult, or worse, not
      even able to get the financial assistance they need to keep their
      businesses alive.
    </Typography>
    <div className="w-50" style={{ marginLeft: 'auto' }}>
      <img src={require('images/ramesh_crop.jpg')} className="w-100" />
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        style={{ marginLeft: 'auto' }}
      >
        Ramesh, a tourism entrepreneur from Thamel, faced several financial
        hurdles trying to sustain his tourism business amidst the pandemic.
      </Typography>
      <Link to="/stories" style={{ marginLeft: 'auto' }}>
        Read his full story here.
      </Link>
    </div>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      There is a real need for making borrowing easier for small and
      medium-sized tourism businesses. Financial assistance from the government,
      easing of regulatory burdens, and smoother processes to borrow cash from
      banks and financial institutions (BFIs) can go a long way in helping
      support tourism businesses most in need. Similarly, policymakers should
      also consider making it easier for businesses to economically recover
      through consolidations, mergers, and acquisitions.
    </Typography>

    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      There is a real need for making borrowing easier for small and
      medium-sized tourism businesses. Financial assistance from the government,
      easing of regulatory burdens, and smoother processes to borrow cash from
      banks and financial institutions (BFIs) can go a long way in helping
      support tourism businesses most in need. Similarly, policymakers should
      also consider making it easier for businesses to economically recover
      through consolidations, mergers, and acquisitions.
    </Typography>
    <Typography
      variant="h6"
      gutterBottom
      display="block"
      style={{ color: 'inherit' }}
    >
      ESTABLISH TOURISM PROTECTION FUNDS
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      Finally, and most importantly, our data revealed that the pandemic has
      reared its ugliest head on small and medium-sized tourism businesses. It
      is high time policymakers pay heed to the nearly 7 out of 10 respondents
      who have demanded financial protection through the establishment of a
      tourism protection fund, and work towards formulating a mechanism that
      would help identify, prioritize, and support the tourism businesses’ that
      are in desperate need of financial assistance.
    </Typography>
  </Fragment>
);

export default story1;
