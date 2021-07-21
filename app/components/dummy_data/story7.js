import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import ZoomImage from 'components/StoryDetailView/ZoomImage';
import closedBusiness from 'images/closed-business.png';
import {primary} from 'theme';
const redColor = '#AC2020';

const story1 = (
  <Fragment>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      With the ongoing COVID-19 pandemic, stories and articles that report an
      increase in issues pertaining to people’s mental health and psychosocial
      wellbeing seem to be on the rise. Unsurprisingly, early data from our
      ongoing tourism workforce survey, which has so far received 206 responses,
      also reveal a similar trend among tourism workers in Nepal.
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      When we asked participants a few questions around their mental and
      psychological well-being, here is how they responded:
    </Typography>
    <img
      src={require('images/PsychosocialEffectsMultiples.png')}
      className="w-100"
    />
    <Typography
      className="w-50 mt-3"
      variant="caption"
      display="block"
      gutterBottom
      style={{ marginLeft: 'auto' }}
    >
      <b>Pychosocial effects of the pandemic.</b>
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
      Participants were asked to respond to “yes” or “no” to questions that
      talked about the above effects.
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      What’s interesting is the fact that over 95% of our respondents reported
      facing at least one of the above mentioned problems in their present
      lives. This is consistent with what we learnt during our in-person
      interviews.
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      However, despite almost all the workers reporting some form of effect on
      their mental health and psychosocial wellbeing, only a small fraction
      reported of having sought support through pyschosocial counseling.
    </Typography>
    <img src={require('images/CounselingDist.png')} className="w-100" />

    <Typography
      variant="h6"
      gutterBottom
      display="block"
      style={{ color: primary }}
    >
      WHAT MEASURES CAN BE TAKEN?
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      The above observations can be seen as an indication of the “social stigma”
      surrounding psychological health in Nepali society. While a majority of
      our respondents have reported of having to live with mental stress, very
      few have taken steps to deal with the situation.
    </Typography>
    <div className="w-50" style={{ marginLeft: 'auto' }}>
      <img src={require('images/saila.jpg')} className="w-100" />
      <Typography
        variant="caption"
        display="block"
        gutterBottom
        style={{ marginLeft: 'auto' }}
      >
        Ramesh, a tourism entrepreneur from Thamel, faced several financial
        hurdles trying to sustain his tourism business amidst the pandemic.
      </Typography>
      <Link to="/stories/4" style={{ marginLeft: 'auto' }}>
        Read his full story here.
      </Link>
    </div>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      Interventions that provide psychosocial support to tourism workers, such
      as destressing and healing programs to cope with the stress and tensions
      caused by the COVID-19 pandemic ​are recommended. Additionally, schemes
      that discourage foreign independent tours (FIT) by mandating the hiring of
      guides and porters in trekking and mountaineering expeditions can help
      re-employ the tourism workforce, also working to boost workers’ morale.
      Finally, the government should also consider programs and schemes which
      recognize the heroic efforts of guides, porters, and other tourism
      workers.
    </Typography>
    <Typography paragraph style={{ color: 'rgba(0, 0, 0, 0.87)' }}>
      By recognizing the fact that mental well-being of tourism workers as a
      public health problem that needs to be paid attention to, and designing
      mechanisms (or adopting some of the recommendations), the government has
      an opportunity to play a strong role – and also send a positive message –
      in helping support the recovery of the thousands of people who have
      devoted their entire lives to such an important industry in Nepal.
    </Typography>
  </Fragment>
);

export default story1;
