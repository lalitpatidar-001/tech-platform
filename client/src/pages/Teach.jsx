import React,{useState} from 'react'
import Header from '../components/teach-page/Header'
import { TAB_CONSTANTS } from '../utils/teach_tab_constants';
import TeachSection from '../components/teach-section/TeachSection';
import WorksheetSection from '../components/teach-section/WorksheetSection';
import MindmapSection from '../components/teach-section/MindmapSection';


const Teach = () => {
    const [currentTab , setCurrentTab] = useState(TAB_CONSTANTS.teach);


    const renderCurrentTab = () => {
        switch (currentTab) {
            case TAB_CONSTANTS.teach:
                return <TeachSection />;
            case TAB_CONSTANTS.worksheet:
                return <WorksheetSection />;
            case TAB_CONSTANTS.mind_map:
                return <MindmapSection />;
            default:
                return <TeachSection />;
        }
    };

  return (
    <div className="px-[33px] bg-[#FFFFFF]">
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab}/>
        <div className="h-[1px]   bg-[#909395]"/>
        <div>
            {renderCurrentTab()}
        </div>
    </div>
  )
}

export default Teach