import React from 'react';
import { Cards, Card } from 'dumi-theme-alita';
import ComImage from '../assets/icons/feature-guide-components-icon.png';
import IntroImage from '../assets/icons/guide-introduction-icon.png';
import CliImage from '../assets/icons/guide-installation-icon.png';
import FaqImage from '../assets/icons/guide-faq-icon.png';
import NativeImage from '../assets/icons/guide-nativeapis-icon.png';

const Home = () => {
  return (
    <Cards>
      <Card header="业务组件" href="/components/alita-layout" img={ComImage}>
        <p>你在业务开发中遇到的全部需求，应该都能在这里找到</p>
      </Card>
      <Card header="简介" href="/docs/intro" icon={IntroImage}>
        <p>了解 Alita 开发所需要的基础知识</p>
      </Card>
      <Card
        header="安装"
        href="/docs/docs/installation/environment"
        icon={CliImage}
      >
        <p>有关安装和设置系统以构建 Alita 应用程序的分步指南。</p>
      </Card>
      <Card header="原生能力" href="/native" icon={NativeImage}>
        <p>
          集成并使用设备的原生能力，快速对接，例如获取图片，修改原生状态栏等.
        </p>
      </Card>
      <Card header="常见问题" href="/faq/glossary" icon={FaqImage}>
        <p>获取有关 Alita 的一些最常见问题的答案。</p>
      </Card>
    </Cards>
  );
};
export default Home;
