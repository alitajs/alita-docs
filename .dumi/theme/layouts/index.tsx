import React, { useState, useEffect } from 'react';

import Layout from 'dumi-theme-default/src/layout';
import { IRouteComponentProps } from '@umijs/types';
import pathToRegexp from 'path-to-regexp';
import FooterNavigate from '../components/FooterNavigate';
import '../style/layout.less';

const getMeta = (route, location) => {
  const { pathname } = location;
  const { routes } = route;
  for (let key = 0; key < routes.length; key++) {
    if (pathToRegexp(routes[key].path).test(pathname)) {
      return routes[key].meta;
    }
  }
  return {}
}
const AlitaLayout: React.FC<IRouteComponentProps> = ({ children, ...props }) => {
  const { history, route, location } = props;
  const [pathMeta, setPathMeta] = useState<any>({});
  useEffect(() => {
    const meta = getMeta(route, location);
    setPathMeta(meta);
  }, [location.pathname]);

  return (
    <Layout {...props}>
      <div className="__dumi-default-alita-content">
        <article>{children}</article>
        <FooterNavigate history={history} {...pathMeta} />
      </div>
    </Layout>
  );
};

export default AlitaLayout;
