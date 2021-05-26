import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Layout, Menu, Avatar} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined, AppstoreOutlined, MailOutlined, SettingOutlined, DashboardTwoTone} from '@ant-design/icons';
import './router.css';

import Home from '../components/home/Home';
import startLearn from "../components/Initial-stage/start-learn/start-learn";
import prop from "../components/Initial-stage/prop/prop";
import state from "../components/Initial-stage/state/state";
import Clock from "../components/advanced-learning/clock/clock";
import Event from "../components/advanced-learning/event/event";
import Toggle from "../components/advanced-learning/toggle/toggle";
import Form from "../components/advanced-learning/form/form";
import Topics from '../components/advanced-learning/topics/Topics';
import routerProp from "../components/deep-learning/router-prop/router-prop"
import stepNine from "../components/deep-learning/step-9/step-nine";

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu} = Menu;

export default class router extends React.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            collapsed: false,
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <Layout style={{height: '100vh'}}>
                <Router>
                    <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="logo">
                            <Link exact="true" to='/'>
                                <DashboardTwoTone/>
                            </Link>
                        </div>
                        <Menu theme="dark" mode="inline"
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
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{padding: 0}}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" className="header-avatar"/>
                        </Header>
                        <Content className="site-layout-background"
                                 style={{
                                     margin: '24px 16px',
                                     padding: 24,
                                     minHeight: 280,
                                 }}>
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
                    </Layout>
                </Router>
            </Layout>
        )
    }
}
