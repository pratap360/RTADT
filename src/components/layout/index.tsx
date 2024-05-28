import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd"
import Headers from "./header"

const Layout = ({children}:React.PropsWithChildren) => {
  return (
    <ThemedLayoutV2 
    Header = {Headers}
    Title = {(titleProps) => <ThemedTitleV2 {...titleProps} text="DART"/>}
    >
        {children}
    </ThemedLayoutV2>
  )
}

export default Layout