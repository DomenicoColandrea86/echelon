import React from 'react';
import { Helmet } from 'react-helmet';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from 'components/Header';
import Footer from 'components/Footer';
import { Container, Content } from 'components/Layout';
import GlobalStyle from '../../global-styles';

import ChartsPage from '../ChartsPage/Loadable';
import FeaturePage from '../FeaturePage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';

class App extends React.PureComponent {
  state = {
    isSideFolded: true,
    isMobileNavFolded: true,
  };

  onSideToggle = () => {
    this.setState(prevState => ({
      isSideFolded: !prevState.isSideFolded,
      isMobileNavFolded: true,
    }));
  };

  onMobileNavToggle = () => {
    this.setState(prevState => ({
      isMobileNavFolded: !prevState.isMobileNavFolded,
      isSideFolded: true,
    }));
  };

  render() {
    const { isSideFolded, isMobileNavFolded } = this.state;
    return (
      <>
        <Helmet titleTemplate="%s - TrendTracker" defaultTitle="TrendTracker">
          <meta name="description" content="TrendTracker" />
        </Helmet>
        <Header
          isSideFolded={isSideFolded}
          isMobileNavFolded={isMobileNavFolded}
          onSideToggle={this.onSideToggle}
          onMobileNavToggle={this.onMobileNavToggle}
        />
        <Container>
          <Content>
            <Switch>
              <Route exact path="/" component={ChartsPage} />
              <Route path="/features" component={FeaturePage} />
              <Route path="" component={NotFoundPage} />
            </Switch>
          </Content>
          <Footer />
        </Container>
        <GlobalStyle />
      </>
    );
  }
}

export default withRouter(App);
