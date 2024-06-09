import { Popover,Button } from "antd"
import CustomAvatar from "../../custom-avatar"
import { useGetIdentity } from "@refinedev/core"
import { User } from "@/graphql/schema.types";
import { useState } from "react";
import { Text } from "@/components/text/text";
import SettingOutlined from "@ant-design/icons/lib/icons/SettingOutlined";

const CurrentUser = () => {
  const [IsOpen, setIsOpen] = useState(false)
  const {data:user} = useGetIdentity<User>()

  const content = (
    <div style={{
      display: 'flex',
      flexDirection:'column',
    }}>

      <Text
      strong
      style={{padding:'12px 20px'}}
      >
        {user?.name}
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
        style={{textAlign:'left'}}
        icon={<SettingOutlined/>}
        text="text"
        block
        onClick={() => setIsOpen(true)}
        >
          Account Setting
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
        
    </>
  )
}

export default CurrentUser