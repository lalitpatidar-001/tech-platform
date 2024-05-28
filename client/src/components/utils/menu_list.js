import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CastForEducationOutlinedIcon from '@mui/icons-material/CastForEducationOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';

export const menu_items = [
    {
        icon:<HomeOutlinedIcon style={{fontSize:28}}/>,
        title:"Dashboard",
        path:"/dashboard"
    },
    {
        icon:<CastForEducationOutlinedIcon style={{fontSize:26}}/>,
        title:"Teach",
        path:"/"
    },
    {
        icon:<AssignmentOutlinedIcon style={{fontSize:26}}/>,
        title:"Test",
        path:"/test"
    },
    {
        icon:< VideocamOutlinedIcon  style={{fontSize:26}}/>,
        title:"Take Class",
        path:"/take-class"
    },
    {
        icon:<PeopleOutlineOutlinedIcon style={{fontSize:26}}/>,
        title:"Video Library",
        path:"/video-library"
    },
    {
        icon:<ContactSupportOutlinedIcon style={{fontSize:26}}/>,
        title:"Doubts",
        path:"/doubts"
    },
]