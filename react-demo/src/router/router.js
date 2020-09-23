import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Layout, Menu} from 'antd';
import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    UploadOutlined,
    VideoCameraOutlined,
    MailOutlined, SettingOutlined
} from '@ant-design/icons';

import './router.css';

import Home from '../home/Home';
import About from '../about/About';
import Topics from '../topics/Topics';
import App from "../learn-1/App";
import LearnTwo from "../learn-2/learn-two";
import LearnThree from "../learn-3/learn-three";
import LearnFour from "../learn-4/learn-four";
import LearnFive from "../learn-5/learn-five";
import LearnSix from "../learn-6/learn-six";
import LearnSeven from "../learn-7/learn-seven";
import LearnEight from "../learn-8/learn-eight";
import LearnNine from "../learn-9/learn-nine";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

export default class router extends React.Component {
    render() {
        return (
            <Layout>
                <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0,}}>
                    <div className="logo"/>
                    <Menu theme="dark" onClick={this.handleClick} style={{width: 256}} mode="inline"
                          defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                        <SubMenu key="sub1" title={
                            <span>
                                <MailOutlined/>
                                <span>Navigation One</span>
                            </span>}>
                            <Menu.ItemGroup key="g1" title="Item 1">
                                <Menu.Item key="1">Option 1</Menu.Item>
                                <Menu.Item key="2">Option 2</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup key="g2" title="Item 2">
                                <Menu.Item key="3">Option 3</Menu.Item>
                                <Menu.Item key="4">Option 4</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<AppstoreOutlined/>} title="Navigation Two">
                            <Menu.Item key="5">Option 5</Menu.Item>
                            <Menu.Item key="6">Option 6</Menu.Item>
                            <SubMenu key="sub3" title="Submenu">
                                <Menu.Item key="7">Option 7</Menu.Item>
                                <Menu.Item key="8">Option 8</Menu.Item>
                            </SubMenu>
                        </SubMenu>
                        <SubMenu key="sub4" title={
                            <span>
                                <SettingOutlined/>
                                <span>Navigation Three</span>
                            </span>}>
                            <Menu.Item key="9">Option 9</Menu.Item>
                            <Menu.Item key="10">Option 10</Menu.Item>
                            <Menu.Item key="11">Option 11</Menu.Item>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout className="site-layout" style={{marginLeft: 200}}>
                    <Header theme="dark" style={{position: 'fixed', zIndex: 1, width: '100%', padding: 0}}/>
                    <Content style={{margin: '80px 16px 0', overflow: 'initial'}}>
                        <div className="site-layout-background" style={{padding: 24, textAlign: 'center'}}>
                            <div>
                                <Router>
                                    <div>
                                        <ul>
                                            <li><Link to='/'>首页</Link></li>
                                            <li><Link to='/about'>关于</Link></li>
                                            <li><Link to='/topics'>主题列表</Link></li>
                                            <li><Link to='/one'>一</Link></li>
                                            <li><Link to='/two'>二</Link></li>
                                            <li><Link to='/three'>三</Link></li>
                                            <li><Link to='/four'>四</Link></li>
                                            <li><Link to='/five'>五</Link></li>
                                            <li><Link to='/six'>六</Link></li>
                                            <li><Link to='/seven'>七</Link></li>
                                            <li><Link to='/Eight'>八</Link></li>
                                            <li><Link to='/nine'>九</Link></li>
                                        </ul>
                                        <Route exact path='/' component={Home}/>
                                        <Route path='/about' component={About}/>
                                        <Route path='/topics' component={Topics}/>
                                        <Route path='/one' component={App}/>
                                        <Route path='/two' component={LearnTwo}/>
                                        <Route path='/three' component={LearnThree}/>
                                        <Route path='/four' component={LearnFour}/>
                                        <Route path='/five' component={LearnFive}/>
                                        <Route path='/six' component={LearnSix}/>
                                        <Route path='/seven' component={LearnSeven}/>
                                        <Route path='/Eight' component={LearnEight}/>
                                        <Route path='/nine' component={LearnNine}/>
                                    </div>
                                </Router>
                            </div>
                            ...
                            <br/>
                            Really
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            long
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            ...
                            <br/>
                            content
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
}
