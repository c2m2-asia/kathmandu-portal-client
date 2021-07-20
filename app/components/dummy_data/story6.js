import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import ZoomImage from 'components/StoryDetailView/ZoomImage';
import closedBusiness from 'images/closed-business.png';
import { primary } from 'theme';
// const primary = '#AC2020';

const story1 = (
  <Fragment>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      Our ongoing survey for members of the Nepali tourism workforce provides
      useful insight into their immediate financial needs.
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      We asked survey participants about the kinds of financial support they
      would need to deal with the pandemic and its effects. Participants were
      provided a set of options to choose from. Multiple selections were
      allowed. Here’s how they responded.
    </Typography>
    <img src={require('images/FinancialNeedsMultiple.png')} className="w-100" />
    <Typography
      className="w-50 mt-3"
      variant="caption"
      display="block"
      gutterBottom
      style={{ marginLeft: 'auto' }}
    >
      <b>
        Which of the following forms of financial support will help you minimize
        the effects of the pandemic?
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
      If we look at the most popular answers, we can see that there is a need
      for direct monetary support, either through “grants” or “discounted
      borrowing”. “Social security” comes next, although to what extent the
      government can introduce such forms of financial support in an industry
      that has a lot of informal employment, is a question difficult to answer.
      Relatively fewer respondents seem to prioritize support that could
      potentially help with their existing debt, things like “interest rate
      reductions” or “loan period extensions”.
    </Typography>
    <Typography
      variant="h6"
      gutterBottom
      display="block"
      style={{ color: primary }}
    >
      WHERE DOES THE NEED FOR MONETARY SUPPORT COME FROM?
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      65% of our respondents report having no employment at present. 95% have
      some form of debt. Among the remaining 35% who managed to find work,
      nearly two-thirds report having to work at reduced incomes
      <sup style={{ color: primary }}>1</sup>. The pandemic, as we can expect,
      has had a severe toll on the income of the Nepali tourism workforce.
    </Typography>
    <Typography
      className="w-50"
      variant="caption"
      display="block"
      gutterBottom
      style={{ marginLeft: 'auto' }}
    >
      <span style={{ color: primary }}>1.</span>&nbsp; Review workforce survey
      facts and figures here.
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      At the same time, more than 90% of our respondents report losing at least
      three quarters of their savings during the pandemic. Almost one out every
      two workers reported having zero savings.
    </Typography>
    <img src={require('images/SavingsChangeDist.png')} className="w-100" />
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      Unsurprisingly, what our survey reveals about immediate concerns of the
      individuals working in Nepali tourism industry paints a grim picture of
      what the future holds for them. Chart below shows responses for another
      multiple-selection question. This time, respondents were asked about the
      kind of challenges they are likely to face in the next six months.
    </Typography>
    <img
      src={require('images/NextSixMonthsChallengesMultiples.png')}
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
        Which of the following are some challenges you are likely to face in the
        next 6 months?
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
      What is most disconcerting, is learning that not being able to afford a
      roof to live in, or buying food to survive is the grim reality in which
      most of our tourism workforce is currently living in.
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      <b>
        The financial capital of Nepal’s tourism workers is rapidly depleting.
      </b>
      With reduced savings, few options for borrowing, and increasing debt, the
      situation of most our respondents, many of whom have devoted almost their
      entire lives to tourism, hangs in the balance.
    </Typography>
    <Typography
      variant="h6"
      gutterBottom
      display="block"
      style={{ color: primary }}
    >
      WHAT MEASURES CAN BE TAKEN?
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      This section lists some of our recommendations, based on our
      interpretation of survey results.
    </Typography>
    <Typography
      variant="h6"
      gutterBottom
      display="block"
      style={{ color: 'inherit' }}
    >
      MAKING BORROWING EASIER
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      Our in-person interviews revealed that workers shy away from borrowing
      though financial institutions because they lack sufficient property,
      real-estate, or other assets that can be provided as collateral.
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      Even though the government has made provisions for tourism workers to
      borrow money through formal sources, our survey reveals that such a
      practice hasn’t been fully adopted by the workforce. As the chart below
      shows, a lot of borrowing still happens informally through friends and
      family.
    </Typography>
    <img src={require('images/BorrowingSplit.png')} className="w-100" />
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      It appears that despite having the best intentions, past efforts of
      encouraging borrowing through financial institutions do not seem to be
      working as expected. This represents an opportunity for further work, as
      finding ways to increase financial access can be crucial- in supporting
      the revival and recovery of the thousands of people working in Nepal’s
      tourism sector.
    </Typography>
  </Fragment>
);

export default story1;
