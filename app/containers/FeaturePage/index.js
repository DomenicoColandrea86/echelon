import React from 'react';
import { Helmet } from 'react-helmet';
import { Title } from 'components/Layout';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default class FeaturePage extends React.Component {
  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Features</title>
          <meta name="description" content="Features" />
        </Helmet>
        <Title>Features</Title>
        <List>
          <ListItem>
            <ListItemTitle>React v16.6</ListItemTitle>
            <p>A JavaScript library for building user interfaces</p>
          </ListItem>
          <ListItem>
            <ListItemTitle>D3 v5</ListItemTitle>
            <p>
              D3 is a JavaScript library for visualizing data with HTML, SVG,
              and CSS.
            </p>
          </ListItem>
          <ListItem>
            <ListItemTitle>Styled-Components</ListItemTitle>
            <p>Visual primitives for the component age.</p>
          </ListItem>
          <ListItem>
            <ListItemTitle>Redux</ListItemTitle>
            <p>A Predictable State Container for JS Apps</p>
          </ListItem>
          <ListItem>
            <ListItemTitle>Reselect</ListItemTitle>
            <p>Selector library for Redux</p>
          </ListItem>
          <ListItem>
            <ListItemTitle>Redux-Saga</ListItemTitle>
            <p>An alternative side effect model for Redux apps</p>
          </ListItem>
          <ListItem>
            <ListItemTitle>Industry-standard routing</ListItemTitle>
            <p>
              Write composable CSS thats co-located with your components for
              complete modularity. Unique generated class names keep the
              specificity low while eliminating style clashes. Ship only the
              styles that are on the page for the best performance.
            </p>
          </ListItem>
          <ListItem>
            <ListItemTitle>Offline-first</ListItemTitle>
            <p>
              The next frontier in performant web apps: availability without a
              network connection from the instant your users load the app.
            </p>
          </ListItem>
        </List>
      </div>
    );
  }
}
