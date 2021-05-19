import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Layout, Menu} from 'antd';
import {AppstoreOutlined, MailOutlined, SettingOutlined, DashboardTwoTone} from '@ant-design/icons';
import './router.css';

import Home from '../home/Home';
import startLearn from "../Initial-stage/start-learn/start-learn";
import prop from "../Initial-stage/prop/prop";
import state from "../Initial-stage/state/state";
import Clock from "../advanced-learning/clock/clock";
import Event from "../advanced-learning/event/event";
import Toggle from "../advanced-learning/toggle/toggle";
import Form from "../advanced-learning/form/form";
import Topics from '../advanced-learning/topics/Topics';
import routerProp from "../deep-learning/router-prop/router-prop"
import stepNine from "../deep-learning/step-9/step-nine";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

export default class router extends React.Component {

    render() {
        return (
            <Layout>
                <Router>
                    <Sider style={{overflow: 'auto', height: '100vh', position: 'fixed', left: 0,}}>
                        <div className="logo">
                            <Link exact="true" to='/'>
                                <DashboardTwoTone/>
                                <span>首页</span>
                            </Link>
                        </div>
                        <Menu theme="dark" style={{width: 256}} mode="inline"
                              defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']}>
                            <SubMenu key="sub1" title={
                                <span>
                                    <MailOutlined/>
                                    <span>初学阶段</span>
                                </span>}>
                                <SubMenu key="sub2" title="简单数据展示">
                                    <Menu.Item key='000'><Link exact="true" to='/'>Hello World</Link></Menu.Item>
                                    <Menu.Item key='001'><Link exact="true" to='/start'>Start learn</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title="值的传递">
                                    <Menu.Item key='002'><Link exact="true" to="/prop">Prop</Link></Menu.Item>
                                    <Menu.Item key='003'><Link exact="true" to='/state'>state</Link></Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub4" title={
                                <span>
                                    <AppstoreOutlined/>
                                    <span>进阶学习</span>
                                </span>}>
                                <SubMenu key="sub5" title="复杂数据展示">
                                    <Menu.Item key='100'><Link exact="true" to='/clock'>Clock</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub6" title="事件">
                                    <Menu.Item key='101'><Link exact="true" to='/event'>Click</Link></Menu.Item>
                                    <Menu.Item key='102'><Link exact="true" to='/toggle'>Toggle</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub7" title="Form">
                                    <Menu.Item key='103'><Link exact="true" to='/form'>Form</Link></Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub8" title="Router">
                                    <Menu.Item key='104'><Link exact="true" to='/topics'>Router</Link></Menu.Item>
                                    <Menu.Item key='105'>
                                        <Link exact="true" to={{
                                            pathname: "/router-prop",
                                            search: "?id=1",    //获取this.props.location.search
                                            state: {fromDashboard: 11, name: '测试点击路由传值'}   //获取this.props.location.state
                                        }}>Router Prop</Link></Menu.Item>
                                </SubMenu>
                            </SubMenu>
                            <SubMenu key="sub9" title={
                                <span>
                                <SettingOutlined/>
                                <span>深度研究</span>
                            </span>}>
                                <SubMenu key="sub10" title="数据换算">
                                    <Menu.Item key="200"><Link to='/nine'>Calculator</Link></Menu.Item>
                                </SubMenu>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout" style={{marginLeft: 200}}>
                        <Header theme="dark" className="site-layout-head"/>
                        <Content className="site-layout-main">
                            <Route exact path='/' component={Home}/>
                            <Route exact path='/start' component={startLearn}/>
                            <Route exact path='/prop' component={prop}/>
                            <Route exact path='/state' component={state}/>
                            <Route exact path='/clock' component={Clock}/>
                            <Route exact path='/event' component={Event}/>
                            <Route exact path='/toggle' component={Toggle}/>
                            <Route exact path='/form' component={Form}/>
                            <Route exact path='/topics' component={Topics}/>
                            <Route exact path='/router-prop' component={routerProp}/>
                            <Route exact path='/nine' component={stepNine}/>
                        </Content>
                        <Footer className="site-layout-footer">
                            Ant Design ©2018 Created by Ant UED
                        </Footer>
                    </Layout>
                </Router>
            </Layout>
        )
    }
}
