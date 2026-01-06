import { useState } from "react"
import Drawer from "./Drawer"

const CrudApp = () => {
    const [drawer, setDrawer] = useState(false)
    return (
        <>
                <Drawer setDrawer={setDrawer} drawer={drawer} />
        </>
    )
}

export default CrudApp