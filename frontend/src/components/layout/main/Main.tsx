import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import Meetings from "../../meetings/see-meetings/Meeting";
import AddMeeting from "../../meetings/add-meeting/AddMeeting";

export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Meetings />} />
            <Route path="/adding" element={<AddMeeting />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}
