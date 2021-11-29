import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Bar from './bar';

import Detail from './Detprof';
import { BrowserRouter as Router, Route, Link, BrowserRouter } from "react-router-dom";
import { Breadcrumb, Image, Modal } from 'antd';
import { Layout, Menu, Dropdown} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {CaretDownOutlined,BellFilled} from '@ant-design/icons';
import './Anto.css';
import 'antd/dist/antd.css';
import './App.css';
import './index.css';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Transactions
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          Matches
        </a>
      </Menu.Item>
    </Menu>
  );
  

const {Header}=Layout;

function App() {
 
    return(
        <div className="container">

            <div className="standard-bar">
              <Bar mail="  support@vikasbandhu.com    " phone="  +91 9876543210"/>

                
                
            </div>
        <div className="landing-page-header-bar">
        <Image className="logo" src="./logo192.png" preview={false} />
        <Breadcrumb className="header-breadcrumb" separator=" ">
            <Breadcrumb.Item className="item" href="#home">Home</Breadcrumb.Item>
                <Breadcrumb.Item>  
                      <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Operations<CaretDownOutlined />
    </a>
            </Dropdown>
            </Breadcrumb.Item>
            <Breadcrumb.Item className="item" href="#home">Users</Breadcrumb.Item>
            <Breadcrumb.Item className="item" href="#home">Producers</Breadcrumb.Item>
            
            <Breadcrumb.Item className="item" href="#home"><BellFilled /></Breadcrumb.Item>

         
        </Breadcrumb>
        <Detail/>
        
    </div>
    
    </div>
   );

  
}

export default App;
