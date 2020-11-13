import React, { FC } from 'react';
import { History } from '@umijs/types';
import { Button } from 'antd';
import { LeftOutlined, RightOutlined, ArrowRightOutlined } from '@ant-design/icons';

interface FooterProps {
  nextText?: string;
  nextUrl?: string;
  previousText?: string;
  previousUrl?: string;
  firstPost?: boolean;
  lastPost?: boolean;
  history: History;
}

const FooterNavigate: FC<FooterProps> = ({ history, nextText, nextUrl, lastPost, firstPost, previousText, previousUrl }) => {
  if (firstPost) {
    return (<Button type="primary" onClick={() => {
      history.push(nextUrl)
    }}>
      现在就开始吧<ArrowRightOutlined />
    </Button>)
  }
  if (lastPost) {
    return (<div style={{
      display: 'flex',
      flexDirection: 'row-reverse'
    }}>
      {
        nextText && <Button type="primary" onClick={() => {
          history.push(nextUrl)
        }}>
          下一章 {nextText}<RightOutlined />
        </Button>
      }
      {
        previousText && <Button type="text" onClick={() => {
          history.push(previousUrl)
        }}>
          <LeftOutlined />上一页 {previousText}
        </Button>
      }
    </div>)
  }
  return (<div style={{
    display: 'flex',
    flexDirection: 'row-reverse'
  }}>
    {
      nextText && <Button type="primary" onClick={() => {
        history.push(nextUrl)
      }}>
        下一页 {nextText}<RightOutlined />
      </Button>
    }
    {
      previousText && <Button type="text" onClick={() => {
        history.push(previousUrl)
      }}>
        <LeftOutlined />上一页 {previousText}
      </Button>
    }
  </div>)
}
export default FooterNavigate;
