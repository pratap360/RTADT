import React from "react";

import { useGetIdentity } from "@refinedev/core"


// import SettingOutlined from "@ant-design/icons/lib/icons/SettingOutlined";
import { SettingOutlined } from "@ant-design/icons";
import { Popover,Button } from "antd"

import { User } from "@/graphql/schema.types";


import CustomAvatar from "../../custom-avatar"
// import { useState } from "react";
import { Text } from "@/components/text/text";
import { AccountSettings } from "../account-setting";

const CurrentUser = () => {
  const [IsOpen, setOpened] = React.useState(false);
  const {data:user} = useGetIdentity<User>();

  const content = (
    <div style={{
      display: 'flex',
      flexDirection:'column',
    }}>

      <Text
      strong
      style={{padding:'12px 20px'}}
      >
        {/* {user?.name} */}
        Pratap Parui
      </Text>
      <div
      style={{borderTop:'1px solid #d9d9d',
      padding:'4px',
      display:'flex',
      flexDirection:'column',
      gap:'4px'
    }}
      >
        <Button
          style={{ textAlign: "left" }}
          icon={<SettingOutlined />}
          type="text"
          block
          onClick={() => setOpened(true)}
        >
          Account settings
        </Button>
      </div>
    </div>
  )

  return (
    <>
        <Popover
        placement ='bottomRight'
        trigger="click"
        overlayInnerStyle={{padding:0}}
        overlayStyle={{zIndex:999}}
        content={content}
        >
            <CustomAvatar
            name={user?.name}
            src={user?.avatarUrl}
            size="default"
            style={{cursor:'pointer'}}
            
            />
        </Popover>
        {user && (
          <AccountSettings
          opened={IsOpen}
          setOpened={setOpened}
          userId={user.id}
          />
        )}
    </>
  )
}

export default CurrentUser