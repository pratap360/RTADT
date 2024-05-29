import { Avatar as AntdAvatar,AvatarProps } from "antd"

type Props = AvatarProps & {
    name:string
}

const CustomAvatar = ({name,style,...rest}:Props) => {
  return (
    <AntdAvatar
    alt={'Pratap Parui'}
    size="small"
    style={{
        backgroundColor:'#0077bb',
        display:'flex',
        alignItems:'center',
        border:'none'
    }}
    >
    {name}
    </AntdAvatar>
  )
}

export default CustomAvatar