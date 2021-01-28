import React from 'react';
import { Link } from 'react-router-dom';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

export const HusaSidebar = () => {
    return (      
     <ProSidebar breakPoint={"xs"} popperArrow={true}>
      <Menu iconShape="square">
        <SubMenu title="Modulos" icon={''}>
           <MenuItem>
            Posts
            <Link to="/posts" />
          </MenuItem>
          <MenuItem>
            Users
            <Link to="/users" />
          </MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
    );
}