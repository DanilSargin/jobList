import {useLocation, useNavigation, useParams} from "react-router";
import {useJob} from "../hocs/useJob";
import {JobsListType} from "../hocs/useJobsList";

export const JobPage = () => {
    const {id} = useParams()

    const {job} = useJob(id || '')


    return (
        <div>
            <p>{job?.title}</p>
        </div>
    )
}