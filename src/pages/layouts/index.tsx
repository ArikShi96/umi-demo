import React, { useEffect, useCallback, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { history } from 'umi';
import { Layout, Menu } from 'antd';
import styled from 'styled-components';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
interface IBasicLayoutProps extends RouteComponentProps {
  children: HTMLElement;
  className: string;
}

function BasicLayout(props: IBasicLayoutProps) {
  const { children, className } = props;

  const [collapsed, setCollapsed] = useState<boolean>(false);

  useEffect(() => {
    if (props.location.pathname === '/') {
      history.push('/home');
    }
  }, []);

  const toggle = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  return (
    <Layout className={className}>
      <Sider className="asite" trigger={null} collapsible collapsed={collapsed}>
        <div className="logo-wrap">LOGO</div>
        <Menu className="menu" mode="inline" defaultSelectedKeys={['home']}>
          <Menu.Item key="home" icon={<UserOutlined />}>
            <Link to="/home">首页</Link>
          </Menu.Item>
          <Menu.SubMenu
            key="admin"
            title="Admin"
            icon={<VideoCameraOutlined />}
          >
            <Menu.Item key="admin-1" icon={<VideoCameraOutlined />}>
              <Link to="/admin/dashboard">Dashboard</Link>
            </Menu.Item>
            <Menu.Item key="admin-2" icon={<UploadOutlined />}>
              <Link to="/admin/dashboard">Dashboard</Link>
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Sider>
      <Layout>
        <Header className="header">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle,
            },
          )}
        </Header>
        <Content className="content">{children}</Content>
      </Layout>
    </Layout>
  );
}

export default styled(BasicLayout)`
  background: #ffffff;
  width: 100%;
  height: 100vh;
  .asite,
  .header {
    background: #ffffff;
  }
  .menu {
    height: calc(100vh - 64px);
  }
  .content {
    margin: 20px;
    background-color: #ffffff;
  }
  .trigger {
    font-size: 18px;
    cursor: pointer;
    transition: color 0.3s;
    color: #1890ff;
  }
  .logo-wrap {
    height: 64px;
    padding: 16px;
    border-right: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
  }
`;
