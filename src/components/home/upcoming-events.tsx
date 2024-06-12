import { Card, List } from 'antd'
import { CalendarOutlined } from '@ant-design/icons'
import { Text } from '@/components/text/text'
import { useState } from 'react'
import UpcomingEventsSkeleton from '../skeleton/upcoming-events'

const UpcomingEvents = () => {
    const [isLoading, setIsLoading] = useState(true)

  return (
    <Card
    style={{ height: '100%' }}
    headStyle={{padding:'8px 16px'}}
    bodyStyle={{padding:'0 1rem'}}
    title={
        <div style={{
            display:'flex',
            alignItems:'center',
            gap:'8px',
        }}>
            <CalendarOutlined/>
            <Text size="sm" style={{marginLeft:'0.7rem'}}> 
                Upcoming Events
            </Text>
        </div>
    }
    >
         {isLoading ?(
            <List
                itemLayout='horizontal'
                dataSource={Array.from({length: 5}).map((_, index) => ({
                    id:index,
                }))}
                renderItem={() => <UpcomingEventsSkeleton/>}
            />
         ):(
            <List>
                
            </List>
         )}
    </Card>
  )
}

export default UpcomingEvents 

// ! after proper fixing of graphql use the code from bkp-upevents.txt file 