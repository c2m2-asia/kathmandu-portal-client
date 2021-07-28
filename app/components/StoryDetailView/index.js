/**
 *
 * StoryDetailView
 *
 */

import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { withRouter } from 'react-router';
// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import stories from 'components/dummy_data/stories';
import BlogPost from './BlogPost';

function StoryDetailView(props) {
  const story = stories.find(s => s.id === parseInt(props.match.params.id));
  const otherArticles = stories.filter(s => s.id !== parseInt(props.match.params.id)); //eslint-disable-line

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [props.match.params.id]);

  return (
    <div className="bg-white">
      <div className="py-5">
        <BlogPost
          title={story.title}
          src={story.src}
          content={story.content}
          author={story.author}
          date={story.date}
          photoCourtesy={story.photoCourtesy}
          otherArticles={otherArticles}
        />
      </div>
    </div>
  );
}

StoryDetailView.propTypes = {
  match: PropTypes.object,
};

export default memo(withRouter(StoryDetailView));
